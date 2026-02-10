'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 bg-luxury-charcoal text-luxury-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Contact
          </h2>
          <p className="text-lg text-luxury-cream/70 max-w-xl mx-auto">
            Tell us about your project. We’d love to create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="flex items-start gap-4 p-6 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors">
            <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-luxury-gold" strokeWidth={1.25} />
            </div>
            <div>
              <h3 className="font-medium text-luxury-gold tracking-wider text-sm uppercase mb-1">Location</h3>
              <p className="text-luxury-cream">Cairo, Egypt</p>
              <p className="text-luxury-cream/60 text-sm mt-1">Available for travel worldwide</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors">
            <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-luxury-gold" strokeWidth={1.25} />
            </div>
            <div>
              <h3 className="font-medium text-luxury-gold tracking-wider text-sm uppercase mb-1">Phone</h3>
              <p className="text-luxury-cream">+20 (2) 123-4567</p>
              <p className="text-luxury-cream/60 text-sm mt-1">Mon–Sat, 9am–6pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 border border-luxury-gold/10 hover:border-luxury-gold/30 transition-colors">
            <div className="w-12 h-12 border border-luxury-gold/40 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-luxury-gold" strokeWidth={1.25} />
            </div>
            <div>
              <h3 className="font-medium text-luxury-gold tracking-wider text-sm uppercase mb-1">Email</h3>
              <p className="text-luxury-cream">hello@lumiere.studio</p>
              <p className="text-luxury-cream/60 text-sm mt-1">We reply within 24 hours</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-7xl mx-auto space-y-6 p-8 md:p-10 border border-luxury-gold/10 bg-luxury-black/40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-3 bg-transparent text-luxury-cream placeholder-luxury-cream/40 border border-luxury-gold/20 focus:border-luxury-gold focus:outline-none transition font-light"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-3 bg-transparent text-luxury-cream placeholder-luxury-cream/40 border border-luxury-gold/20 focus:border-luxury-gold focus:outline-none transition font-light"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-4 py-3 bg-transparent text-luxury-cream placeholder-luxury-cream/40 border border-luxury-gold/20 focus:border-luxury-gold focus:outline-none transition font-light"
            />
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="px-4 py-3 bg-transparent text-luxury-cream border border-luxury-gold/20 focus:border-luxury-gold focus:outline-none transition font-light"
              required
            >
              <option value="">Service</option>
              <option value="Wedding">Wedding</option>
              <option value="Portrait">Portrait & Editorial</option>
              <option value="Commercial">Commercial & Brand</option>
              <option value="Event">Events</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 bg-transparent text-luxury-cream placeholder-luxury-cream/40 border border-luxury-gold/20 focus:border-luxury-gold focus:outline-none transition resize-none font-light"
            required
          />

          <Button
            type="submit"
            className="w-full bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light font-medium tracking-[0.2em] uppercase rounded-none py-6 transition-colors"
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}
