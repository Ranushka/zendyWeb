import React from 'react'
import { SeeAll } from 'components/organisms'

import { Accordion } from 'components/atoms'

export default function QNA() {
  return (
    <div className="max-w-xl px-4 m-auto">
      <h2 className="text-center text-3xl font-serif mb-8">
        Frequently Asked Questions
      </h2>
      {questionsList()}
      <SeeAll href="/qna" text="See all Questions" className="mt-4 mb-8" />
    </div>
  )
}

const questionsList = () => {
  return data.map(({ title, content }, id) => {
    return (
      <React.Fragment key={'qa' + id}>
        <Accordion
          id={'qa' + id}
          open={id === 0}
          title={
            <h4 className="text-sm font-serif font-light w-full">{title}</h4>
          }
          content={accordionContent(content)}
        />
      </React.Fragment>
    )
  })
}

const accordionContent = (content: string) => {
  return <div>{content}</div>
}

const data = [
  {
    title: 'How does the free trial work?',
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form,  humour, or randomized words which don't look  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  Lorem Ipsum, you ne Lorem Ipsum."
  },
  {
    title: 'When do I get billed?',
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form,  humour, or randomized words which don't look  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  Lorem Ipsum, you ne Lorem Ipsum."
  },
  {
    title: 'Can I cancel my subscription anytime?',
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form,  humour, or randomized words which don't look  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  Lorem Ipsum, you ne Lorem Ipsum."
  },
  {
    title: 'What happens when my trial ends?',
    content:
      "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form,  humour, or randomized words which don't look  believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.  Lorem Ipsum, you ne Lorem Ipsum."
  }
]
