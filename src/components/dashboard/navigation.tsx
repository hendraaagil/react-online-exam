import clsx from 'clsx'
import { Home, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const menus = [
  {
    Icon: Home,
    label: 'Dashboard',
    path: '/dashboard',
  },
  {
    Icon: User,
    label: 'Profile',
    path: '/dashboard/profile',
  },
]

export const Navigation = () => (
  <nav className="basis-1/4 pt-4">
    <ul className="space-y-2">
      {menus.map((menu) => (
        <li key={menu.label} className="font-medium">
          <NavLink
            to={menu.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center space-x-2 rounded border-l-4 p-2 transition-colors hover:bg-gray-400',
                isActive ? 'border-blue-500 bg-gray-400' : 'border-transparent',
              )
            }
            end
          >
            <menu.Icon className="h-6 w-6" />
            <p>{menu.label}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)
