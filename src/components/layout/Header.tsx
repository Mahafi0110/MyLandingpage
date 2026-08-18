import { useState, useEffect } from 'react'
import type { LandingPage } from '../../api/landing'
import { siteConfig } from '../../config/site'
import { Button } from '../ui/Button'
import { LeafIcon, MenuIcon, CloseIcon } from '../icons/Icons'

interface HeaderProps {
  data: LandingPage
}

export function Header({ data }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-white/95 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <a
            href="#home"
            className="group flex items-center gap-2.5"
            onClick={closeMenu}
          >
            {data.logo ? (
              <img
                src={data.logo}
                alt={data.business_name}
                className="h-10 w-10 rounded-xl object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <LeafIcon className="h-5 w-5" />
              </div>
            )}

            <span className="text-lg font-bold text-primary">
              {data.business_name}
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact">
              {data.cta_text || 'Book Consultation'}
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-secondary/50 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-secondary/50 bg-white shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              <div className="flex flex-col gap-1">
                {siteConfig.navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-4 py-3.5 text-base font-medium text-text transition-colors hover:bg-secondary/40 hover:text-primary"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-5 border-t border-secondary/40 pt-5">
                <Button
                  href="#contact"
                  className="w-full"
                  onClick={closeMenu}
                >
                  {data.cta_text || 'Book Consultation'}
                </Button>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}