import React from 'react'
import { Tab } from 'components/atoms'

const ProfileTabs: React.FC = () => {
  return (
    <>
      <h2 className="text_nut5 font-serif text-xl">My Library</h2>
      <div className="mb-6 mt-2 flex items-center justify-center">
        <Tab href={'/library/collections'}>Collections</Tab>
        <Tab href={'/library/searches'}>Searches</Tab>
        <Tab href={'/library/downloads'}>Downloads</Tab>
      </div>
    </>
  )
}

export default ProfileTabs
