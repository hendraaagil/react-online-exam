import { Form, useActionData, useNavigation } from 'react-router-dom'

import { Button, Container, Heading, Input } from '@/components/ui'

export const LoginPage = () => {
  const navigation = useNavigation()
  const isLoggingIn =
    navigation.formData?.get('username') != null &&
    navigation.formData?.get('password') != null

  const actionData = useActionData() as { error: string } | undefined

  return (
    <Container className="items-center justify-center space-y-4">
      <Heading>Login Page</Heading>
      <p className="text-lg">You must login first!</p>
      <Form method="post" className="flex w-full max-w-lg flex-col" replace>
        <Input
          label="Username"
          id="username"
          name="username"
          className="mb-4"
          defaultValue="hendra"
        />
        <Input
          label="Password"
          id="password"
          name="password"
          type="password"
          className="mb-4"
          defaultValue="hendra123"
        />
        {actionData && actionData.error ? (
          <p className="mb-4 rounded bg-red-300 px-3 py-2 text-red-900">
            {actionData.error}
          </p>
        ) : null}
        <Button type="submit" color="green" disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Login'}
        </Button>
      </Form>
    </Container>
  )
}
