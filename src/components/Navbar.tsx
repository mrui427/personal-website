import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const getNavClass = ({
    isActive,
  }: {
    isActive: boolean
  }) => {
    return isActive
      ? 'navbar-link active'
      : 'navbar-link'
  }

  return (
    <header className="site-navbar">
      <div className="navbar-inner">

        <Link
          to="/"
          className="navbar-brand"
        >
          Morri.
        </Link>

        <nav className="navbar-links">

          <NavLink
            to="/"
            end
            className={getNavClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={getNavClass}
          >
            Projects
          </NavLink>


          <NavLink
            to="/notes"
            className={getNavClass}
          >
            Notes
          </NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={getNavClass}
          >
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  )
}

export default Navbar