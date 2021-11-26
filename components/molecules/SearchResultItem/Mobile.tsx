import card from './mobile.module.scss'
import classnames from 'classnames'
import Ellipsis from 'react-ellipsis-pjs'
import get from 'lodash/get'
import striptags from 'striptags'
import { IconBookmark, IconCite, IconLink } from 'components/icons'
import { SearchResultItemProps } from 'types'
import { useRouter } from 'next/router'
import { CheckBox, ActionItem, ButtonFab, FeaturedChip } from 'components/atoms'

const __renderTitle = (title = '', href = '/') => {
  return (
    <div className="first_letter_caps py__2">
      <ActionItem
        text={striptags(title.toString())}
        href="/title/[id]"
        as={`/title/${href}`}
        type="link__title"
      />
      <div className={'pull__l1'}>
        <FeaturedChip type={'reviewed'} /> <FeaturedChip type={'referenced'} />
      </div>
    </div>
  )
}

const __renderContentType = (title, journal, year) => {
  return (
    <div className="small">
      <strong className="color__nut7">Journal - {year}</strong>
      <small className="px__2 color__nut7 italic">{title}</small>
    </div>
  )
}

const __renderAbstract = (content) => {
  return (
    <div className="py__2">
      <div
        className={classnames(card.article__abstract, 'color__nut7')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

const __renderAuthors = (authors: []) => {
  const authorsList = authors.map(({ name }) => name).join('; ')

  return (
    authors && (
      <div className="py__2">
        <small className="flex">
          <small className="px__2 pl__0 mute">By - </small>
          <Ellipsis text={authorsList} suffix="...[et al.]" />
        </small>
      </div>
    )
  )
}

const __renderSubjects = (keywords: [string]) => {
  return (
    keywords && (
      <div className="py__1">
        <small className="mute">Subject - </small>
        {keywords
          .map<React.ReactNode>((name, id) => <small key={id}>{name}</small>)
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderActions = (link: [], id) => {
  const href = get(link, '[0].url')

  return (
    <div className={card.article__actions__sub}>
      <CheckBox id={'it_id' + id} />
      <ButtonFab icon={<IconCite />} small classNames="bg__nut1" />
      <ButtonFab icon={<IconLink />} small classNames="bg__nut1" />
      <ButtonFab icon={<IconBookmark />} small classNames="bg__nut1" />
      <ActionItem
        text={'⠀⠀Read⠀⠀'}
        onClick={() => window.open(href)}
        type={'btn__secondary'}
      />
    </div>
  )
}

const CardCurated: React.FC<SearchResultItemProps> = (props) => {
  const { id, href, title, abstract, journal, year, author, link, subjects } =
    props
  const router = useRouter()

  const onclick = () => {
    router.push('/title/[id]', `/title/${href}`)
  }

  return (
    <article>
      <div className={card.article}>
        <section className="mw__3 ml__0 mr__0" onClick={onclick}>
          {__renderTitle(title, href)}
          {__renderContentType(title, journal, year)}
          {abstract && __renderAbstract(abstract)}
          {subjects && __renderSubjects(subjects)}
          {author && __renderAuthors(author)}
        </section>
        {__renderActions(link, id)}
      </div>
    </article>
  )
}

export default CardCurated
