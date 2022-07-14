import React from 'react'
import MagazinesPage from 'components/organisms/MagazinesPage'
import BaseTemplate from 'components/templates/BaseTemplate'
import { commonMessages } from 'helpers/getMessages'

const Magazines: React.FC = () => {
  return (
    <BaseTemplate>
      <MagazinesPage />
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

export default Magazines
