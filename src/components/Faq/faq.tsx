import './faq.scss';
import { FAQ } from '../../consts/faq-data';
import { useState } from 'react';
import GetStarted from '../GetStarted/GetStarted';

const Faq = () => {

    const [open, setOpen] = useState(-1);

    const handleAccordion = (accordion: number) => {
      setOpen(prevOpen => (prevOpen === accordion ? -1 : accordion));
    }

    return (
        <>
          <section className="Faq">
            <div className="Faq-center">
              <h2 className="Faq-h2">Preguntas frecuentes</h2>
              <div className="Faq-wrapper">
                <ul className="Faq-ul">
                  {
                    FAQ.map(( {id,question, reply}, index ) => {
                      return (
                        <li className="Faq-li" key={id}>
                          <button className={`Faq-question ${open === index ? 'isActive' : ''}`} onClick={ () => handleAccordion(index) }>
                            <span className="Faq-span">{question}</span>
                            <svg className={`Faq-svg ${open === index ? 'isOpen' : ''}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                            </svg>
                          </button>
                          <div className={`Faq-reply ${open === index ? 'isOpen' : ''}`}>
                            <p className="Faq-p">{reply}</p>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
                <GetStarted />
              </div>
            </div>
          </section>
        </>
    )
}

export default Faq;