export interface LandingPage {
  id: number
  business_name: string
  logo: string
  hero_title: string
  hero_description: string
  hero_image: string
  about_title: string
  about_description: string
  about_image: string
  phone: string
  whatsapp: string
  email: string
  address: string
  maps_url: string
  cta_text: string
  updated_at: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  order: number
}

// const API_URL = 'http://127.0.0.1:8000/api'
const API_URL = 'https://nutrition-planner-km7q.onrender.com/api'

export async function getLandingPage(): Promise<LandingPage> {
  const response = await fetch(`${API_URL}/landing-page/`)

  if (!response.ok) {
    throw new Error('Failed to fetch landing page data')
  }

  return response.json()
}

export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${API_URL}/services/`)

  if (!response.ok) {
    throw new Error('Failed to fetch services')
  }

  return response.json()
}
export interface Benefit {
  id: number
  title: string
  description: string
  icon: string
  order: number
}

export async function getBenefits(): Promise<Benefit[]> {
  const response = await fetch(`${API_URL}/benefits/`)

  if (!response.ok) {
    throw new Error('Failed to fetch benefits')
  }

  return response.json()
}