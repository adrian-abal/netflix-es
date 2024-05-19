import { useState } from 'react'
import './Header.scss'

const Header = () => {

  const [open,setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  }
    return (
    <>
      <header className="Header">
        <div className="Header-center">
          <div className="Header-spaced">
            <a className="Header-home" href="#" title="Netflix home">
              <svg
                className="Header-svg"
                viewBox="0 0 111 30"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
               >
                <path d="M105.062 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.468 0h5.063l3.062 7.874L105.875 0h5.124l-5.937 14.28zM90.47 0h-4.594v27.25c1.5.094 3.062.156 4.594.343V0zm-8.563 26.937c-4.187-.281-8.375-.53-12.656-.625V0h4.687v21.875c2.688.062 5.375.28 7.969.405v4.657zM64.25 10.657v4.687h-6.406V26H53.22V0h13.125v4.687h-8.5v5.97h6.406zm-18.906-5.97V26.25c-1.563 0-3.156 0-4.688.062V4.687h-4.844V0h14.406v4.687h-4.874zM30.75 15.593c-2.062 0-4.5 0-6.25.095v6.968c2.75-.188 5.5-.406 8.281-.5v4.5l-12.968 1.032V0H32.78v4.687H24.5V11c1.813 0 4.594-.094 6.25-.094v4.688zM4.78 12.968v16.375C3.094 29.531 1.593 29.75 0 30V0h4.469l6.093 17.032V0h4.688v28.062c-1.656.282-3.344.376-5.125.625L4.78 12.968z" />
              </svg>
            </a>

            <div className="Header-user">
              <div className="Header-select Select">
                <button className={ open ? `Select-button isOpen` : `Select-button`} onClick={handleOpen} aria-label='Selector de idioma'>
                  <svg className='Select-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
                  </svg>
                  <span className='Select-span'>Español</span>
                </button>
                <ul className={ open ? `Select-ul isOpen` : `Select-ul`}>
                  <li className="Select-li">
                    <a className="Select-a" href="#" title="Netflix en español">Español</a>
                  </li>
                  <li className="Select-li">
                    <a className="Select-a" href="#" title="Netflix en inglés">Inglés</a>
                  </li>
                </ul>
              </div>
              <a href="#" className="Header-login" title="Iniciar sesión">Iniciar sesión</a>
            </div>
          </div>
        </div>
      </header>
    </>
    )
}

export default Header