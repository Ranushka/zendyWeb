import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GtmScript } from 'analytics'
import { getDir } from 'lib/helpers'
// import { applyTheme } from 'lib/theme'
// import { applyFontSize } from 'lib/fontSize'

import React from 'react'

const data = {
  applicationName: 'zendy.io',
  url: 'https://zendy.io',
  title: 'Zendy, Premium research publications library',
  description:
    'Research is creating new knowledge, join with us and create new knowledge',
  image: 'https://zendy.io/icons/favicon-96x96.png'
}

class MyDocument extends Document {
  public render() {
    return (
      <Html dir={getDir(this.props.locale)}>
        <Head>
          <meta charSet="utf-8" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#fff" />

          <meta name="application-name" content={data.applicationName} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>

          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#2c5282" />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={data.url} />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={data.image} />
          <meta name="twitter:creator" content="@Zendy" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Zendy" />
          <meta property="og:url" content={data.url} />
          <meta name="og:title" content={data.title} />
          <meta name="og:description" content={data.description} />
          <meta property="og:image" content={data.image} />

          <GtmScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (appContext) => {
  const initialProps = await Document.getInitialProps(appContext)

  return { ...initialProps, locale: appContext?.locale || 'en' }
}

export default MyDocument
