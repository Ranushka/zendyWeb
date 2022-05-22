import { useState, createContext, useContext, useMemo } from 'react'

const globalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    selectionMode: false,
    toggleAdvanceSearch: false
  })

  const darkValue = useMemo(() => [state, setState], [state])

  return (
    <globalContext.Provider value={darkValue}>
      {children}
    </globalContext.Provider>
  )
}

export default function useGlobal() {
  return useContext(globalContext)
}
