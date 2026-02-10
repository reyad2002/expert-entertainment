import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-cream/80 py-16 px-4 border-t border-luxury-gold/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <p className="text-xl font-serif font-medium tracking-[0.2em] text-luxury-cream">
              LUMIÈRE
            </p>
            <p className="text-sm text-luxury-cream/60 font-light max-w-xs">
              Luxury photography agency. Timeless imagery for weddings, editorial, and brands.
            </p>
          </div>

          <div>
            <h4 className="text-luxury-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">Menu</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#about" className="hover:text-luxury-gold transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-luxury-gold transition-colors">Portfolio</a></li>
              <li><a href="#services" className="hover:text-luxury-gold transition-colors">Services</a></li>
              <li><a href="#partners" className="hover:text-luxury-gold transition-colors">Partners</a></li>
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-light">
              <li>+20 (2) 123-4567</li>
              <li>hello@lumiere.studio</li>
              <li>Cairo, Egypt</li>
            </ul>
          </div>

          <div>
            <h4 className="text-luxury-gold text-xs font-medium tracking-[0.2em] uppercase mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.25} />
              </a>
              <a href="#" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.25} />
              </a>
              <a href="#" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} strokeWidth={1.25} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-gold/10 pt-8 text-center text-sm font-light text-luxury-cream/50">
          <p>© {new Date().getFullYear()} LUMIÈRE Photography Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
