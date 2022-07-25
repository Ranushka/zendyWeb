import React from 'react'
import { useRouter } from 'next/router'
import { ActionBtn } from 'components/atoms'
import IconSearchHistory from 'components/icons/IconSearchHistory'
import {
  setPersonalizedKeywords,
  getPersonalizedKeywords
} from 'helpers/localStorage'
import routs from 'helpers/routs'

type Props = {}
let data = [
  'water',
  'mercury energy generation',
  'search personalization',
  'car'
]

const RecentSearchKeywords: React.FC<Props> = () => {
  const router = useRouter()

  const onClick = (title) => {
    setPersonalizedKeywords({ subjects: [title] })
    router.push({
      pathname: routs.search,
      query: { q: title }
    })
  }

  React.useEffect(() => {
    const kwd = getPersonalizedKeywords()
    if (kwd?.subjects) {
      const newKwd = kwd.subjects
      data = [...newKwd, ...data].slice(0, 5)
    }
  }, [])

  return (
    <section className="bg_white pl-8 md:px-4 pt-4 pb-8 md:pb-16 mx-auto py-2 text-center opacity-80 hover:opacity-100">
      <div className="max-w-4xl mx-auto text-center whitespace-nowrap overflow-y-scroll hideScrollBar">
        {data?.map((title, id) => (
          <span key={id} className="inline-flex">
            <IconSearchHistory className="w-4 text_nut4" />
            <ActionBtn
              dataName="RecentSearchKeyword"
              text={`${title}`}
              href={`/search?q=${title}`}
              className="m-1 inline-block pr-4 py-1 first_letter_caps"
              onClick={() => onClick(title)}
              type="btn__small"
            />
          </span>
        ))}
      </div>
    </section>
  )
}

export default RecentSearchKeywords
