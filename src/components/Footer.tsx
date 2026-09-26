import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      <div className="footer-inner">

        <div className="footer-top">

          <div>

            <h2>
              Building things,
              <br />
              learning along the way.
            </h2>
          </div>

          <div className="footer-links">

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/learning">
              Learning
            </Link>

            <Link to="/notes">
              Notes
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {year} Mingrui Zhang
          </span>

          <span>
            Sydney, Australia
          </span>

        </div>

      </div>

    </footer>
  )
}

export default Footer