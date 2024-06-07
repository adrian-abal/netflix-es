import { v4 as uuidv4 } from 'uuid';
import { Faq } from '../types/Faq';

export const FAQ: Faq[] = [
    { 
      id: uuidv4(),
      question: '¿Qué es Netflix?',
      reply: 'Netflix es un servicio de streaming que ofrece una amplia variedad de series, películas, títulos de anime, documentales y otros contenidos premiados en miles de dispositivos conectados a internet.\n\nPuedes ver todo lo que quieras, cuando quieras, por una tarifa mensual reducida. ¡Siempre hay algo nuevo que descubrir, y cada semana se añaden nuevas series y películas!'
    },
    { 
      id: uuidv4(),
      question: '¿Cuánto cuesta Netflix?',
      reply: 'Disfruta de Netflix en tu smartphone, tableta, Smart TV, ordenador o dispositivo de streaming, todo por una tarifa mensual fija. Planes desde 5,49 € a 17,99 € al mes. Sin cargos adicionales ni contratos.'
    },
    { 
      id: uuidv4(),
      question: '¿Dónde puedo ver Netflix?',
      reply: 'Disfruta donde quieras y cuando quieras. Inicia sesión con tu cuenta de Netflix para disfrutar al instante de todo el contenido de Netflix.com desde tu ordenador personal o en cualquier dispositivo conectado a internet que ofrezca la aplicación de Netflix, entre ellos, smart TV, smartphones, tabletas, reproductores multimedia de streaming y consolas de juegos.\n\nTambién puedes descargar tus series favoritas con la aplicación de iOS o Android. Usa las descargas para ver títulos dondequiera que vayas y cuando no dispongas de conexión a internet. Netflix siempre te acompaña.'
    },
    { 
      id: uuidv4(),
      question: '¿Cómo cancelo?',
      reply: 'Netflix es flexible. Sin contratos liosos ni compromisos. Puedes cancelar fácilmente tu cuenta en línea con tan solo dos clics. Sin cargos por cancelación: activa o cancela tu cuenta en cualquier momento.'
    },
    { 
     id: uuidv4(),
     question: '¿Qué puedo ver en Netflix?',
     reply: 'Netflix dispone de una amplia biblioteca de originales de Netflix galardonados, títulos de anime, series de TV, documentales, largometrajes y otros contenidos. Ve todo el contenido que quieras, cuando quieras.'
    },
    { 
      id: uuidv4(),
      question: '¿Es Netflix bueno para los niños?',
      reply: 'La experiencia infantil de Netflix se incluye en la suscripción para que los padres tengan el control mientras los niños disfrutan de series y películas familiares en su propio espacio.\n\nLos perfiles infantiles incluyen controles parentales protegidos por PIN que te permiten restringir la calificación por edades del contenido que pueden ver los niños y bloquear determinados títulos que no quieras que vean.'
    }
]