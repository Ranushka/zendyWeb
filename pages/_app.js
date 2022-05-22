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
import { applyTheme } from 'lib/theme'
import { applyFontSize } from 'lib/fontSize'
import Script from 'next/script'
import { NextIntlProvider } from 'next-intl'
import { DeviceTypeContextProvider } from 'context/DeviceTypeContext'
import { LoggedInUserProvider } from 'context/LoggedInUserContext'
import { GlobalProvider } from 'context/GlobalContext'
import { checkIsMobile } from 'lib/helpers'
import { pageView } from 'analytics'
import NProgress from 'nprogress'
import Router from 'next/router'
import App from 'next/app'

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

const AppRoot = ({ Component, pageProps, isMobile, session }) => {
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
        <GlobalProvider>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <NextIntlProvider messages={pageProps.messages}>
            <Component {...pageProps} />
          </NextIntlProvider>
        </GlobalProvider>
      </LoggedInUserProvider>
    </DeviceTypeContextProvider>
  )
}

AppRoot.getInitialProps = async (appContext) => {
  const appInitProps = await App.getInitialProps(appContext)

  const req = appContext.ctx.req
  let isMobile

  if (req) {
    isMobile = checkIsMobile(req)
  } else {
    isMobile = checkIsMobile()
  }

  console.log('isMobile --> ', isMobile)

  return {
    ...appInitProps,
    isMobile
  }
}

export default AppRoot
