import { useState } from 'react'
import './Mediahub.scss'

const Mediahub = () => {
  
    const [tab, setTab] = useState(0);

    const handleShowTab = (tab: number) => {
      setTab(tab);
    }

    return (
        <>
           <section className="Mediahub">
              <div className="Mediahub-column">
                <div className="Mediahub-controls">
                  <div className="Mediahub-center">
                    <button onClick={ () => handleShowTab(0) } className={tab === 0 ? `Mediahub-control isActive` : `Mediahub-control Mediahub-control--watchOnTv`} aria-label="Disfruta en tu tele">
                      <svg className="Mediahub-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
                      </svg>
                    </button>
                    <button onClick={ () => handleShowTab(1) } className={tab === 1 ? `Mediahub-control isActive` : `Mediahub-control Mediahub-control--allDevices`} aria-label="Usa cualquier dispositivo">
                      <svg className="Mediahub-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                      </svg>
                    </button>
                    <button onClick={ () => handleShowTab(2) } className={tab === 2 ? `Mediahub-control isActive` : `Mediahub-control Mediahub-control--kids`} aria-label="Crea perfiles infantiles">
                      <svg className="Mediahub-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                      </svg>
                    </button>
                    <button onClick={ () => handleShowTab(3) } className={tab === 3 ? `Mediahub-control isActive` : `Mediahub-control Mediahub-control--download`} aria-label="Descarga para ver sin conexión">
                      <svg  className="Mediahub-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="Mediahub-features">
                  <article className={`Mediahub-feature ${tab === 0 ? 'isActive' : ''}`}>
                    <div className="Mediahub-text">
                      <h2 className="Mediahub-h2">Disfruta en tu tele</h2>
                      <p className="Mediahub-p">Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</p>
                    </div>
                    <div className="Mediahub-media">
                      <img className="Mediahub-img" src="assets/img/tv.png" alt="Contenido desde tu Tv" />
                      <video className="Mediahub-video Mediahub-video--watchOnTv" src="assets/media/video-tv-0819.m4v" autoPlay loop muted></video>
                    </div>
                  </article>

                  <article className={`Mediahub-feature Mediahub-feature--allDevices ${tab === 1 ? 'isActive' : ''}`}>
                    <div className="Mediahub-text">
                      <h2 className="Mediahub-h2">Usa cualquier dispositivo</h2>
                      <p className="Mediahub-p">Ve en streaming todas las películas y series en tu móvil, tableta, ordenador y televisor.</p>
                    </div>
                    <div className="Mediahub-media">
                      <img className="Mediahub-img" src="assets/img/device-pile.png" alt="Streaming en cualquier dispositivo"/>
                      <video className="Mediahub-video Mediahub-video--allDevices" src="assets/media/video-devices.m4v" autoPlay loop muted></video>
                    </div>
                  </article>

                  <article className={`Mediahub-feature ${tab === 2 ? 'isActive' : ''}`}>
                    <div className="Mediahub-text">
                      <h2 className="Mediahub-h2">Crea perfiles infantiles</h2>
                      <p className="Mediahub-p">Deja que los niños vivan aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, gratis con tu suscripción.</p>
                    </div>
                    <div className="Mediahub-media">
                      <img className="Mediahub-img" src="assets/img/kids.png" alt="Perfiles infantiles"/>
                    </div>
                  </article>

                  <article className={`Mediahub-feature Mediahub-feature--download ${tab === 3 ? 'isActive' : ''}`}>
                    <div className="Mediahub-text">
                      <h2 className="Mediahub-h2">Descárgate tus favoritas para verlas sin conexión</h2>
                      <p className="Mediahub-p">Disfruta de Netflix en tierra, mar y aire…</p>
                    </div>
                    <div className="Mediahub-media">
                      <img className="Mediahub-img" src="assets/img/mobile-0819.jpg" alt="Perfiles infantiles"/>
                      <div className="Mediahub-row Downloading">
                        <img className="Downloading-cover" src="assets/img/boxshot.png" alt="Carátula Stranger Things" loading="lazy" />
                        <div className="Downloading-info">
                          <strong className="Downloading-strong">Stranger Things</strong>
                          <p className="Downloading-p">Descargándose...</p>
                        </div>
                        <img className="Downloading-gif" src="assets/img/download-icon.gif" alt="Descargando contenido..." loading="lazy" />
                      </div>
                    </div>
                  </article>
                </div>
              </div>
           </section>
        </>
    )
}

export default Mediahub;