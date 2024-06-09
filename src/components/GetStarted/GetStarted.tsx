import './GetStarted.scss'

const GetStarted = () => {
  return (
    <>
      <div className="GetStarted">
        <p className="GetStarted-p">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</p>
        <form className="GetStarted-form" action="#">
          <div className="GetStarted-group GetStarted-group--email">
            <input id="focusEmail" className="GetStarted-input" type="email" placeholder="" required/>
            <label className="GetStarted-label" htmlFor="focusEmail">Dirección de correo</label>
          </div>
          <div className="GetStarted-group">
            <button className="GetStarted-button" type="submit" arial-label="Emprezar">Empezar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default GetStarted
