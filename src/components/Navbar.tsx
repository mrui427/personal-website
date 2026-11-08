import { Trans } from '../i18n/Language'
import { useLanguage } from '../i18n/context'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()
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
        ><Trans text="Morri." /></Link>

        <nav className="navbar-links" aria-label={t('Main navigation')}>

          <NavLink
            to="/"
            end
            className={getNavClass}
          ><Trans text="Home" /></NavLink>

          <NavLink
            to="/projects"
            className={getNavClass}
          ><Trans text="Projects" /></NavLink>


          <NavLink
            to="/notes"
            className={getNavClass}
          ><Trans text="Notes" /></NavLink>

          <NavLink
            to="/about"
            className={getNavClass}
          ><Trans text="About" /></NavLink>

          <NavLink
            to="/contact"
            className={getNavClass}
          ><Trans text="Contact" /></NavLink>

        </nav>

        <div className="language-switch" role="group" aria-label={t('Language')}>
          <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
          <button type="button" lang="zh-CN" aria-pressed={language === 'zh'} onClick={() => setLanguage('zh')}>中文</button>
        </div>

      </div>
    </header>
  )
}

export default Navbar
