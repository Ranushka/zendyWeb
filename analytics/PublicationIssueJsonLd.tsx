import React, { FC } from "react";
import Head from "next/head";
import markup from "lib/markup";

export interface PublicationIssueJsonLdProps {
  authorName: string;
  datePublished: string;
  description: string;
  issueNumber: string;
  keywords?: ReadonlyArray<string>;
  name: string;
  publisher: string;
}

const PublicationIssueJsonLd: FC<PublicationIssueJsonLdProps> = ({
  authorName,
  datePublished,
  description,
  issueNumber = null,
  keywords = [],
  name,
  publisher,
}) => {
  const jslonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": null,
        "@type": "ScholarlyArticle",
        issueNumber: issueNumber,
        datePublished: datePublished,
        description: description,
        about: keywords,
        name: name,
        author: authorName,
        publisher: publisher,
      },
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jslonld)}
      />
    </Head>
  );
};

export default PublicationIssueJsonLd;
