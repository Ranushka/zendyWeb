import React from 'react'
import { Tab, ButtonFab } from 'components/atoms'
import { IconSearch, IconClear } from 'components/icons'

const ProfileTabs: React.FC = () => {
  const [searchShow, searchShowSet] = React.useState(false)

  return (
    <div className="flex px__2 overflowScroll">
      <ButtonFab
        onClick={() => searchShowSet(!searchShow)}
        icon={<IconSearch />}
        classNames={'stage__1 px__2'}
      />
      {searchShow && (
        <input
          className="stage__1 rounded__1 px__3 py__2"
          type="search"
          name="magSearch"
          id="magSearch"
          placeholder="Search magazines"
        />
      )}
      <div className="flex px__3">
        <Tab href={'/magazines'}>All</Tab>
        <Tab href={'/magazines/#Nature'}>Nature</Tab>
        <Tab href={'/magazines/#Aviation'}>Aviation</Tab>
        <Tab href={'/magazines/#Food'}>Food</Tab>
        <Tab href={'/magazines/#Technology'}>Technology</Tab>
        <Tab href={'/magazines/#Biology'}>Biology</Tab>
        <Tab href={'/magazines/#Science'}>Science</Tab>
        <Tab href={'/magazines/#Sports'}>Sports</Tab>
        <Tab href={'/magazines/#Architecture'}>Architecture</Tab>
        <Tab href={'/magazines/#Education'}>Education</Tab>
      </div>
    </div>
  )
}

export default ProfileTabs
