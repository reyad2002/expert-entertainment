'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-luxury-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Crafting timeless visuals for discerning clients
          </h2>
          <p className="text-luxury-cream/80 text-lg leading-relaxed">
            LUMIÈRE is a luxury photography agency based in Cairo. We specialize in wedding photography, editorial shoots, and brand campaigns. Every frame is composed with intention and produced to the highest standard.
          </p>
          <p className="text-luxury-cream/70 leading-relaxed">
            Our team combines technical excellence with a refined aesthetic to deliver imagery that stands the test of time—whether for your wedding album, lookbook, or next campaign.
          </p>
          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <p className="text-3xl font-serif text-luxury-gold">500+</p>
              <p className="text-sm text-luxury-cream/60 uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-luxury-gold">8+</p>
              <p className="text-sm text-luxury-cream/60 uppercase tracking-wider">Years</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-luxury-gold">100%</p>
              <p className="text-sm text-luxury-cream/60 uppercase tracking-wider">Dedication</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
              alt="Photographer at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-luxury-gold/30 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
