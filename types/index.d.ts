export interface SearchResultItemProps {
  id: string
  href: string
  title: string
  abstract: string
  journal: string
  year: string
  author: []
  keywords: string
  subjects: [string]
  link: []
  isReviewed?: boolean
  isReferenced?: boolean
}
export interface SubTitleProps {
  title: React.ReactNode
  linkText?: string
  linkHref?: string
}

export interface CardMagazineProps {
  href: string
  img: string
  title: React.ReactNode
  content: React.ReactNode
  className?: string
}
