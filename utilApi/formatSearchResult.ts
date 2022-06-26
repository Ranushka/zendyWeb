export default function formatSearchResult(docs, highlighting) {
  if (!docs.length) return []

  return docs.map((doc) => {
    const {
      zendy_id,
      DOI,
      title,
      genlanguage,
      abstract,
      authors,
      keywords,
      subSubjectsFull,
      journal_title,
      publishers,
      publication_type,
      publication_year,
      publicationDate,
      pISSN,
      eISSN,
      volume,
      issue,
      url_full_text,
      url_pdf,
      regions
    } = doc

    const hlParts = highlighting?.[zendy_id]
    const hlTitle = hlParts?.title?.[0]
    const hlAbstract = hlParts?.abstract?.[0]

    // console.log('-doc-->', doc)
    zendy_id
    return {
      resultId: zendy_id,
      title: hlTitle ? hlTitle : title?.[0],
      abstract: hlAbstract ? hlAbstract : abstract?.[0],
      publicationName: publishers?.[0],
      publicationYear: publication_year,
      publicationType: publication_type,
      publicationDate: publicationDate,
      language: genlanguage,
      authors: authors,
      keywords: keywords,
      subjects: subSubjectsFull,
      isResultFromSolr: true,
      isPremium: false,
      licenseType: '',
      snip: '',
      snipYear: '',
      hIndex: '110',
      sjr: '0.947',
      doi: DOI,
      pISSN: pISSN,
      eISSN: eISSN,
      issn: eISSN || pISSN,
      isbn: '',
      issue: issue,
      volume: volume,
      journalTitle: journal_title,
      zendyLink: url_full_text,
      downloadLink: url_pdf,
      permanentLinkId: '10.3389/fpsyg.2021.676521',
      firstPage: '676521',
      lastPage: '676521',
      resultScore: 26.180971,
      regions: regions
    }
  })
}
