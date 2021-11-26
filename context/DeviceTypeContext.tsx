import React, { useState, useContext } from 'react'

type ContextTypes = {
  value: boolean
}

type ProviderTypes = {
  children: React.ReactNode
  isMobile: boolean
}

type ContextProps = {
  isMobile: boolean
}

const DeviceTypeContext = React.createContext<ContextProps>(undefined)

export const DeviceTypeContextProvider = ({
  children,
  isMobile,
}: ProviderTypes) => {
  return (
    <DeviceTypeContext.Provider value={{ isMobile }}>
      {children}
    </DeviceTypeContext.Provider>
  )
}

export default DeviceTypeContext
