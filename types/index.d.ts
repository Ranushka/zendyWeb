import React from 'react'
export interface SearchResultItemProps {
  id: string
  href: string
  title: string
  abstract: string
  journalTitle: string
  publicationYear: string
  publicationName: string
  publicationType: string
  downloadLink: string
  permanentLinkId: string
  authors: [string]
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

export interface AuthorDetailsProps {
  authorName: string
}
