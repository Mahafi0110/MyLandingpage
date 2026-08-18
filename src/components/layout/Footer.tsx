import type { LandingPage } from '../../api/landing'
import { siteConfig } from '../../config/site'
import {
  LeafIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from '../icons/Icons'

interface FooterProps {
  data: LandingPage
}

export function Footer({ data }: FooterProps) {
  const { social } = siteConfig
  const year = new Date().getFullYear()

  const socialLinks = [
    { icon: InstagramIcon, href: social.instagram, label: 'Instagram' },
    { icon: FacebookIcon, href: social.facebook, label: 'Facebook' },
    { icon: LinkedInIcon, href: social.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2.5"
            >
              {data.logo ? (
                <img
                  src={data.logo}
                  alt={data.business_name}
                  className="h-10 w-10 rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <LeafIcon className="h-5 w-5" />
                </div>
              )}

              <span className="text-lg font-bold">
                {data.business_name}
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary/80">
              Personalized nutrition guidance for lasting health and wellness.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h3>

            <ul className="mt-4 space-y-3">

              <li>
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-2.5 text-sm text-secondary/80 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  {data.phone}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2.5 text-sm text-secondary/80 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {data.email}
                </a>
              </li>

              <li>
                <a
                  href={data.maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-secondary/80 transition-colors hover:text-white"
                >
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  {data.address}
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-secondary/60">
            &copy; {year} {data.business_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}