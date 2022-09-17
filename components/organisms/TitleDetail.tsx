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
import SearchResultCustomItem from 'components/organisms/SearchResultCustomItem'

const DetailPdf = dynamic(() => import('components/organisms/DetailPdf'), {
  ssr: false
})

const __renderContent = (data) => {
  const {
    doi,
    language,
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
      <div className="mx-auto flex max-w-7xl">
        <div className="w-9/12">
          <article className="m-auto max-w-4xl px-8 pt-12">
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
          </article>
          {downloadLink && <DetailPdf pdfUrl={downloadLink} />}
        </div>
        <aside className="mt-32 w-3/12 pr-8">
          <SearchResultKeywords keywords={keywords} all />
          <SearchResultSubjects subjects={subjects} all />
          <SearchResultAuthors authors={authors} all />

          <SearchResultCustomItem data={doi} name="DOI" />
          <SearchResultCustomItem
            data={issn?.replace(/^(.{4})/, '$1-')}
            name="ISSN"
          />
          <SearchResultCustomItem data={sjr} name="sjr" />
          <SearchResultCustomItem data={language} name="Language" />
        </aside>
      </div>

      <TitleDetailNextPrevResult />
    </>
  )
}

const __renderLoading = () => {
  return (
    <div className="m-auto max-w-4xl px-8 pt-16 pb-16">
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
    <div className="relative m-auto -ml-4 pb-4">
      <ActionBtn
        dataName="GetGoBackBtn"
        text={'← Back to results'}
        onClick={() => {
          router.back()
        }}
        className="first_letter_caps m-1 inline-block py-1 pr-4"
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
