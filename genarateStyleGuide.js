const fs = require('fs')
const path = require('path')
// const ts = require('typescript')
// const babel = require('@babel/core')
// const tsConfig = require('./tsconfig.json')
// const compilerOptions = tsConfig.compilerOptions

const removeItem = (arr) => {
  return arr.filter(function (item) {
    if (!item.match(/index|.DS|Svg./g)) {
      return item
    }
  })
}

async function getCompFiles() {
  const compList = []
  const compNameList = []
  const sidePanelContent = []
  const files = await getFiles('./components')

  for (const index in files) {
    let componentsContent = ''
    const fileRelPath = files[index]
    // const fileFullPath = path.resolve(directoryPath, fileRelPath)
    const fileContent = await fs.promises.readFile(fileRelPath, 'utf8')
    const moduleName = path.basename(fileRelPath).replace('.tsx', '')

    const hasCustomDoc = getStringBetween(fileContent)

    if (hasCustomDoc) {
      componentsContent = hasCustomDoc
    } else {
      componentsContent = `<${moduleName} />`
    }

    // not to import component if it's empty
    if (componentsContent.trim() !== moduleName) {
      compNameList.push(
        `import ${moduleName} from '../${fileRelPath.replace('.tsx', '')}'`
      )
    }

    sidePanelContent.push(`'${moduleName}'`)

    compList.push(
      `<article className="docStage" key="${moduleName}">
      <div className="docAnchor" id="${moduleName}" />
      <header className="docHeader"><a href="http://localhost:3000/__nextjs_launch-editor?file=${fileRelPath}">${moduleName}</a></header>
      ${componentsContent}
      </article>`
    )
  }

  updateStyleGuide(
    compList.join('\n'),
    compNameList.join('\n'),
    sidePanelContent
  )
}

function getStringBetween(content, start = '__DOC', end = 'DOC__') {
  if (!content) return null
  if (content.indexOf(start, 0) === -1) return null
  const startIndex = content.indexOf(start, 0) + start.length

  return (
    content &&
    content
      .substring(startIndex, content.indexOf(end, content.indexOf(start, 0)))
      .trim()
  )
}

const template = `
import React from 'react'

__COMPONENT_LIST__

const data = [__SIDE_PANEL_CONTENT__]

const StyleGuide: React.FC = () => {
  const [searchText, setSearchText] = React.useState('')

  const onChangeInput = (e) => {
    setSearchText(e.target.value)
  }

  const filteredList = data?.filter((item: any) => {
    return item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  })

  return <div>

  <style
  dangerouslySetInnerHTML={{
    __html: \`
  .docWrapper {
    display: flex;
  }
  .docPanel {
    overflow-y: auto;
    height: 100vh;
    padding-top: 90px;
    width: 20%;
  }
  .docAnchor {
    top: -100px;
    position: relative;
  }
  .docContent {
    flex: 1;
    overflow-y: auto;
    height: 100vh;
    padding-top: 90px;
  }
  .docNav {
    background: #fff;
    padding: 4px 16px;
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    z-index: 999;
    box-shadow: 0 0 2px 1px rgb(0 0 0 / 30%);
    top: 0;
  }
  .docNavH1 {
    font-size: 16px;
    font-weight: 600;
  }
  .docInput {
    padding: 8px;
    margin-left: 16px;
    border-radius: 4px;
    max-width: 400px;
    width: 100%;
    background: #eee;
  }
  .docHeader {
    font-size: 12px;
    color: #979797;
    margin: 8px 0;
  }
  .docPanelItem {
    padding: 4px 16px;
    display: block;
  }
  .docStage {
    position: relative;
    margin: 16px;
    padding: 0 16px 16px;
    overflow: scroll;
    box-shadow: 0px 1px 4px -1px rgb(0 0 0 / 20%);
    border-radius: 3px;
  }
\`
  }}
/>
    <nav className="docNav">
      <h1 className="docNavH1">Style guide / Components list</h1>
      <input className="docInput" placeholder="search component" onChange={onChangeInput} />
    </nav>
    <section className="docWrapper">
      <aside className="docPanel">
      {filteredList?.map((moduleName) => {
        return <a key={moduleName} className="docPanelItem" href={'#'+moduleName}>{moduleName}</a>
      })}
      </aside>
      <div className="docContent">__REACT_COMPS__</div>
    </section>
  </div>
}

export default StyleGuide
`

const updateStyleGuide = (compListData, compNameList, sidePanelContent) => {
  const styleGuideNew = './pages/styleguide.tsx'
  const resultTemplate = template
    .replace('__COMPONENT_LIST__', compNameList)
    .replace('__REACT_COMPS__', compListData)
    .replace('__SIDE_PANEL_CONTENT__', sidePanelContent)

  fs.writeFile(styleGuideNew, resultTemplate, 'utf8', function (err) {
    if (err) return console.log(err)
  })
}

function getFiles(dir, files_) {
  files_ = files_ || []
  var files = fs.readdirSync(dir)
  for (var i in files) {
    var name = dir + '/' + files[i]
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_)
    } else {
      files_.push(name)
    }
  }

  return removeItem(files_)
}

getCompFiles()
