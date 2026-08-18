import {  images } from '../../config/site'
import type { LandingPage } from '../../api/landing'
import { Button } from '../ui/Button'
import { ArrowRightIcon } from '../icons/Icons'

interface HeroProps {
  data: LandingPage
}

export function Hero({ data }: HeroProps) {
  const whatsappUrl = `https://wa.me/${data.whatsapp}`

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div className="order-2 lg:order-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/60 px-4 py-1.5 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Certified Nutrition Specialist
            </span>

            <h1 className="text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              {data.hero_title}
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-text sm:text-lg">
              {data.hero_description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact">
                {data.cta_text}
                <ArrowRightIcon className="h-4 w-4" />
              </Button>

              <Button
                href={whatsappUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 sm:gap-10">
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-text">Happy Clients</p>
              </div>

              <div className="hidden h-10 w-px bg-secondary sm:block" />

              <div>
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-sm text-text">Years Experience</p>
              </div>

              <div className="hidden h-10 w-px bg-secondary sm:block" />

              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-text">Success Rate</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-secondary/30 sm:-inset-6" />

              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
                <img
                  src={data.hero_image || images.hero}
                  alt="Fresh healthy meal with vegetables and grains"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  loading="eager"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-lg sm:-bottom-6 sm:-left-6 sm:p-5">
                <p className="text-xs font-medium text-text sm:text-sm">
                  Daily Nutrition Score
                </p>

                <p className="mt-1 text-2xl font-bold text-primary sm:text-3xl">
                  A+
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}