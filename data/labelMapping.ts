const names = {
  eng: 'English',
  spa: 'Spanish',
  fra: 'French',
  nld: 'Dutch',
  ita: 'Italian',
  deu: 'Deutsch',
  ind: 'Indonesian',
  
  publishersFull: 'Publishers',
  subjectsFull: 'Subjects',
  genlanguage: 'Languages',
  publicationTypeFull: 'Publications',
  journalTitleFull: 'Journals',
}

export default (label: string) => {
  return names[label] || label
}