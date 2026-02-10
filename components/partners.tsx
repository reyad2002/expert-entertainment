'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const partners = [
  { id: 1, name: 'Vogue', src: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=200&h=80&fit=crop' },
  { id: 2, name: 'Harper\'s Bazaar', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=80&fit=crop' },
  { id: 3, name: 'Four Seasons', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=80&fit=crop' },
  { id: 4, name: 'Fairmont', src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&h=80&fit=crop' },
  { id: 5, name: 'Sofitel', src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=200&h=80&fit=crop' },
  { id: 6, name: 'Marriott', src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&h=80&fit=crop' },
]

export function Partners() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="partners" className="py-24 px-4 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            Trusted by
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Partners & clients
          </h2>
          <p className="text-lg text-luxury-cream/70 max-w-xl mx-auto">
            We work with leading hotels, publications, and brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, i) => (
            <div
              key={partner.id}
              className={`flex items-center justify-center p-6 md:p-8 bg-luxury-charcoal border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 group ${
                visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative w-full h-12 md:h-14 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
