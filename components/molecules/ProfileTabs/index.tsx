import React from 'react'
import { Tab, Space } from 'components/atoms'

const ProfileTabs: React.FC = () => {
  return (
    <>
      <Space size={4} />
      <h2 className="color__nut6">My Library</h2>
      <Space size={3} />
      <div className="flex">
        <Tab href={'/library/collections'}>Collections</Tab>
        <Tab href={'/library/searches'}>Searches</Tab>
        <Tab href={'/library/downloads'}>Downloads</Tab>
      </div>
      <Space size={4} />
    </>
  )
}

export default ProfileTabs
