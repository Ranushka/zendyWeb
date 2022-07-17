import React from 'react'
import dynamic from 'next/dynamic'
import router from 'next/router'
import useTitleDetail from 'fetchHooks/useTitleDetail'
import Skeleton from 'react-loading-skeleton'

import PublicationIssueJsonLd from 'analytics/PublicationIssueJsonLd'
import { ActionBtn } from 'components/atoms'
import routs from 'helpers/routs'
import { getPrevPage } from 'helpers/localStorage'
import TitleDetailNextPrevResult from 'components/organisms/TitleDetailNextPrevResult'
import WentSomethingWrong from 'components/organisms/WentSomethingWrong'
import SearchResultTitle from 'components/organisms/SearchResultTitle'
import SearchResultItemSource from 'components/organisms/SearchResultItemSource'
import SearchResultKeywords from 'components/organisms/SearchResultKeywords'
import SearchResultSubjects from 'components/organisms/SearchResultSubjects'
import SearchResultAuthors from 'components/organisms/SearchResultAuthors'
import SearchResultItemAbstract from 'components/organisms/SearchResultItemAbstract'
import SearchResultETC from 'components/organisms/SearchResultETC'

const DetailPdf = dynamic(() => import('components/organisms/DetailPdf'), {
  ssr: false
})

const __renderContent = (data) => {
  const {
    doi,
    issn,
    sjr,
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
      <article className="max-w-4xl m-auto pt-12 px-8">
        <GetGoBackBtn />
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

        <SearchResultETC data={doi} name="DOI" />
        <SearchResultETC data={issn.replace(/^(.{4})/, '$1-')} name="ISSN" />
        <SearchResultETC data={sjr} name="sjr" />
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

const GetGoBackBtn = () => {
  if (!getPrevPage().includes(routs.search)) return <></>

  return (
    <div className="m-auto pb-4 -ml-4 relative">
      <ActionBtn
        dataName="RecentSearchKeyword"
        text={'← Back to results'}
        onClick={() => {
          router.back()
        }}
        className="m-1 inline-block pr-4 py-1 first_letter_caps"
        type="btn__small"
      />
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
