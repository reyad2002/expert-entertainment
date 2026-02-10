'use client'

import { Camera, Heart, Briefcase, Sparkles, Video, Image } from 'lucide-react'
import { useEffect, useState } from 'react'

const services = [
  {
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Full-day coverage and albums that capture every emotion and detail of your wedding.',
  },
  {
    icon: Camera,
    title: 'Portrait & Editorial',
    description: 'Studio and location portraits for individuals, families, and editorial campaigns.',
  },
  {
    icon: Briefcase,
    title: 'Commercial & Brand',
    description: 'Product shots, lookbooks, and brand imagery that elevate your business.',
  },
  {
    icon: Sparkles,
    title: 'Events & Galas',
    description: 'Elegant documentation of corporate events, launches, and private celebrations.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Cinematic films and highlight reels to complement our photography packages.',
  },
  {
    icon: Image,
    title: 'Print & Album Design',
    description: 'Fine-art prints and custom album design for timeless keepsakes.',
  },
]

export function Services() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="services" className="py-24 px-4 bg-luxury-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            What we offer
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Services
          </h2>
          <p className="text-lg text-luxury-cream/70 max-w-xl mx-auto">
            End-to-end photography and videography tailored to your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-8 border border-luxury-gold/10 hover:border-luxury-gold/30 bg-luxury-black/40 hover:bg-luxury-black/60 transition-all duration-500 ${
                  visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 border border-luxury-gold/40 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-luxury-gold" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-serif text-luxury-cream mb-3">{service.title}</h3>
                <p className="text-luxury-cream/70 leading-relaxed text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
