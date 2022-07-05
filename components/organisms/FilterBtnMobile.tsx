import React from 'react'
import classnames from 'classnames'

import { ButtonFab } from 'components/atoms'
import { IconFilter, IconClose } from 'components/icons'
import useGlobal from 'context/GlobalContext'

const FilterBtnMobile: React.FC<any> = () => {
  const [{ mobileFilterVisibility, setGlobalState }] = useGlobal()

  const fabClass = classnames(
    'p-4 pointer rounded-full z-30 bg-orange-50',
    'fixed md:hidden right-1 -mt-2 shadow-md',
    mobileFilterVisibility && 'text_nut5'
  )

  return (
    <ButtonFab
      title="Toggle selection mode"
      icon={mobileFilterVisibility ? <IconClose /> : <IconFilter />}
      classNames={fabClass}
      onClick={() => {
        setGlobalState({
          mobileFilterVisibility: !mobileFilterVisibility
        })
      }}
    />
  )
}

export default FilterBtnMobile
