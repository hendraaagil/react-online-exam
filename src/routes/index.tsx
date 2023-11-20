import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'

import { Dashboard, Exams, Profile } from '@/pages/dashboard'
import { ExamInstruction, Question } from '@/pages/exam'
import { LoginPage } from '@/pages/login'

import {
  loginAction,
  loginLoader,
  logoutAction,
  protectedLoader,
} from '@/libs/auth'
import {
  examAction,
  examLoader,
  examsLoader,
  indexQuestionLoader,
  questionLoader,
} from '@/libs/exam'

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
        loader: examsLoader,
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
        path: ':examId',
        element: <Outlet />,
        children: [
          {
            id: 'exam',
            index: true,
            element: <ExamInstruction />,
            loader: examLoader,
            action: examAction,
          },
          {
            path: 'question',
            children: [
              {
                index: true,
                loader: indexQuestionLoader,
              },
              {
                id: 'question',
                path: ':questionId',
                element: <Question />,
                loader: questionLoader,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'logout',
    action: logoutAction,
  },
])
