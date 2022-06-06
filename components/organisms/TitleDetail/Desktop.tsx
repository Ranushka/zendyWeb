import React from 'react'
import classnames from 'classnames'
import Router from 'next/router'
import styles from './desktop.module.scss'
import useTitleDetail from 'fetchHooks/useTitleDetail'
import Skeleton from 'react-loading-skeleton'
import {
  IconBookmark,
  IconSocialLinkedIn,
  IconSocialTwitter,
  IconSocialFacebook,
  IconCite
} from 'components/icons'
import { ActionItem, ButtonFab } from 'components/atoms'
import { NextArticle } from 'components/molecules'
import PublicationIssueJsonLd from 'analytics/PublicationIssueJsonLd'

// interface publicationTypeProps {
//   type: string
//   id: string
// }

// interface pageProps {
//   title: string
//   type: string
//   authors: string[]
//   body: string
//   publicationYear: string
//   subjects: string[]
//   publicationType: publicationTypeProps
// }

const __renderTitle = (title = '') => {
  return (
    <h1 className={classnames('first_letter_caps', styles.title)}>{title}</h1>
  )
}

const __renderContentType = (title, journal, year) => {
  return (
    <div className="py__3">
      <strong className="color__nut7">Journal - {year}</strong>
      <ActionItem
        className="px__2"
        text={title}
        href={`/search?q=${journal.title}`}
        type="link__small"
      />
    </div>
  )
}

const __renderAbstract = (abstract) => {
  return (
    <div className="py-2 text__justify">
      <div dangerouslySetInnerHTML={{ __html: abstract }} />
    </div>
  )
}

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
        <span className="mute">keywords </span>
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

const __renderHead = () => {
  return (
    <div className={classnames('flex items-center', styles.headerAction)}>
      <ActionItem
        text={'← Back to results'}
        onClick={() => Router.back()}
        type="link__small"
        className="pl__0"
      />

      <span className="flex__left" />
      <ButtonFab icon={<IconSocialFacebook />} small />
      <ButtonFab icon={<IconSocialLinkedIn />} small />
      <ButtonFab icon={<IconSocialTwitter />} small />
    </div>
  )
}

const __renderContent = ({
  abstract,
  authors,
  // doi,
  downloadLink,
  // eISSN,
  // hIndex,
  // header,
  // isActiveSubscription,
  // isOpenAccess,
  // isPreview,
  // isbn,
  // issn,
  // issue,
  journalTitle,
  keywords,
  // language,
  // licenseType,
  // pISSN,
  // permanentLinkId,
  // publicationDate,
  publicationName,
  // publicationType,
  publicationYear,
  // resultId,
  // resultScore,
  // sjr,
  // snip,
  // snipYear,
  subjects,
  title,
  volume,
  zendyLink
}) => {
  // const href = get(link, '[0].url')

  return (
    <>
      <article className={'mw__3'}>
        <PublicationIssueJsonLd
          authorName={authors && authors.flatMap((auObj) => auObj.name)}
          name={title}
          datePublished={publicationYear}
          description={abstract}
          issueNumber={volume}
          publisher={publicationName}
        />
        {__renderHead()}
        {__renderTitle(title)}
        {__renderContentType(title, journalTitle, publicationYear)}
        {__renderAbstract(abstract)}
        {__renderAuthors(authors)}
        {__renderKeywords(keywords)}
        {__renderSubjects(subjects)}
        <div className={styles.actions}>
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
      <div className={styles.nextPrevWrapper}>
        <div className={styles.prevPublication}>
          <NextArticle
            url="/"
            prev
            title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
          />
        </div>

        <div className={styles.nextPublication}>
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
        // className="pl__0"
      />
    </div>
  )
}

const DesktopTitleDetail: React.FC = () => {
  const { data } = useTitleDetail()

  if (!data) {
    return __renderLoading()
  }

  if (data.status === 500) {
    return __renderSomethingWentWrong()
  }

  return <div>{__renderContent(data.data)}</div>
}

export default DesktopTitleDetail
