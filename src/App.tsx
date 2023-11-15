import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Connexion from './Connexion'
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter
} from "react-router-dom";
import Home from './Home'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
      path: "/about",
      element: <div>about</div>,
    },
    {
      path: "/home",
      element: <Home />,
    }
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
