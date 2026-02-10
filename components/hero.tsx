'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="min-h-screen bg-luxury-black flex items-center justify-center px-4 relative overflow-hidden pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-charcoal/50 to-luxury-black pointer-events-none" />
      {/* Background image - elegant photography vibe */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-luxury-black/60" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p
          className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Photography Agency
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-luxury-cream tracking-wide mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          We capture
          <br />
          <span className="text-luxury-gold font-normal">your story</span>
        </h1>
        <p
          className="text-lg md:text-xl text-luxury-cream/80 max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          Luxury photography for weddings, editorial, and brands. Timeless imagery crafted with precision and artistry.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          <Button
            size="lg"
            asChild
            className="bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light font-medium tracking-[0.2em] uppercase rounded-none px-8 py-6 transition-all duration-300"
          >
            <a href="#gallery">View Portfolio</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border border-luxury-gold/60 text-luxury-cream hover:bg-luxury-gold/10 hover:border-luxury-gold rounded-none px-8 py-6 font-medium tracking-[0.2em] uppercase transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-luxury-gold/50 to-transparent animate-float" />
    </section>
  )
}
