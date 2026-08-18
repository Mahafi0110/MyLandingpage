import { useEffect, useState } from 'react'
import { getServices, type Service } from '../../api/landing'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceIcon } from '../icons/Icons'

export function Services() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getServices()
      .then(setServices)
      .catch((error) => {
        console.error('Failed to load services:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section id="services" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Comprehensive Nutrition Solutions"
          description="From personalized meal planning to lifestyle coaching, we offer practical nutrition solutions designed to help you achieve lasting health."
        />

        {loading ? (
          <div className="py-10 text-center text-text">
            Loading services...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                className="group rounded-2xl border border-secondary/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ServiceIcon
                    name={service.icon as any}
                    className="h-7 w-7"
                  />
                </div>

                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-text sm:text-base">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}