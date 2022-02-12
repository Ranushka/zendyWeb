import classnames from 'classnames'
import striptags from 'striptags'
import Ellipsis from 'react-ellipsis-pjs'
import card from './desktop.module.scss'
import get from 'lodash/get'
import { SearchResultItemProps } from 'types'
import {
  CheckBox,
  ActionItem,
  ButtonFab,
  Space,
  FeaturedChip,
} from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'
import { genarateTitleUrlPath } from 'lib/helpers'
import useGlobel from 'context/GlobelContext'

// const __renderChips = (isReviewed, isReferenced) => {
//   if (!isReviewed && !isReferenced) return

//   return (
//     <div className={'pull__l1'}>
//       {isReviewed && <FeaturedChip type={'reviewed'} />}
//       {isReferenced && <FeaturedChip type={'referenced'} />}
//     </div>
//   )
// }

const __renderTitle = (title = '', permanentLinkId) => {
  const titleId = genarateTitleUrlPath(title, permanentLinkId)
  const [state, setState] = useGlobel()
  const { selectionMode } = state

  return (
    <div className="first_letter_caps py__2 pt__0">
      {selectionMode && (
        <div className="pull__l5 absolute stage__2 px__3 py__2 rounded__1 bg__white">
          <CheckBox className={''} id={'it_id' + permanentLinkId} />
        </div>
      )}

      <ActionItem
        text={striptags(title.toString())}
        href="/title/[id]"
        as={`/title/${titleId}`}
        type="link__title"
        className="block__inline"
      />
      {/* {__renderChips(isReviewed, isReferenced)} */}
    </div>
  )
}

const __renderContentType = (title, journal, year) => {
  return (
    <div className="py__3 pt__0 lh__5">
      <strong className="color__nut7 small">Journal - {year}</strong>
      <ActionItem
        className="px__2"
        text={<span dangerouslySetInnerHTML={{ __html: title }} />}
        // href={`/search?q=${journal.title}`}
        type="link__small"
      />
    </div>
  )
}

const __renderAbstract = (content) => {
  return (
    <div className="block py__2 pt__0">
      <div
        className={classnames(card.article__abstract, 'color__nut7')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

const __renderAuthors = (authors: []) => {
  return (
    authors && (
      <div className="py__1">
        <small className="px__2 pl__0 mute">By - </small>
        {authors
          .map<React.ReactNode>((name, id) => {
            if (name) {
              return (
                <ActionItem
                  key={id}
                  text={name}
                  as={`/search?author=${name}`}
                  href={`/search?author=${name}`}
                  // href={'/'}
                  type="link__small"
                />
              )
            }
          })
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderKeywords = (keywords: string) => {
  return (
    keywords && (
      <div className="py__1">
        <small className="px__2 pl__0 mute">keywords - </small>
        {keywords
          .split(',')
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={'/'} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderSubjects = (keywords: [string]) => {
  return (
    keywords && (
      <div className="py__1">
        <small className="px__2 pl__0 mute">Subjects - </small>
        {keywords
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={'/'} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderActions = (link: [], id, downloadLink: string) => {
  const href = get(link, '[0].url')

  return (
    <section className={classnames('px__4 pr__0')}>
      <div className={card.article__actions__sub}>
        <div className="flex">
          <ButtonFab icon={<IconCite />} small />
          <ButtonFab icon={<IconLink />} small />
          <ButtonFab icon={<IconBookmark />} small />
        </div>
      </div>
      <Space size={3} />
      <ActionItem
        text={'Download'}
        onClick={() => window.open(downloadLink)}
        type="btn__secondary"
        block
      />
      <Space size={3} />
      <ActionItem
        text={'⠀⠀Read⠀⠀'}
        href={href}
        onClick={() => window.open(href)}
        type={'btn__primary'}
        block
      />
    </section>
  )
}

const CardCurated: React.FC<SearchResultItemProps> = ({
  id,
  href,
  title,
  abstract,
  journal,
  year,
  authors,
  keywords,
  link,
  downloadLink,
  permanentLinkId,
  isReviewed,
  isReferenced,
  subjects,
}) => {
  return (
    <article className="flex__center rounded__1 my__3 mb__0 mw__5 bg__white stage__2">
      <div className="flex__center py__3 px__4">
        <section className="mw__4 ml__0 mr__0 block">
          {__renderTitle(title, permanentLinkId)}
          {__renderContentType(title, journal, year)}
          {abstract && __renderAbstract(abstract)}
          {keywords && __renderKeywords(keywords)}
          {subjects && __renderSubjects(subjects)}
          {authors && __renderAuthors(authors)}
        </section>

        {__renderActions(link, id, downloadLink)}
      </div>
    </article>
  )
}

export default CardCurated
