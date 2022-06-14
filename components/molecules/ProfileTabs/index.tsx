import React from 'react'
import { Tab, Space } from 'components/atoms'

const ProfileTabs: React.FC = () => {
  return (
    <>
      <h2 className="font-serif text-xl text-gray-500">My Library</h2>
      <div className="flex mb-4 mt-2 text-gray-400">
        <Tab href={'/library/collections'}>Collections</Tab>
        <Tab href={'/library/searches'}>Searches</Tab>
        <Tab href={'/library/downloads'}>Downloads</Tab>
      </div>
      <Space size={4} />
    </>
  )
}

export default ProfileTabs
