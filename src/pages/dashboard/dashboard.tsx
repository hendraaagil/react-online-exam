import { Outlet, useFetcher, useRouteLoaderData } from 'react-router-dom'

import { Navigation } from '@/components/dashboard'
import { Button, Container } from '@/components/ui'
import { AuthProvider } from '@/providers/auth'

export const Dashboard = () => {
  const { username } = useRouteLoaderData('dashboard') as Pick<
    AuthProvider,
    'username'
  >
  const fetcher = useFetcher()
  const isLoggingOut = fetcher.formData != null

  return (
    <Container>
      <header className="flex items-center justify-between border-b border-gray-700 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-xl font-medium">
            👋 Hello, <strong>{username}</strong>!
          </p>
        </div>
        <fetcher.Form method="post" action="/logout">
          <Button type="submit" color="red" disabled={isLoggingOut}>
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </Button>
        </fetcher.Form>
      </header>

      <main className="flex flex-col sm:flex-row">
        <Navigation />
        <Outlet />
      </main>
    </Container>
  )
}
