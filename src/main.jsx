import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import Restaurants from './pages/RestaurantsPage.jsx'
import NotFound from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element: <Home></Home>,
  errorElement: <NotFound></NotFound>
  },
  {
    path: '/restaurants',
    element: <Restaurants></Restaurants>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
