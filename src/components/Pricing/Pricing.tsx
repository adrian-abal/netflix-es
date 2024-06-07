import { useState } from 'react';

import './Pricing.scss'
import { PLANS } from '../../consts/pricing-data';

const Pricing = () => {
  
    const [tab, setTab] = useState(0);

    const handleShowTab = (tab: number) => {
      setTab(tab);
    }

    return (
      <>
        <section className="Pricing">
          <div className="Pricing-center">
            <h2 className="Pricing-h2">Elige el plan ideal para ti</h2>
            <div className="Pricing-wrapper">
                <div className="Pricing-column">
                  <div className="Pricing-controls">
                    <ol className="Pricing-tabs">
                      <li className="Pricing-tab">
                        <button onClick={ () => handleShowTab(0) } className={`Pricing-button Pricing-button--premium ${tab === 0 ? 'isActive' : ''}`} aria-label="Plan Premium">
                          <strong className="Pricing-name">Premium</strong>
                          <span className="Pricing-description">4K + HDR</span>
                        </button>
                      </li>
                      <li className="Pricing-tab">
                        <button onClick={ () => handleShowTab(1) } className={`Pricing-button Pricing-button--standard ${tab === 1 ? 'isActive' : ''}`} aria-label="Plan Estándar">
                          <strong className="Pricing-name">Estándar</strong>
                          <span className="Pricing-description">1080p</span>
                        </button>
                      </li>
                      <li className="Pricing-tab">
                        <button onClick={ () => handleShowTab(2) } className={`Pricing-button Pricing-button--standardWithAds ${tab === 2 ? 'isActive' : ''}`} aria-label="Plan Estándar con anuncios">
                          <strong className="Pricing-name">Estándar con anuncios</strong>
                          <span className="Pricing-description">1080p</span>
                        </button>
                      </li>
                    </ol>
                  </div>
                  <div className="Pricing-content">
                    <ol className="Pricing-list">
                      {
                        PLANS.map((plan, index ) => {
                          return (                           
                            
                            <li className={`Pricing-item ${tab === index ? 'isActive' : ''}`} key={plan.id}>
                              <Plan 
                                index={index}
                                name={plan.name} 
                                description={plan.description}
                                price={plan.price}
                                quality={plan.quality}
                                resolution={plan.resolution}
                                surroundAudio={plan.surroundAudio}
                                supportedDevices={plan.supportedDevices}
                                simultaneousDevices={plan.simultaneousDevices}
                                downloadsPerDevice={plan.downloadsPerDevice}
                                ads={plan.ads}
                               />
                            </li>
                          )
                        })
                      }
                    </ol>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </>
    )
}

export default Pricing;

type PlanProps = {
  index: number
  name: string
  description: string
  price: string
  quality: string
  resolution: string
  surroundAudio?: string
  supportedDevices: string
  simultaneousDevices: number
  downloadsPerDevice: number
  ads: string
}

const Plan : React.FC<PlanProps> = ({ name, description, price, quality, resolution, surroundAudio, supportedDevices, simultaneousDevices, downloadsPerDevice, ads, index}) => {
    
    let className = ''; 

    switch (index) {
      case 0:
        className='Plan-header Plan-header--premium'
        break;

      case 1:
        className='Plan-header Plan-header--standard'
        break;

      case 2:
        className='Plan-header Plan-header--standardWithAds'
        break;

      default:
        className = 'Plan-header'
        break;
    }

    return (
    <>
      <article className="Pricing-article Plan">
        <header className={className}>
          <h3 className="Plan-name">{name}</h3>
          <span className="Plan-description">{description}</span>
        </header>
        <div className="Plan-body">
          <dl className="Plan-specs">
            <div className="Plan-spec">
              <dt className="Plan-dt">Precio</dt>
              <dl className="Plan-dl"><strong>{price}</strong></dl>
            </div>
            <div className="Plan-spec">
              <dt className="Plan-dt">Calidad</dt>
              <dl className="Plan-dl">{quality}</dl>
            </div>
            <div className="Plan-spec">
              <dt className="Plan-dt">Resolución</dt>
              <dl className="Plan-dl">{resolution}</dl>
            </div>
            { surroundAudio &&
              <div className="Plan-spec">
                <dt className="Plan-dt">Audio espacial (audio envolvente)</dt>
                <dl className="Plan-dl">{surroundAudio}</dl>
              </div>
            }
            <div className="Plan-spec">
              <dt className="Plan-dt">Dispositivos compatibles</dt>
              <dl className="Plan-dl">{supportedDevices}</dl>
            </div>
            <div className="Plan-spec">
              <dt className="Plan-dt">Dispositivos de tu hogar en los que puede verse Netflix a la vez</dt>
              <dl className="Plan-dl">{simultaneousDevices}</dl>
            </div>
            <div className="Plan-spec">
              <dt className="Plan-dt">Descargas en dispositivos</dt>
              <dl className="Plan-dl">{downloadsPerDevice}</dl>
            </div>
            <div className="Plan-spec">
              <dt className="Plan-dt">Anuncios</dt>
              <dl className="Plan-dl">{ads}</dl>
            </div>
          </dl>
        </div>
      </article>
    </>
  )
}