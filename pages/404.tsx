import React from 'react'
import BaseTemplate from 'components/templates/BaseTemplate'
import ActionItem from 'components/atoms/ActionItem'
import { commonMessages } from 'helpers/getMessages'

const PageNotFound: React.FC = () => {
  return (
    <BaseTemplate>
      <section className="max-w-4xl text-center mx-auto my-8">
        <p className="text-6xl px-2 font-serif font-bold">404</p>
        <p className="text-4xl my-8">
          The page you were looking for has not been found
        </p>
        <ActionItem
          dataName="GoBackHome"
          type="btn__primary"
          text={'Go to home page ➜'}
          href="/"
        />
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
