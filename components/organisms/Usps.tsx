import React from 'react'
import { UspItem } from 'components/organisms'

const data = [
  {
    src: '/infoIcon/uspDownload.svg',
    title: 'Unlimited downloads',
    content: 'Freedom to save content offline and read content as you like'
  },
  {
    src: '/infoIcon/uspSubjects.svg',
    title: 'All major disciplines',
    content: 'Find All major disciplines that you need to cover your research'
  },
  {
    src: '/infoIcon/fullText.svg',
    title: 'Full text publications',
    content: 'WCAG 2.0 compliant, full text scientific publications'
  },
  {
    src: '/infoIcon/uspMultipleFilters.svg',
    title: 'Multiple filter options',
    content: 'Multiple navigation options will help to find content efficiently'
  },
  {
    src: '/infoIcon/uspCitations.svg',
    title: 'Citation export',
    content: 'Bulk citation export and multiple types of citation options'
  },
  {
    src: '/infoIcon/uspPersonalize.svg',
    title: 'Personalized content',
    content: 'Get up to date and personalized content that relevant to you'
  },
  {
    src: '/infoIcon/uspTextToSpeech.svg',
    title: 'Text to speech',
    content: 'Text to speech will help you to go through content'
  }
]
type Props = {}

const Usps: React.FC<Props> = () => {
  return (
    <section className="max-w-6xl text-center mx-auto pt-4">
      <h2 className="py-8 px-4 text-center text-3xl text_nut5 font-serif">
        Why Zendy plus ?
      </h2>
      <div className="flex flex-wrap justify-center">
        {data.map((item, id) => (
          <UspItem
            key={`uspItem${id}`}
            src={item.src}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </section>
  )
}

export default Usps
