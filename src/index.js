import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Page } from './page'
import { CV } from './about'

const router = createHashRouter([
  {
    path: '/',
    element: <Page />,
  },
  {
    path: '/cv',
    element: <CV />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
