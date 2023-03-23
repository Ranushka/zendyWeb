import React from 'react'
import { GetStaticPaths } from 'next'
import { commonMessages } from 'helpers/getMessages'
import BaseTemplate from 'components/templates/BaseTemplate'
import { RelatedPublications, TitleDetail } from 'components/organisms'

const Title: React.FC = () => {
  return (
    <BaseTemplate>
      <TitleDetail />

      <RelatedPublications />
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
