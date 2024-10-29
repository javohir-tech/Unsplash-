import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import { GlobalContextProvider } from './Context/globalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={router} />
  </GlobalContextProvider>
)
