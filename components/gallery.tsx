'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const galleryItems = [
  { id: 1, title: 'Bridal Portrait', category: 'Wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop' },
  { id: 2, title: 'Editorial Fashion', category: 'Editorial', src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=1000&fit=crop' },
  { id: 3, title: 'Wedding Day', category: 'Wedding', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop' },
  { id: 4, title: 'Brand Campaign', category: 'Commercial', src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=1000&fit=crop' },
  { id: 5, title: 'Rooftop Session', category: 'Portrait', src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1000&fit=crop' },
  { id: 6, title: 'Reception', category: 'Wedding', src: 'https://images.unsplash.com/photo-1519167758481-dc8743210e8d?w=800&h=1000&fit=crop' },
]

const categories = ['All', 'Wedding', 'Editorial', 'Commercial', 'Portrait']

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  const filtered =
    selectedCategory === 'All' || !selectedCategory
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="gallery" className="py-24 px-4 bg-luxury-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm font-medium">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-luxury-cream">
            Selected work
          </h2>
          <p className="text-lg text-luxury-cream/70 max-w-xl mx-auto">
            A glimpse into our latest projects and collaborations.
          </p>
        </div>

        <div className="flex gap-2 justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-luxury-gold text-luxury-black'
                  : 'text-luxury-cream/80 border border-luxury-cream/30 hover:border-luxury-gold hover:text-luxury-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden aspect-[3/4] border border-luxury-gold/10 hover:border-luxury-gold/30 transition-all duration-500 ${
                visible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'forwards' }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-luxury-cream font-serif text-xl">{item.title}</h3>
                <p className="text-luxury-gold text-sm tracking-wider uppercase">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
