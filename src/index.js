import React, { createContext, useContext } from "react"

const ComponentContext = createContext()

export const useComponents = () => useContext(ComponentContext)

export const ComponentProvider = ({ components: value, ...props }) =>
  React.createElement(ComponentContext.Provider, { value, ...props })

export default ComponentProvider
