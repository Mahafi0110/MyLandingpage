import { useEffect, useState } from 'react'
import {
  getLandingPage,
  getServices,
  getBenefits,
  type LandingPage,
  type Service,
  type Benefit,
} from '../api/landing'

export function useLandingPage() {
  const [data, setData] = useState<LandingPage | null>(null)
  const [services, setServices] = useState<Service[]>([])
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      getLandingPage(),
      getServices(),
      getBenefits(),
    ])
      .then(([landingPage, servicesData, benefitsData]) => {
        setData(landingPage)
        setServices(servicesData)
        setBenefits(benefitsData)
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to load website')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {
    data,
    services,
    benefits,
    loading,
    error,
  }
}