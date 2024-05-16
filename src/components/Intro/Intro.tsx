import { useState } from 'react';
import './Intro.scss'
import Subscribe from './Susbcribe/Subscribe';

const Intro = () => {

  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(!open);
  }

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Intro">
        <div className="Intro-wrapper">
          <div className="Intro-column">
            <div className={open ? `Intro-center isHide` : `Intro-center`}>
              <h2 className="Intro-h2">Películas y series sin límites y mucho más</h2>
              <h3 className="Intro-h3">Disfruta donde quieras. Cancela cuando quieras.</h3>
              <button className='Intro-start' onClick={handleOpenDialog} type='button' aria-label='Empezar' >Empezar</button>
            </div>
          </div>
        </div>
      </div>
      <Subscribe isOpen={open} onClose={handleCloseDialog}/>
    </>
  )
}

export default Intro;