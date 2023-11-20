import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'

import { Dashboard, Exams, Profile } from '@/pages/dashboard'
import { ExamInstruction } from '@/pages/exam'
import { LoginPage } from '@/pages/login'

import { loginAction, loginLoader, protectedLoader } from '@/libs/auth'
import { authProvider } from '@/providers/auth'
import { examProvider } from '@/providers/exam'

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
        id: 'exams',
        index: true,
        element: <Exams />,
        loader: () => {
          return { exams: examProvider.getExams() }
        },
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: 'exam',
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        id: 'exam',
        path: ':examId',
        element: <ExamInstruction />,
        loader: ({ params }) => {
          const exam = examProvider.getExamById(Number(params.examId as string))
          if (!exam) {
            return redirect('/dashboard')
          }

          return { exam: exam }
        },
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
