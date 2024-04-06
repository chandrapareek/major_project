import './App.css'
import Navbar from './components/Navbar'
import Hlp_rsrc from './components/Hlp_rsrc'
import 'bootstrap/dist/css/bootstrap.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chatbot from './components/Chatbot'
import FAQ from './components/FAQ'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Chatbot /></>
    },
    {
      path: "/Chatbot",
      element: <><Navbar /><Chatbot /></>
    },
    {
      path: "/FAQs",
      element: <><Navbar /><FAQ /></>
    },
    {
      path: "/helpful_resources",
      element: <><Navbar /><Hlp_rsrc /></>
    },
  ])
  return (
    <>
      
      <RouterProvider router={router} />

    </>
  )
}

export default App
