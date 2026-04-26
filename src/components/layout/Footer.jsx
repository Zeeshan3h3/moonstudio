import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative bg-dark border-t border-gold/15 pt-20 pb-6 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(201,168,76,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

            {/* Shooting stars */}
            <div className="absolute top-10 left-[-100px] h-px w-16 bg-gold/60 animate-star-shoot" style={{ animationDelay: '0s' }} />
            <div className="absolute top-20 left-[-100px] h-px w-16 bg-gold/60 animate-star-shoot" style={{ animationDelay: '4s' }} />
            <div className="absolute top-5 left-[-100px] h-px w-16 bg-gold/60 animate-star-shoot" style={{ animationDelay: '8s' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Col 1 */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <svg className="w-8 h-8 text-gold" viewBox="0 0 80 80" fill="none">
                                <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                                <path d="M55 20 A28 28 0 1 0 55 60 A20 20 0 1 1 55 20Z" fill="currentColor" />
                            </svg>
                            <h2 className="font-display text-2xl text-cream">Moon City Studio</h2>
                        </div>
                        <p className="font-ui text-sm text-cream/60 leading-relaxed mb-6">
                            South Kolkata's most sought-after 7-bigha wedding destination. Where luxury meets legacy, and celebrations turn into cinematic memories.
                        </p>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h3 className="font-ui text-xs tracking-widest uppercase text-gold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Venues', 'Gallery', 'Events', 'Amenities', 'Contact'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="font-ui text-sm text-cream/60 hover:text-gold hover:pl-2 transition-all">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h3 className="font-ui text-xs tracking-widest uppercase text-gold mb-6">Our Spaces</h3>
                        <ul className="space-y-4">
                            {['Event Lawns', 'Banquet Halls', 'Scenic Hills', 'Decorated Gardens', 'Wedding Mandap'].map(space => (
                                <li key={space}>
                                    <a href="#venues" className="font-ui text-sm text-cream/60 hover:text-gold hover:pl-2 transition-all">
                                        {space}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h3 className="font-ui text-xs tracking-widest uppercase text-gold mb-6">Contact Us</h3>
                        <ul className="space-y-4 font-ui text-sm text-cream/60">
                            <li className="flex items-center gap-3"><span className="text-gold">📞</span> 6291584884</li>
                            <li className="flex items-center gap-3"><span className="text-gold">📞</span> 9903348907</li>
                            <li className="flex items-center gap-3"><span className="text-gold">✉️</span> nilanjanagroup.mooncity@gmail.com</li>
                            <li className="flex items-start gap-3"><span className="text-gold">📍</span> 6 Paschim Putiyary,<br />Kolkata 700104</li>
                        </ul>
                        <div className="flex items-center gap-4 mt-8">
                            {['Facebook', 'Instagram', 'WhatsApp'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] transition-all">
                                    <span className="sr-only">{social}</span>
                                    {/* Mock Icon */}
                                    <div className="w-4 h-4 bg-current" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-ui text-xs text-cream/40">© 2025 Moon City Studio · Nilanjana Group</p>
                    <p className="font-ui text-xs text-cream/40">Designed with <span className="text-gold">♥</span> in Kolkata</p>
                </div>

            </div>
        </footer>
    );
}
