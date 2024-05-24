import { v4 as uuidv4 } from 'uuid' 
import { PricingPlan } from '../types/Pricing-plan'

export const PLANS: PricingPlan[] = [
  { 
    id: uuidv4(),
    name: 'Premium',
    description: '4K + HDR',
    price: '17.99 €',
    quality: 'Excepcional',
    resolution: '4K (Ultra HD) + HDR',
    surroundAudio: 'Incluido',
    supportedDevices: 'Televisor, ordenador, teléfono móvil, tableta',
    simultaneousDevices: 4,
    downloadsPerDevice: 6,
    ads: 'Sin anuncios'
  },
  { 
    id: uuidv4(),
    name: 'Estándar',
    description: '1080p',
    price: '12,99 €',
    quality: 'Buena',
    resolution: '1080p (Full HD)',
    supportedDevices: 'Televisor, ordenador, teléfono móvil, tableta',
    simultaneousDevices: 2,
    downloadsPerDevice: 2,
    ads: 'Sin anuncios'
  },
  { 
    id: uuidv4(),
    name: 'Estándar con anuncios',
    description: '1080p',
    price: '5,49 €',
    quality: 'Buena',
    resolution: '1080p (Full HD)',
    supportedDevices: 'Televisor, ordenador, teléfono móvil, tableta',
    simultaneousDevices: 2,
    downloadsPerDevice: 2,
    ads: 'Algunas pausas publicitarias'
  }
] as const

