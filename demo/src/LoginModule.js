import React, { useState } from "react"
import { useComponents } from "react-use-components"

const LoginModule = ({ request, onLogin }) => {
  const { Form, Label, Input, Button } = useComponents()

  const [state, setState] = useState({ email: "", password: "" })
  const [errors, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const user = await request(state)
      onLogin(user)
    } catch (error) {
      setError(error)
    }
  }
  function handleChange({ target }) {
    setState({ [target.id]: target.value })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        placeholder="enter your email"
        onChange={handleChange}
      />
      <Label htmlFor="password">Password</Label>
      <Input id="password" placeholder="***" onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </Form>
  )
}

export default LoginModule
