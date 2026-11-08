import { Trans } from '../i18n/Language'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      <div className="footer-inner">

        <div className="footer-top">

          <div>

            <h2><Trans text="Building things," /><br /><Trans text="learning along the way." /></h2>
          </div>

          <div className="footer-links">

            <Link to="/projects"><Trans text="Projects" /></Link>

            <Link to="/learning"><Trans text="Learning" /></Link>

            <Link to="/notes"><Trans text="Notes" /></Link>

            <Link to="/about"><Trans text="About" /></Link>

            <Link to="/contact"><Trans text="Contact" /></Link>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © {year}<Trans text=" Mingrui Zhang" /></span>

          <span><Trans text="Sydney, Australia" /></span>

        </div>

      </div>

    </footer>
  )
}

export default Footer