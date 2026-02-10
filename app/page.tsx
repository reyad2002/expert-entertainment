import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Services } from '@/components/services'
import { Partners } from '@/components/partners'
import { Events } from '@/components/events'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="bg-luxury-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Partners />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
