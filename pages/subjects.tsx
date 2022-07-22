import Head from 'next/head'

import { commonMessages } from 'helpers/getMessages'
import BaseTemplate from 'components/templates/BaseTemplate'
import apiSolrGetFacets from 'helpers/apiSolrGetFacets'
import AlphabetSearchList from 'components/organisms/AlphabetSearchList'

export default function Index({ allSubjects }) {
  return (
    <>
      <Head>
        <title>Subjects list</title>
      </Head>
      <BaseTemplate>
        <div className="max-w-5xl m-auto px-8 py-16">
          <h1 className="pb-8 text-4xl font-serif">Subjects list</h1>
          <AlphabetSearchList data={allSubjects} urlKey="subject" />
        </div>
      </BaseTemplate>
    </>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)
  const allSubjects = await apiSolrGetFacets('subSubjectsFull')

  return {
    props: {
      messages: {
        ...commonMsg
      },
      allSubjects
    },
    revalidate: 10
  }
}
