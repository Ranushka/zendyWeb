import React from 'react'
import striptags from 'striptags'
import get from 'lodash/get'
import { SearchResultItemProps } from 'types'
import { CheckBox, ActionItem, ButtonFab } from 'components/atoms'
import { IconCite, IconBookmark, IconLink } from 'components/icons'
import { generateTitleUrlPath } from 'lib/helpers'
import useGlobal from 'context/GlobalContext'

const __renderTitle = (title = '', permanentLinkId) => {
  const titleId = generateTitleUrlPath(title, permanentLinkId)
  const [state, setState] = useGlobal()
  const { selectionMode } = state

  console.log(setState)

  return (
    <div className="block">
      {selectionMode && (
        <div className="-ml-9 pl-2 py-2 absolute shadow rounded-md bg-white">
          <CheckBox className={''} id={'it_id' + permanentLinkId} />
        </div>
      )}

      <ActionItem
        text={striptags(title.toString())}
        href="/title/[id]"
        as={`/title/${titleId}`}
        type="link__title"
        className="inline-block text-lg text-gray-500 font-serif"
      />
      {/* {__renderChips(isReviewed, isReferenced)} */}
    </div>
  )
}

const __renderContentType = (
  journalTitle,
  publicationYear,
  publicationName
) => {
  return (
    <div className="pb-2">
      <strong className="pr-2 text-gray-500">Journal</strong>
      {publicationYear && (
        <span>
          -
          <ActionItem
            className="px-2"
            text={publicationYear}
            type="link__small"
          />
        </span>
      )}
      {journalTitle && (
        <span>
          -
          <ActionItem className="px-4" text={journalTitle} type="link__small" />
        </span>
      )}
      {publicationName && (
        <span>
          -
          <ActionItem
            className="px-4"
            text={publicationName}
            type="link__small"
          />
        </span>
      )}
    </div>
  )
}

const __renderAbstract = (content) => {
  return (
    <div className="block pb-2">
      <div
        className="text-gray-500 line-clamp-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

const __renderAuthors = (authors: [string]) => {
  return (
    authors && (
      <div className="pt-1">
        {__renderTagTitle('By')}
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

const __renderTagTitle = (title: string) => {
  return <small className="pr-4 text-gray-500">{title} - </small>
}

const __renderKeywords = (keywords: string) => {
  return (
    keywords && (
      <div className="py-1">
        {__renderTagTitle('Keywords')}
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
      <div className="py-1">
        {__renderTagTitle('Subjects')}
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
    <>
      <div className="flex justify-around my-4">
        <ButtonFab icon={<IconCite />} small />
        <ButtonFab icon={<IconLink />} small />
        <ButtonFab icon={<IconBookmark />} small />
      </div>

      <ActionItem
        className="mb-4 mt-2"
        text={'Download'}
        onClick={() => window.open(downloadLink)}
        type="btn__secondary"
        block
      />
      <ActionItem
        text="Read"
        href={href}
        onClick={() => window.open(href)}
        type="btn__primary"
        block
      />
    </>
  )
}

const CardCurated: React.FC<SearchResultItemProps> = ({
  id,
  // href,
  title,
  abstract,
  journalTitle,
  publicationYear,
  publicationName,
  authors,
  keywords,
  link,
  downloadLink,
  permanentLinkId,
  // isReviewed,
  // isReferenced,
  subjects
}) => {
  return (
    <article className="flex items-center rounded-md mb-4 max-w-4xl bg-white shadow mx-auto">
      <div className="py-4 px-6 w-full block sm:flex">
        <section className="w-full sm:w-9/12 block">
          {__renderTitle(title, permanentLinkId)}
          {__renderContentType(journalTitle, publicationYear, publicationName)}
          {abstract && __renderAbstract(abstract)}
          {keywords && __renderKeywords(keywords)}
          {subjects && __renderSubjects(subjects)}
          {authors && __renderAuthors(authors)}
        </section>
        <section className="pl-0 sm:pl-8 w-full sm:w-3/12">
          {__renderActions(link, id, downloadLink)}
        </section>
      </div>
    </article>
  )
}

export default CardCurated
