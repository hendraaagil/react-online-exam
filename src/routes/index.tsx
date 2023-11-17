import { Navigate, createBrowserRouter } from 'react-router-dom'

import { LoginPage } from '@/pages/login'
import { loginAction, loginLoader, protectedLoader } from '@/libs/login'
import { DashboardPage } from '@/pages/dashboard'

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
      {
        path: 'dashboard',
        element: <DashboardPage />,
        loader: protectedLoader,
      },
    ],
  },
])
