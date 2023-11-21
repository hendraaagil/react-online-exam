import { useRouteLoaderData } from 'react-router-dom'

import { Avatar, Heading } from '@/components/ui'
import { AuthProvider } from '@/providers/auth'

export const Profile = () => {
  const { username } = useRouteLoaderData('dashboard') as Pick<
    AuthProvider,
    'username'
  >

  return (
    <div className="space-y-4 px-0 py-4 sm:px-2">
      <Heading>Profile</Heading>
      <Avatar name={username as string} />
    </div>
  )
}
