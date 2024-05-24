export interface PricingPlan {
  id: string
  name: string
  description: string
  price: string
  quality: string
  resolution: string
  surroundAudio ?: string
  supportedDevices: string
  simultaneousDevices: number
  downloadsPerDevice: number
  ads: string
}