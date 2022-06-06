import React from 'react'
import { Space, ActionItem } from 'components/atoms'

type Props = {}

const SearchLandingBlock: React.FC<Props> = () => {
  return (
    <div className="text-center px-4 min-h">
      <Space size={5} />
      <h2>Start Searching and create new knowledge.</h2>
      <Space size={4} />
      <h4 className="py__3 mute">Resent searches</h4>
      <div className="py-2">
        <ActionItem
          className="px-4 py-2 block__inline"
          text={'covid 19'}
          href={'/search?q=covid 19'}
        />
        <ActionItem
          className="px-4 py-2 block__inline"
          text={'Molecular Cell'}
          href={'/search?q=Molecular Cell'}
        />
        <ActionItem
          className="px-4 py-2 block__inline"
          text={'Midwifery'}
          href={'/search?q=Midwifery'}
        />
        <ActionItem
          className="px-4 py-2 block__inline"
          text={'cars'}
          href={'/search?q=cars'}
        />
        <ActionItem
          className="px-4 py-2 block__inline"
          text={'nutrition courses'}
          href={'/search?q=nutrition courses'}
        />
      </div>

      <Space size={6} />
    </div>
  )
}

export default SearchLandingBlock
