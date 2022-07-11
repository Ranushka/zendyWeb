import 'styles/nprogress.css'
import 'styles/stripe.css'
import 'styles/globals.scss'
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
// import 'react-pdf/dist/esm/Page/TextLayer'
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react'
import Head from 'next/head'
import { applyTheme } from 'lib/theme'
import { applyFontSize } from 'lib/fontSize'
import { NextIntlProvider } from 'next-intl'
import { LoggedInUserProvider } from 'context/LoggedInUserContext'
import { GlobalProvider } from 'context/GlobalContext'
import { analyticsViewScreen } from 'analytics/events'
import NProgress from 'nprogress'
import Router from 'next/router'
import { GtmScript } from 'analytics/GtmScript'

if (typeof window !== 'undefined') {
  applyTheme(null)
  applyFontSize(null)
}

NProgress.configure({ trickleSpeed: 300, showSpinner: false })
Router.events.on('routeChangeStart', () => {
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
  window.scrollTo(0, 0)

  analyticsViewScreen()
})
Router.events.on('routeChangeError', () => NProgress.done())

const AppRoot = ({ Component, pageProps, session }) => {
  React.useEffect(() => {
    if (window) {
      window.onbeforeunload = () => {
        NProgress.start()
      }
    }
    analyticsViewScreen()
  }, [])

  return (
    <LoggedInUserProvider session={session}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        ></meta>
      </Head>
      <GtmScript />
      <GlobalProvider>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </GlobalProvider>
    </LoggedInUserProvider>
  )
}

export default AppRoot
