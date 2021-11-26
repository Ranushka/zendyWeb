import React, { FC } from 'react'
import Head from 'next/head'
import markup from 'lib/markup'

export interface SiteLinksSearchJsonLdProps {}

const SiteLinksSearchJsonLd: FC<SiteLinksSearchJsonLdProps> = () => {
  const jslonld = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://zendy.ranushka.vercel.app/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zendy.ranushka.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jslonld)}
      />
    </Head>
  )
}

export default SiteLinksSearchJsonLd
