# react-use-components

### Usage

```jsx
import ComponentProvider from "react-use-components"
import { LoginModule, SignupModule } from "standard-auth-module"

import * as Components from "my-awesome-components"

const { Layout } = Components

export default ({ navigate }) => (
  <ComponentProvider components={Components}>
    <LoginModule request={api.login} onLogin={user => navigate("/dashboard")} />
  </ComponentProvider>
)
```

```jsx
// Auth module example
import { useComponents } from "react-use-components"

export const LoginModule = ({ onLogin }) => {
  const { Button, Form, Input, Label } = useComponents()
  const [state, setState] = useState({ email: "" })
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    /* call api, handle token, errors etc */
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">
        <Input id="email" value={state.email} />
      </Label>
      <Button type="submit">Login</Button>
    </Form>
  )
}
```
