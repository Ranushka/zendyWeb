import Head from 'next/head'

import { commonMessages } from 'helpers/getMessages'
import BaseTemplate from 'components/templates/BaseTemplate'
import apiSolrGetFacets from 'helpers/apiSolrGetFacets'
import AlphabetSearchList from 'components/organisms/AlphabetSearchList'

export default function Index({ allJournals }) {
  return (
    <>
      <Head>
        <title>Journals list</title>
      </Head>
      <BaseTemplate>
        <div className="max-w-5xl m-auto px-8 py-16">
          <h1 className="pb-8 text-4xl font-serif">Journals list</h1>
          <AlphabetSearchList data={allJournals} urlKey="journal" />
        </div>
      </BaseTemplate>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)
  const allJournals = await apiSolrGetFacets('journalTitleFull')

  return {
    props: {
      messages: {
        ...commonMsg
      },
      allJournals
    },
    revalidate: 10
  }
}
