import { Outlet } from 'react-router-dom'

import Navbar from './Navbar'
import './Layout.css'

function Layout() {
  return (
    <>
      <Navbar />

      <div className="page-container">
        <Outlet />
      </div>

      <footer className="site-footer">
        <p>© 2026 Mingrui Zhang · Baicai</p>
      </footer>
    </>
  )
}

export default Layout