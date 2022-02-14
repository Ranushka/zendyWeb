import { useState, createContext, useContext, useMemo } from 'react'

const globelContext = createContext(null)

export const GlobelProvider = ({ children }) => {
  const [state, setState] = useState({
    selectionMode: false,
    toggleAdvanceSearch: false,
  })

  const darkValue = useMemo(() => [state, setState], [state])

  return (
    <globelContext.Provider value={darkValue}>
      {children}
    </globelContext.Provider>
  )
}

export default function useGlobel() {
  return useContext(globelContext)
}
