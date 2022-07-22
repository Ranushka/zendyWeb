const routs = {
  index: '/',
  login: '/login',
  search: '/search',
  profile: '/profile',
  pricing: '/pricing',
  publisher: (label: string) => `/publisher/${label.replace(/ /g, '_')}`,
  subject: (label: string) => `/subject/${label.replace(/ /g, '_')}`,
  journal: (label: string) => `/journal/${label.replace(/ /g, '_')}`,

  fra: 'French',
  nld: 'Dutch',
  ita: 'Italian',
  deu: 'Deutsch',
  ind: 'Indonesian',

  publishersFull: 'Publishers',
  subjectsFull: 'Subjects',
  genlanguage: 'Languages',
  publicationTypeFull: 'Material type',
  journalTitleFull: 'Journals',

  publishersFullUrl: 'publisher',
  subjectsFullUrl: 'subject',
  genlanguageUrl: 'language',
  publicationTypeFullUrl: 'material',
  journalTitleFullUrl: 'journals'
}

export default routs
