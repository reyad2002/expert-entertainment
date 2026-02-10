'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Scroll state: add background when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track viewport for responsive behavior (lg = 1024px)
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // When resizing to desktop, close mobile menu and restore scroll
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
      document.body.style.overflow = ''
    }
  }, [isMobile])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, isMobile])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-luxury-black border-b border-luxury-gold/20 lg:bg-transparent lg:border-transparent ${
        scrolled ? 'lg:bg-luxury-black/95 lg:backdrop-blur-md lg:border-b lg:border-luxury-gold/20 lg:shadow-lg' : ''
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-24">
          {/* Logo - responsive size, no shrink */}
          <a
            href="#"
            className="text-lg sm:text-xl md:text-2xl font-serif font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-luxury-cream hover:text-luxury-gold transition-colors duration-300 flex-shrink-0 min-w-0"
          >
            EXPERT
          </a>

          {/* Desktop Navigation (lg and up) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs xl:text-sm font-medium tracking-[0.15em] uppercase text-luxury-cream/90 hover:text-luxury-gold transition-colors duration-300 py-2 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-luxury-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile/Tablet Menu Button - large touch target */}
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="lg:hidden p-3 -mr-2 text-luxury-cream hover:text-luxury-gold active:text-luxury-gold transition-colors touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
            ) : (
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet overlay - positioned below header */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`lg:hidden fixed left-0 right-0 z-40 transition-all duration-300 ease-out ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
        style={{
          top: 'calc(4rem + env(safe-area-inset-top, 0px))',
          height: 'calc(100vh - 4rem - env(safe-area-inset-top, 0px))',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <div
          className="absolute inset-0 bg-luxury-black/98 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
          aria-hidden
        />
        <nav className="relative flex flex-col items-center justify-center min-h-full gap-1 py-8 px-4 overflow-y-auto">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="w-full max-w-xs text-center py-4 sm:py-5 text-xl sm:text-2xl font-serif font-medium tracking-[0.2em] uppercase text-luxury-cream hover:text-luxury-gold active:text-luxury-gold transition-colors duration-300 rounded-sm touch-manipulation min-h-[48px] flex items-center justify-center"
              style={{
                opacity: 0,
                animation: isOpen ? 'fade-in-up 0.4s ease-out forwards' : 'none',
                animationDelay: isOpen ? `${i * 60}ms` : '0ms',
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
