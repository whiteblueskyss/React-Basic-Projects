import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Home from './components/home/Home.jsx'
import User from './components/user/User.jsx'
import './index.css'
// const router = createBrowserRouter(
//   [{
//     path : '/',
//     element: <Layout />,
//     children : [
//       {
//         path : "",
//         element: <Home />
//       },
//       {
//         path : "about",
//         element: <About />
//       },
//       {
//         path : "contact",
//         element: <Contact />
//       }
//     ]
//   }]
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
