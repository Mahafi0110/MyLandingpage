import { siteConfig, images } from '../../config/site'
import type { LandingPage } from '../../api/landing'
import { Button } from '../ui/Button'
import {
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
} from '../icons/Icons'

interface CallToActionProps {
  data: LandingPage
}

export function CallToAction({ data }: CallToActionProps) {
  const { contact } = siteConfig

  const phone = data.phone
  const email = data.email
  const whatsappUrl = `https://wa.me/${data.whatsapp}`

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute inset-0">
        <img
          src={images.cta}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          <div className="text-center lg:max-w-xl lg:text-left">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Transform Your Health?
            </h2>

            <p className="mt-4 text-base text-secondary/90 sm:text-lg">
              Take the first step toward a healthier, happier you.
              Book your free consultation today.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[240px] lg:items-end">

            <Button
              href={`tel:${phone}`}
              variant="secondary"
              className="w-full sm:w-auto lg:min-w-[220px]"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </Button>

            <Button
              href={`mailto:${email}`}
              variant="outline"
              className="w-full border-white text-white hover:bg-white hover:text-primary-dark hover:border-white sm:w-auto lg:min-w-[220px]"
            >
              <MailIcon className="h-4 w-4" />
              Send Email
            </Button>

            <Button
              href={whatsappUrl}
              variant="ghost"
              className="w-full text-white hover:bg-white/15 hover:text-white sm:w-auto lg:min-w-[220px]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}