import React from 'react'
import useTitleDetail from 'fetchHooks/useTitleDetail'
import Skeleton from 'react-loading-skeleton'

import PublicationIssueJsonLd from 'analytics/PublicationIssueJsonLd'
import TitleDetailNextPrevResult from 'components/organisms/TitleDetailNextPrevResult'
import WentSomethingWrong from 'components/organisms/WentSomethingWrong'
// import DetailPdf from 'components/organisms/DetailPdf'
import SearchResultTitle from 'components/organisms/SearchResultTitle'
import SearchResultItemSource from 'components/organisms/SearchResultItemSource'
import SearchResultKeywords from 'components/organisms/SearchResultKeywords'
import SearchResultSubjects from 'components/organisms/SearchResultSubjects'
import SearchResultAuthors from 'components/organisms/SearchResultAuthors'
import SearchResultItemAbstract from 'components/organisms/SearchResultItemAbstract'

import dynamic from 'next/dynamic'

const DetailPdf = dynamic(() => import('components/organisms/DetailPdf'), {
  ssr: false
})

const __renderContent = (data) => {
  const {
    abstract,
    authors,
    downloadLink,
    journalTitle,
    keywords,
    publicationName,
    publicationYear,
    subjects,
    title,
    volume
  } = data

  return (
    <>
      <article className="max-w-4xl m-auto pt-16 px-8">
        <PublicationIssueJsonLd
          authorName={authors && authors.flatMap((auObj) => auObj.name)}
          name={title}
          datePublished={publicationYear}
          description={abstract}
          issueNumber={volume}
          publisher={publicationName}
        />
        <SearchResultTitle {...data} />
        <SearchResultItemSource
          journalTitle={journalTitle}
          publicationName={publicationName}
        />
        <SearchResultItemAbstract abstract={abstract} all />
        <SearchResultKeywords keywords={keywords} all />
        <SearchResultSubjects subjects={subjects} all />
        <SearchResultAuthors authors={authors} all />
      </article>
      {downloadLink && <DetailPdf pdfUrl={downloadLink} />}
      <TitleDetailNextPrevResult />
    </>
  )
}

const __renderLoading = () => {
  return (
    <div className="max-w-4xl m-auto pt-16 px-8 pb-16">
      <Skeleton />
      <Skeleton height="80px" />
      <Skeleton />
      <Skeleton count={8} />
      <Skeleton />
      <Skeleton height="40px" />
      <Skeleton height="400px" className="mt-8" />
    </div>
  )
}

const TitleDetail: React.FC = () => {
  const { data } = useTitleDetail()

  if (!data?.length) {
    return __renderLoading()
  }

  if (data.status === 500) {
    return <WentSomethingWrong msg="something went wrong. with this article" />
  }

  return <div>{__renderContent(data[0])}</div>
}

export default TitleDetail
