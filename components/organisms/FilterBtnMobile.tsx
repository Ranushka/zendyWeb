import React from 'react'
import classnames from 'classnames'

import { ButtonFab } from 'components/atoms'
import IconFilter from 'components/icons/IconFilter'
import IconClose from 'components/icons/IconClose'
import useGlobal from 'context/GlobalContext'

const FilterBtnMobile: React.FC<any> = () => {
  const [{ mobileFilterVisibility, setGlobalState }] = useGlobal()

  const fabClass = classnames(
    'p-4 pointer rounded-full z-40 bg_white',
    'fixed md:hidden right-1 -mt-2 shadow-md',
    mobileFilterVisibility && 'text_nut5 shadow-none -mt-1 bg_nut0'
  )

  return (
    <ButtonFab
      dataName="FilterBtnMobile"
      title="Toggle selection mode"
      icon={
        mobileFilterVisibility ? (
          <IconClose className="scale-125" />
        ) : (
          <IconFilter />
        )
      }
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
