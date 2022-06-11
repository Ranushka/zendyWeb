import React, { GetStaticPaths } from 'next'

import { commonMessages } from 'lib/getMessages'
import { BaseTemplate } from 'components/templates'
import { TitleDetail } from 'components/organisms'

const Title: React.FC = () => {
  // const Title: NextPage = () => {
  return (
    <BaseTemplate>
      <TitleDetail />
      {/* <RelatedPublications /> */}
    </BaseTemplate>
  )
}

export const getStaticPaths: GetStaticPaths<{
  slug: string
}> = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Title
