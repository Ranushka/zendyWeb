import { BaseTemplate } from 'components/templates'
import { ActionItem, Space } from 'components/atoms'
import { commonMessages } from 'lib/getMessages'

const PageNotFound: React.FC = () => {
  return (
    <BaseTemplate>
      <section className="mw__6 text__center">
        <Space size={6} />
        <p className="h1">404</p>
        <p className="h2">The page you were looking for has not been found</p>
        <Space size={4} />
        <ActionItem type="btn__primary" text={'Go to home page ➜'} href="/" />
        <Space size={6} />
      </section>
    </BaseTemplate>
  )
}

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg,
      },
    },
  }
}

export default PageNotFound
