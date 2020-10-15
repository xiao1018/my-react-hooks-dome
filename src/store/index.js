import React, { createContext, useReducer } from 'react'

export const AppContent = createContext()

const initialState = {
  total: 0
}

const appReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const AppStore = (props) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContent.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContent.Provider>
  )
}
