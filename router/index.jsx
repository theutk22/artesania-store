import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  }
])
