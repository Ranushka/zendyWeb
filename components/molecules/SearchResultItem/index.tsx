import React, { useContext } from 'react'
import dynamic from 'next/dynamic'
import DeviceTypeContext from 'context/DeviceTypeContext'
import { SearchResultItemProps } from 'types'

const Mobile = dynamic(() => import('./Mobile'))
const Desktop = dynamic(() => import('./Desktop'))

const SearchResultItem: React.FC<SearchResultItemProps> = (props) => {
  const { isMobile } = useContext(DeviceTypeContext)

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />
}

export default SearchResultItem
