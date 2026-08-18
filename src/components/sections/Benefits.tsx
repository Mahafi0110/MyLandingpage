import { useEffect, useState } from 'react'
import { getBenefits, type Benefit } from '../../api/landing'
import { SectionHeading } from '../ui/SectionHeading'
import { BenefitIcon } from '../icons/Icons'

export function Benefits() {
  const [benefits, setBenefits] = useState<Benefit[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getBenefits()
      .then(setBenefits)
      .catch((error) => {
        console.error('Failed to load benefits:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section id="benefits" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="The GreenLeaf Difference"
          description="We go beyond generic diet plans to deliver a truly personalized experience that puts your health first."
        />

        {loading ? (
          <div className="py-10 text-center text-text">
            Loading benefits...
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.id}
                className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <BenefitIcon
                    name={benefit.icon as any}
                    className="h-7 w-7"
                  />
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-1 text-xl font-semibold text-primary">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-text sm:text-base">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}