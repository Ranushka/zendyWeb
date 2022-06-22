import React from 'react'
import Router from 'next/router'
import useTitleDetail from 'fetchHooks/useTitleDetail'
import Skeleton from 'react-loading-skeleton'
import { IconBookmark, IconCite } from 'components/icons'
import { ActionItem, ButtonFab } from 'components/atoms'
import { NextArticle } from 'components/organisms'
import PublicationIssueJsonLd from 'analytics/PublicationIssueJsonLd'
import TitleDetailHead from './TitleDetailHead'
import TitleDetailSource from './TitleDetailSource'
import TitleDetailTitle from './TitleDetailTitle'
import TitleDetailAbstract from './TitleDetailAbstract'

const __renderAuthors = (authors: []) => {
  return (
    authors && (
      <div className="py-2">
        <small>By </small>
        {authors
          .map<React.ReactNode>(({ name }, id) => (
            <ActionItem key={id} text={name} href={'/'} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderKeywords = (keywords: string) => {
  return (
    keywords && (
      <div className="py-2">
        <span className="mute">Keywords</span>
        {keywords
          .split(',')
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={'/'} />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}
const __renderSubjects = (subjects: []) => {
  return (
    subjects && (
      <div className="py-2">
        <span className="mute">Subjects </span>
        {subjects
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={'/'} />
          ))
          .reduce((prev, curr) => [prev, ', ', curr])}
      </div>
    )
  )
}

const __renderContent = ({
  abstract,
  authors,

  downloadLink,

  journalTitle,
  keywords,

  publicationName,
  publicationYear,
  subjects,
  title,
  volume,
  zendyLink
}) => {
  // const href = get(link, '[0].url')

  return (
    <>
      <article className="max-w-3xl m-auto pt-16 px-8">
        <PublicationIssueJsonLd
          authorName={authors && authors.flatMap((auObj) => auObj.name)}
          name={title}
          datePublished={publicationYear}
          description={abstract}
          issueNumber={volume}
          publisher={publicationName}
        />
        {TitleDetailHead()}
        {TitleDetailTitle(title)}
        {TitleDetailSource(title, journalTitle, publicationYear)}
        {TitleDetailAbstract(abstract)}
        {__renderAuthors(authors)}
        {__renderKeywords(keywords)}
        {__renderSubjects(subjects)}
        <div className="">
          <div>
            <ButtonFab icon={<IconBookmark />} />
            <ButtonFab icon={<IconCite />} />
          </div>
          <ActionItem
            text={'Download'}
            href={downloadLink}
            type="btn__secondary"
          />
          <ActionItem
            newWindow
            text={'Read'}
            href={zendyLink}
            type="btn__primary"
          />
        </div>
      </article>
      <div className="">
        <div className="">
          <NextArticle
            url="/"
            prev
            title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
          />
        </div>

        <div className="">
          <NextArticle
            url="/"
            title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
          />
        </div>
      </div>
    </>
  )
}

const __renderLoading = () => {
  return (
    <div className={'mw__3 px-4'}>
      <div className="gaps__5" />
      <Skeleton />
      <div className="gaps__3" />
      <Skeleton height="80px" />
      <div className="gaps__4" />
      <Skeleton />
      <div className="gaps__4" />
      <Skeleton count={8} />
      <div className="gaps__4" />
      <Skeleton />
      <div className="gaps__4" />
      <Skeleton height="40px" />
    </div>
  )
}

const __renderSomethingWentWrong = () => {
  return (
    <div className={'mw__3 px-4 py__6'}>
      <h2>We are sorry,</h2>
      <h3>something went wrong. with this artical</h3>
      <div className="gaps__4" />
      <p>We have allready sent an alert to our devolopers on behalf of you</p>
      <div className="gaps__2" />
      <small>Thanks in advance for your patients</small>
      <div className="gaps__4" />
      <ActionItem
        text={'← Back to results'}
        onClick={() => Router.back()}
        type="btn__primary"
      />
    </div>
  )
}

const TitleDetail: React.FC = () => {
  const { data } = useTitleDetail()

  if (!data) {
    return __renderLoading()
  }

  if (data.status === 500) {
    return __renderSomethingWentWrong()
  }

  return <div>{__renderContent(data.data)}</div>
}

export default TitleDetail
