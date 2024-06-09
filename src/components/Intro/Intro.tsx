import { useState } from 'react'
import './Intro.scss'
import Subscribe from './Susbcribe/Subscribe'

const Intro = () => {
  const [open, setOpen] = useState(false)

  const handleOpenDialog = () => {
    setOpen(!open)
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  return (
    <>
      <div className="Intro">
        <div className="Intro-wrapper">
          <div className="Intro-column">
            <div className={open ? 'Intro-center isHide' : 'Intro-center'}>
              <h1 className="Intro-h1">Películas y series sin límites y mucho más</h1>
              <p className="Intro-p">Disfruta donde quieras. Cancela cuando quieras.</p>
              <button className='Intro-start' onClick={handleOpenDialog} type='button' aria-label='Empezar'>Empezar</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe isOpen={open} onClose={handleCloseDialog}/>
    </>
  )
}

export default Intro
