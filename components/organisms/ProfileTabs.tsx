import React from 'react'
import { Tab } from 'components/atoms'

const ProfileTabs: React.FC = () => {
  return (
    <>
      <h2 className="font-serif text-xl text_nut5">My Library</h2>
      <div className="flex mb-4 mt-2 text-gray-400">
        <Tab href={'/library/collections'}>Collections</Tab>
        <Tab href={'/library/searches'}>Searches</Tab>
        <Tab href={'/library/downloads'}>Downloads</Tab>
      </div>
    </>
  )
}

export default ProfileTabs
