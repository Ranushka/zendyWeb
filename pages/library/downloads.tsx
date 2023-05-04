import React from 'react'
import LibraryDataRow from 'components/organisms/LibraryDataRow'
import LibraryTemplate from 'components/templates/LibraryTemplate'
import { commonMessages } from 'helpers/getMessages'

const Downloads: React.FC = () => {
  return (
    <LibraryTemplate>
      {dataSet.map((item, key) => (
        <LibraryDataRow key={'download' + key} {...item} />
      ))}
    </LibraryTemplate>
  )
}

const dataSet = [
  {
    id: 23,
    name: 'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut'
  },
  {
    id: 24,
    name: 'dolore veritatis porro provident adipisci blanditiis et sunt'
  },
  {
    id: 25,
    name: 'quaerat velit veniam amet cupiditate aut numquam ut sequi'
  }
]

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Downloads
