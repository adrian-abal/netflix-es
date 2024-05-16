import './Subscribe.scss'

/* interface SubscribeProps {
  isOpen: boolean;
  onClose: () => void
} */

// const Subscribe: React.FC<SubscribeProps> = ({ isOpen, onClose }) => {
const Subscribe = ({ isOpen, onClose }:{ isOpen: boolean, onClose: () => void } ) => {
  return (
    <>
      { isOpen && ( 
        <dialog className="Subscribe" open={isOpen}>
          <div className="Subscribe-column">
            <button className='Subscribe-close' onClick={onClose} aria-label='Cerrar'>
              <svg className="Subscribe-svg"xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
            <div className="Subscribe-content">
              <header className="Subscribe-header">
                <h2 className="Subscribe-h2">Crear o reanudar suscripción</h2>
              </header>
              <div className="Subscribe-body">
                <p className="Subscribe-p">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>
                {/* Create or reactivate membership form */}           
                <form className="Subscribe-form Form" action="#" method="post">
                  <div className="Form-group Form-group--email">
                    <input id="focusEmail" className="Form-input" type="email" placeholder="" required/>
                    <label className="Form-label" htmlFor="focusEmail">Dirección de correo</label>
                  </div>
                  <div className="Form-group Form-group--controller">
                    <button className="Form-button Form-button--continue" type="submit" arial-label="Continuar">Continuar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Subscribe;