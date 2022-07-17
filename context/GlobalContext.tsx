import { useState, createContext, useContext, useMemo } from 'react'

const globalContext = createContext(null)

export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    openLangPopUp: false,
    openSettingsPopUp: false,
    premiumPopupVisibility: false,
    selectionMode: false,
    mobileFilterVisibility: false,
    initialFilters: null,
    prevPath: null,
    setGlobalState: (data: object) => {
      setState({ ...state, ...data })
    }
  })

  const globalStateValue = useMemo(() => [state, setState], [state])

  return (
    <globalContext.Provider value={globalStateValue}>
      {children}
    </globalContext.Provider>
  )
}

export default function useGlobal() {
  return useContext(globalContext)
}

// export const setNewState = ({ data, state }) => {
//   setState({ ...state, ...data })
// }
