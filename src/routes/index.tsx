import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'

import { Dashboard, Exams, Profile } from '@/pages/dashboard'
import { LoginPage } from '@/pages/login'
import { loginAction, loginLoader, protectedLoader } from '@/libs/auth'
import { authProvider } from '@/providers/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: loginLoader,
        action: loginAction,
      },
    ],
  },
  {
    id: 'dashboard',
    path: 'dashboard',
    element: <Dashboard />,
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <Exams />,
        // loader: () => {
        //   return authProvider.getExams()
        // }
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: 'logout',
    action: async () => {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await authProvider.signout()
      return redirect('/')
    },
  },
])
