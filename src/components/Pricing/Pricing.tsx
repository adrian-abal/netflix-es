import './Pricing.scss'
import { PLANS } from '../../consts/pricing-data';

const Pricing = () => {
  
    return (
      <>
        <section className="Pricing">
            <div className="Pricing-center">
              <h2 className="Pricing-h2">Elige el plan ideal para ti</h2>
              <div className="Pricing-wrapper">
                  <div className="Pricing-row">
                    <ul className="Pricing-list">
                      {
                        PLANS.map(({id, name, description, price, quality, resolution, surroundAudio, supportedDevices, simultaneousDevices, downloadsPerDevice, ads}, index ) => { 
                          
                          return (                           
                            <li className="Pricing-item" key={id}>
                              <Plan 
                                index={index}
                                name={name} 
                                description={description}
                                price={price}
                                quality={quality}
                                resolution={resolution}
                                surroundAudio={surroundAudio}
                                supportedDevices={supportedDevices}
                                simultaneousDevices={simultaneousDevices}
                                downloadsPerDevice={downloadsPerDevice}
                                ads={ads}
                               />
                            </li>
                          )
                        })
                      }
                    </ul>
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