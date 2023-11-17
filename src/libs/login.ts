import { LoaderFunctionArgs, redirect } from 'react-router-dom'
import { fakeAuthProvider } from '@/libs/auth'

export const loginAction = async ({ request }: LoaderFunctionArgs) => {
  const formData = await request.formData()
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

  // Validate our form inputs and return validation errors via useActionData()
  if (!username || !password) {
    return {
      error: 'You must provide a username and password to log in!',
    }
  }

  // Sign in and redirect to the proper destination if successful.
  try {
    await fakeAuthProvider.signin(username, password)
  } catch (error) {
    // Unused as of now but this is how you would handle invalid
    // username/password combinations - just like validating the inputs
    // above
    return {
      error: 'Invalid login attempt',
    }
  }

  return redirect('/dashboard')
}

export const loginLoader = () => {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect('/dashboard')
  }
  return null
}

export const protectedLoader = () => {
  if (!fakeAuthProvider.isAuthenticated) {
    return redirect('/login')
  }
  return null
}
