import { aboutHighlights, images } from '../../config/site'
import type { LandingPage } from '../../api/landing'
import { SectionHeading } from '../ui/SectionHeading'
import { CheckIcon } from '../icons/Icons'

interface AboutProps {
  data: LandingPage
}

export function About({ data }: AboutProps) {
  const title =
    data.about_title || 'Your Partner in Health & Wellness'

  const description =
    data.about_description ||
    'We believe food is medicine. Our mission is to empower you with the knowledge and tools to make informed, sustainable choices that nourish your body and mind.'

  const image =
    data.about_image || images.about

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* About Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/10">
              <img
                src={image}
                alt={`${data.business_name} - About Us`}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-primary px-6 py-4 text-white shadow-lg sm:block">
              <p className="text-3xl font-bold">10+</p>

              <p className="text-sm text-secondary/90">
                Years of Expertise
              </p>
            </div>
          </div>

          {/* About Content */}
          <div>
            <SectionHeading
              label="About Us"
              title={title}
              description={description}
              align="left"
            />

            <ul className="mt-8 space-y-4">
              {aboutHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  {/* Check Icon */}
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <CheckIcon
                      className="h-3.5 w-3.5"
                      strokeWidth={2.5}
                    />
                  </span>

                  {/* Highlight */}
                  <span className="text-base font-medium text-primary">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}