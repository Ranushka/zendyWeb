import React from 'react'
import { Space } from 'components/atoms'
import { SeeAll } from 'components/molecules'

import { Accordion } from 'components/molecules'

export default function QNA() {
  return (
    <div className="mw__3 px-4">
      <h2 className="text__center">Frequently Asked Questions</h2>
      {questionsList()}
      <Space />
      <SeeAll href="/qna" text="See all Questions" />
    </div>
  )
}

const questionsList = () => {
  return data.map(({ title, content }, id) => {
    return (
      <React.Fragment key={'qa' + id}>
        <Space />
        <Accordion
          id={'qa' + id}
          open={id === 0}
          title={<h4>{title}</h4>}
          content={accordionContent(content)}
        />
      </React.Fragment>
    )
  })
}

const accordionContent = (content: string) => {
  return (
    <div>
      <Space size={3} />
      <div>{content}</div>
    </div>
  )
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
