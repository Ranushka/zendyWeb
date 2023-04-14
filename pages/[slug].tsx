import React from 'react'
import { GetStaticPaths } from 'next'
import Link from 'next/link'
import Head from 'next/head'
// import parser from 'react-html-parser'

import { commonMessages } from 'helpers/getMessages'
import { getPage } from 'helpers/wordpress'
import BaseTemplate from 'components/templates/BaseTemplate'

export default function PagersCMS({ pageData }) {
  return (
    <BaseTemplate>
      <Head>
        <title>{pageData?.title?.rendered}</title>
        {/* {parser(pageData?.yoast_head)} */}
      </Head>
      <div className="max-w-3xl m-auto pt-16 px-4 md:px-8 overflow-x-hidden">
        <h1 className="pb-8 text-4xl font-serif">
          {pageData?.title?.rendered}
        </h1>
        <div
          className="card-text pb-8"
          dangerouslySetInnerHTML={{ __html: pageData?.content?.rendered }}
        ></div>
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </BaseTemplate>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [
      '/about',
      '/privacy-policy',
      '/zendy-terms-of-use',
      '/faqs',
      '/jobs'
    ],
    fallback: 'blocking'
  }
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params, locale }) {
  const pageData = await getPage(params.slug)
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      },
      pageData
    },
    revalidate: 10 // In seconds
  }
}
