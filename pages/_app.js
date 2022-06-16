import 'styles/nprogress.css'
import 'styles/stripe.css'
import 'styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

import React from 'react'
// import Head from 'next/head'
import { applyTheme } from 'lib/theme'
import { applyFontSize } from 'lib/fontSize'
import { NextIntlProvider } from 'next-intl'
import { LoggedInUserProvider } from 'context/LoggedInUserContext'
import { GlobalProvider } from 'context/GlobalContext'
import { pageView } from 'analytics'
import NProgress from 'nprogress'
import Router from 'next/router'

if (typeof window !== 'undefined') {
  applyTheme(null)
  applyFontSize(null)
}

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

const AppRoot = ({ Component, pageProps, session }) => {
  React.useEffect(() => {
    if (window) {
      window.onbeforeunload = () => {
        NProgress.start()
      }
    }
  }, [])

  return (
    <LoggedInUserProvider session={session}>
      <GlobalProvider>
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
      </GlobalProvider>
    </LoggedInUserProvider>
  )
}

export default AppRoot
