import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './views/About/About';
import Error from './views/Error/Error'


const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error/>
  }
])

root.render(<RouterProvider router={router} />)