import './Footer.scss'
import { LINKS } from "../../consts/links-data";
import Languages from '../Languages/Languages';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
      <>
        <footer className="Footer">
          <div className="Footer-center">
            <div className="Footer-column">
              <p className="Footer-p">
                ¿Preguntas? Llama al <a className="Footer-phone" href="tel:900-759-106" title="Tel:">900-759-106</a>
              </p>
              <ul className="Footer-links">
                {
                  LINKS.map(({id, name, url}) => {
                    return (
                      <li className="Footer-link" key={id}>
                        <a className="Footer-a" href={url} title={name}>{name}</a>
                      </li>
                    )
                  })
                }
              </ul>
              <Languages />
              <div className="Footer-logo">
                <Logo />
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer