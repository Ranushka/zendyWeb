import React from 'react'
import classnames from 'classnames'

import useGlobal from 'context/GlobalContext'
import FilterSortBy from 'components/organisms/FilterSortBy'
import FilterDateRange from 'components/organisms/FilterDateRange'
import FilterBtnMobile from 'components/organisms/FilterBtnMobile'
import FilterFacets from 'components/organisms/FilterFacets'
import FilterNavigationTitle from 'components/organisms/FilterNavigationTitle'

type Props = {}

const FilterNavigation: React.FC<Props> = () => {
  const [state] = useGlobal()
  const { mobileFilterVisibility } = state
  const navClass = classnames(
    'left-0 bottom-0 z-20 overflow-y-scroll md:overflow-auto',
    'h-4/5 md:h-auto w-full md:w-3/12 pr-8 md:block md:relative',
    'bg_nut0 md:bg-transparent px-8 md:p-4',
    mobileFilterVisibility ? 'text_nut5 block fixed' : 'hidden'
  )

  return (
    <>
      <section className={navClass}>
        <div className="max-w-xs">
          <FilterNavigationTitle />
          <FilterSortBy />
          <FilterDateRange />
          <FilterFacets />
        </div>
      </section>
      {mobileFilterVisibility && (
        <div className="fixed md:hidden h-full w-full top-0 left-0 z-10 text_black bg-opacity-25 backdrop-blur-sm" />
      )}
      <FilterBtnMobile />
    </>
  )
}

export default FilterNavigation
