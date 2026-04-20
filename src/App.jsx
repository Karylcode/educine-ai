import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LandingPage from './pages/LandingPage'
import DemoPage from './pages/DemoPage'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-base">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function DemoLayout() {
  return (
    <div className="min-h-screen bg-dark-base">
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <LandingPage /> },
    ],
  },
  {
    element: <DemoLayout />,
    children: [
      { path: '/demo', element: <DemoPage /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

export default function App() {
  return <RouterProvider router={router} />
}
