import React from "react"
import styled from "@emotion/styled"
import ComponentProvider from "react-use-components"

import LoginModule from "./LoginModule"

const ThemeAComponents = {
  Button: styled("button")`
    background: #eee;
    padding: 8px 16px;
    appearance: none;
    outline: none;
    border: none;
  `,
  Input: styled("input")`
    padding: 4px;
    display: block;
    margin-bottom: 8px;
  `,
  Form: styled("form")`
    padding: 24px 8px;
  `,
  Label: styled("label")`
    margin-bottom: 8px;
  `
}
const ThemeBComponents = {
  Button: props => <button {...props} />,
  Form: props => <form {...props} />,
  Input: props => <input {...props} />,
  Label: props => <label {...props} />
}

const AppA = () => (
  <ComponentProvider components={ThemeAComponents}>
    App A
    <LoginModule onLogin={console.log} />
  </ComponentProvider>
)
const AppB = () => (
  <ComponentProvider components={ThemeBComponents}>
    App B
    <LoginModule onLogin={console.log} />
  </ComponentProvider>
)

function App() {
  return (
    <div>
      <AppA />
      <AppB />
    </div>
  )
}

export default App
