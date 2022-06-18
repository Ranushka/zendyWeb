import React from 'react'
import { Tab, ButtonFab } from 'components/atoms'
import { IconSearch } from 'components/icons'

const ProfileTabs: React.FC = () => {
  const [searchShow, searchShowSet] = React.useState(false)

  return (
    <div className="flex px-8 overflowScroll items-center my-4">
      <ButtonFab
        onClick={() => searchShowSet(!searchShow)}
        icon={<IconSearch />}
        classNames={'stage__1 px-4'}
      />
      {searchShow && (
        <input
          className="stage__1 rounded-md px-4 py-2"
          type="search"
          name="magSearch"
          id="magSearch"
          placeholder="Search magazines"
        />
      )}
      <div className="px-4 flex whitespace-nowrap overflow-y-scroll hideScrollBar">
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
