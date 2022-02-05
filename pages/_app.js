import 'styles/global.scss'
import 'styles/reset.scss'
import 'styles/typography.scss'
import 'styles/inputs.scss'
import 'styles/nprogress.scss'
import 'styles/stripe.scss'
import 'styles/actionItems.scss'
import 'styles/utils.scss'
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react'
import Head from 'next/head'
import { DeviceTypeContextProvider } from 'context/DeviceTypeContext'
import { LoggedInUserProvider } from 'context/LoggedInUserContext'
import { checkIsMobile } from 'lib/helpers'
import { pageView } from 'analytics'
import NProgress from 'nprogress'
import Router from 'next/router'
import App from 'next/app'

NProgress.configure({ trickleSpeed: 300, showSpinner: false })
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done()
  window.scrollTo(0, 0)
  pageView(url)
})
Router.events.on('routeChangeError', () => NProgress.done())

const NewApp = ({ Component, pageProps, isMobile, session }) => {
  React.useEffect(() => {
    if (window) {
      window.onbeforeunload = (e) => {
        NProgress.start()
      }
    }
  }, [])

  return (
    <DeviceTypeContextProvider isMobile={isMobile}>
      <LoggedInUserProvider session={session}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Zendy, Premium research publications library</title>
        </Head>
        <Component {...pageProps} />
      </LoggedInUserProvider>
    </DeviceTypeContextProvider>
  )
}

NewApp.getInitialProps = async (appContext) => {
  const appInitProps = await App.getInitialProps(appContext)
  const request = appContext.ctx.req

  let isMobile

  if (request) {
    isMobile = checkIsMobile(request)
  } else {
    isMobile = checkIsMobile()
  }

  return { ...appInitProps, isMobile }
}

export default NewApp

// export function reportWebVitals(metric) {
//   console.log(metric);
// }
