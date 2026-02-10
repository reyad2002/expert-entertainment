'use client'

import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const events = [
  {
    id: 1,
    title: 'Summer Night Gala',
    date: 'Mar 15, 2026',
    time: '8:00 PM',
    venue: 'Grand Ballroom, Cairo',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
  },
  {
    id: 2,
    title: 'Luxury Wedding Showcase',
    date: 'Apr 22, 2026',
    time: '6:00 PM',
    venue: 'Nile Ritz-Carlton',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
  },
  {
    id: 3,
    title: 'Festival of Lights',
    date: 'May 10, 2026',
    time: '7:30 PM',
    venue: 'Al-Azhar Park',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80',
  },
]

export function Events() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="events" className="py-24 px-4 bg-luxury-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            Save the date
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Upcoming events
          </h2>
          <p className="text-lg text-luxury-cream/70 max-w-xl mx-auto">
            Join us at our next festivals, galas, and exclusive celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`group border border-luxury-gold/10 hover:border-luxury-gold/30 bg-luxury-black/40 overflow-hidden transition-all duration-500 ${
                visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'forwards' }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-luxury-gold text-sm">
                  <Calendar className="w-4 h-4 shrink-0" strokeWidth={1.25} />
                  <span>{event.date}</span>
                  <span className="text-luxury-cream/60">·</span>
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-serif text-luxury-cream group-hover:text-luxury-gold transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-luxury-cream/70 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 text-luxury-gold/80" strokeWidth={1.25} />
                  <span>{event.venue}</span>
                </div>
                <Button
                  variant="ghost"
                  className="mt-2 p-0 h-auto text-luxury-gold hover:text-luxury-gold-light hover:bg-transparent font-medium tracking-wider uppercase text-sm group/btn"
                  asChild
                >
                  <a href="#contact" className="inline-flex items-center gap-2">
                    Get tickets
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border border-luxury-gold/60 text-luxury-cream hover:bg-luxury-gold/10 hover:border-luxury-gold rounded-none px-8 py-6 font-medium tracking-[0.2em] uppercase transition-all duration-300"
          >
            <a href="#contact">View all events & inquiries</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
