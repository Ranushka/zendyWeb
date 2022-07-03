import { commonMessages } from 'lib/getMessages'
// import { getPosts } from 'fetchHooks/wordpress'
import { BaseTemplate } from 'components/templates'
import useAllPublishers from 'fetchHooks/useAllPublishers'
// import { countFormatted } from 'lib/helpers'
// import { ActionItem } from 'components/atoms'
// import MagazinesPageTabs from 'components/organisms/MagazinesPageTabs'
import AlphabetSearchList from 'components/organisms/AlphabetSearchList'

import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>Publishers list</title>
      </Head>
      <BaseTemplate>
        <div className="max-w-5xl m-auto px-8 py-16">
          <h1 className="pb-8 text-4xl font-serif">Publishers list</h1>
          {/* <MagazinesPageTabs /> */}
          <PublishersList />
        </div>
      </BaseTemplate>
    </>
  )
}

function PublishersList() {
  const { data } = useAllPublishers()

  if (!data || !data.length) {
    return <></>
  }

  return <AlphabetSearchList data={data} />
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    },
    revalidate: 10
  }
}
