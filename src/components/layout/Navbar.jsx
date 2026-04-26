import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Venues', href: '#venues' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Brochure (PDF)', href: '/assets/MOONCITY%20STUDIO%20%20%26%20BANQUETS...pdf', external: true },
        { name: 'Events', href: '#events' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-[5000] px-6 md:px-12 transition-all duration-500 ease-in-out ${scrolled ? 'bg-dark/95 backdrop-blur-xl border-b border-gold/20 py-4 shadow-sm' : 'bg-dark/70 backdrop-blur-xl border-b border-white/20 py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <svg className="w-8 h-8 text-gold" viewBox="0 0 80 80" fill="none">
                            <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                            <path d="M55 20 A28 28 0 1 0 55 60 A20 20 0 1 1 55 20Z" fill="currentColor" />
                        </svg>
                        <div>
                            <h1 className="font-display text-xl leading-none text-cream">Moon City Studio</h1>
                            <p className="font-ui text-[9px] tracking-[0.2em] text-gold uppercase mt-1">Kolkata · Est. 2010</p>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="group relative font-ui font-light text-xs tracking-[0.18em] uppercase text-cream/80 hover:text-gold transition-colors"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <a href="#contact" className="hidden lg:block relative overflow-hidden px-6 py-2.5 rounded-full border border-gold font-ui text-xs tracking-widest uppercase text-gold hover:bg-gold hover:text-dark transition-all duration-300 transform hover:scale-105">
                        <span className="uppercase text-[10px]">📞 Book Your Date &rarr;</span>
                    </a>

                    <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[5010]">
                        <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} className="w-6 h-px bg-gold" />
                        <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="w-6 h-px bg-gold" />
                        <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} className="w-6 h-px bg-gold" />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-dark/98 backdrop-blur-2xl z-[5005] flex flex-col items-center justify-center lg:hidden"
                    >
                        {/* Cut / Close Button */}
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-gray-light text-cream hover:text-gold hover:border-gold transition-colors z-[5010]"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <motion.div variants={{ visible: { transition: { staggerChildren: 0.08 } } }} initial="hidden" animate="visible" className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                                    <a
                                        href={link.href}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        onClick={() => !link.external && setMenuOpen(false)}
                                        className="font-display text-4xl text-cream hover:text-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="mt-8">
                                <a href="#contact" onClick={() => setMenuOpen(false)} className="px-8 py-4 bg-gold rounded-full font-ui text-xs tracking-widest text-dark">
                                    BOOK YOUR DATE
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
