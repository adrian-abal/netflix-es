import Languages from '../Languages/Languages'
import Logo from '../Logo/Logo'
import './Header.scss'

const Header = () => {

  return (
    <>
      <header className="Header">
        <div className="Header-center">
          <div className="Header-spaced">
            <Logo />
            <div className="Header-user">
              <Languages />
              <a href="#" className="Header-login" title="Iniciar sesión">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header