import type { LandingPage } from '../../api/landing'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import {
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '../icons/Icons'

interface ContactProps {
  data: LandingPage
}

export function Contact({ data }: ContactProps) {
  const phone = data.phone
  const email = data.email
  const whatsapp = data.whatsapp
  const address = data.address
  const mapsUrl = data.maps_url

  const whatsappUrl = `https://wa.me/${whatsapp}`

  const contactItems = [
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
      action: 'Call us',
    },
    {
      icon: MailIcon,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      action: 'Send email',
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      value: phone,
      href: whatsappUrl,
      action: 'Message us',
      external: true,
    },
    {
      icon: MapPinIcon,
      label: 'Address',
      value: address,
      href: mapsUrl || '#',
      action: 'Get directions',
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          label="Contact Us"
          title="Get in Touch"
          description="Have questions or ready to start your nutrition journey? Reach out — we'd love to hear from you."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {contactItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={
                  item.external
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group flex flex-col rounded-2xl border border-secondary/50 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Label */}
                <span className="text-xs font-semibold uppercase tracking-wider text-text">
                  {item.label}
                </span>

                {/* Value */}
                <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-primary sm:text-base">
                  {item.value}
                </p>

                {/* Action */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  {item.action}

                  <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            )
          })}

        </div>

        {/* Google Maps Button */}
        {mapsUrl && (
          <div className="mt-10 text-center">
            <Button
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPinIcon className="h-4 w-4" />
              Get Directions
            </Button>
          </div>
        )}

      </div>
    </section>
  )
}