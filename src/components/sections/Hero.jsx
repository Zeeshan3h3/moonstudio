import { motion } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import GoldButton from '../ui/GoldButton';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-dark">
            <img
                src="/assets/img29.jpg"
                alt="Moon City Studio"
                className="absolute inset-0 w-full h-full object-cover motion-safe:animate-[heroZoom_20s_ease_infinite_alternate]"
                style={{
                    filter: "brightness(0.95) saturate(1.1) contrast(1.0)",
                    transform: "scale(1.05)"
                }}
            />

            <div className="absolute inset-0 bg-hero-overlay" />

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 pt-20">

                <SectionTag>South Kolkata's Premier Wedding Destination</SectionTag>

                <h1 className="flex flex-col mb-6 mt-4">
                    <motion.span
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-6xl md:text-8xl xl:text-9xl font-bold text-white block leading-[1.1] drop-shadow-lg"
                    >
                        Where Dreams
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display italic text-gold text-7xl md:text-9xl xl:text-[10rem] block -mt-4 mb-2 drop-shadow-xl"
                    >
                        Become
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="font-display text-6xl md:text-8xl xl:text-9xl text-white block leading-[1.1] drop-shadow-lg"
                    >
                        Celebrations
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
                    className="font-ui font-medium text-white/90 tracking-widest text-sm md:text-base max-w-2xl mx-auto mb-10 drop-shadow-md"
                >
                    7 Bigha of Pure Magic — Weddings · Receptions · Pre-Shoots · Birthdays
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 mt-12 items-center justify-center overflow-visible py-4"
                >
                    <GoldButton href="#venues" className="z-10 relative">Explore Venues &rarr;</GoldButton>
                    <GoldButton href="#gallery" variant="outlined" className="!bg-transparent backdrop-blur-md !border-white/50 !text-white hover:!bg-white hover:!text-cream z-10 relative">View Gallery</GoldButton>
                </motion.div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <p className="font-ui text-[10px] tracking-widest text-gold mb-4 rotate-90 origin-bottom">SCROLL</p>
                    <div className="w-px h-10 bg-gold animate-bounce-slow" />
                </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute bottom-24 w-full px-6 md:px-12 hidden md:flex justify-between items-center pointer-events-none">
                {[
                    { number: '7', label: 'Bigha Area' },
                    { number: '4', label: 'Grand Halls' },
                    { number: '3', label: 'Open Lawns' },
                    { number: '3', label: 'Studios' },
                ].map((badge, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + (idx * 0.2), duration: 0.8 }}
                        className="bg-white/90 backdrop-blur-md border border-gray-light shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-xl px-5 py-3 animate-float"
                        style={{ animationDelay: `${idx * 1.5}s` }}
                    >
                        <p className="font-display text-2xl text-gold mb-1">{badge.number}</p>
                        <p className="font-ui text-[10px] uppercase font-medium tracking-[1px] text-gray-soft">{badge.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
