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
  publicationTypeFull: 'Material type',
  journalTitleFull: 'Journals',
  
  publishersFullUrl: 'publisher',
  subjectsFullUrl: 'subject',
  genlanguageUrl: 'language',
  publicationTypeFullUrl: 'material',
  journalTitleFullUrl: 'journals',
}

export default function labelMapping(label: string){
  return names[label] || label
}