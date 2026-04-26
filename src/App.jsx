import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Cursor from './components/ui/Cursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/sections/FloatingWhatsApp'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import VenueShowcase from './components/sections/VenueShowcase'
import StatsBand from './components/sections/StatsBand'
import Gallery from './components/sections/Gallery'
import EventsWeHost from './components/sections/EventsWeHost'
import Amenities from './components/sections/Amenities'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import ContactSection from './components/sections/ContactSection'

function PageLoader() {
    return (
        <div className="fixed inset-0 bg-dark z-[99999] flex flex-col items-center justify-center gap-6">
            <div className="w-20 h-20 animate-pulse-gold">
                <svg viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="#c9a84c" strokeWidth="1.5" opacity="0.3" />
                    <path d="M55 20 A28 28 0 1 0 55 60 A20 20 0 1 1 55 20Z" fill="#c9a84c" />
                </svg>
            </div>
            <p className="font-ui text-xs tracking-[0.4em] text-gold uppercase animate-pulse">
                Moon City Studio
            </p>
            <div className="w-48 h-px bg-dark-card overflow-hidden rounded">
                <div className="h-full bg-gold-gradient animate-line-expand" />
            </div>
        </div>
    )
}

export default function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 2200)
        return () => clearTimeout(t)
    }, [])

    if (loading) return <PageLoader />

    return (
        <div className="bg-dark text-cream font-ui overflow-x-hidden relative">
            <Cursor />
            <Navbar />
            <main>
                <Hero />
                <About />
                <VenueShowcase />
                <StatsBand />
                <Gallery />
                <EventsWeHost />
                <Amenities />
                <WhyChooseUs />
                <Testimonials />
                <ContactSection />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <Toaster position="bottom-right" />
        </div>
    )
}
