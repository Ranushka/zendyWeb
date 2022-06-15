import React from 'react'
import { BaseTemplate } from 'components/templates'
import ActionItem from 'components/atoms/ActionItem'
import { commonMessages } from 'lib/getMessages'

const PageNotFound: React.FC = () => {
  return (
    <BaseTemplate>
      <section className="max-w-6xl text-center">
        <p className="h1">404</p>
        <p className="h2">The page you were looking for has not been found</p>
        <ActionItem type="btn__primary" text={'Go to home page ➜'} href="/" />
      </section>
    </BaseTemplate>
  )
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

export default PageNotFound
