import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTag from '../ui/SectionTag';

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <section id="about" className="py-28 bg-dark-sec relative" style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/40 rounded-full" />
                        <img
                            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Moon City Studio Gardens"
                            className="w-full h-full object-cover rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                            className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md border border-gray-light p-6 rounded-2xl z-20 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                        >
                            <h3 className="font-display text-4xl text-gold mb-1">7 Bighas</h3>
                            <p className="font-ui text-xs tracking-widest text-gray-soft uppercase">Sprawling Campus</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Text */}
                    <motion.div
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <SectionTag>Our Story</SectionTag>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            className="font-display text-4xl md:text-5xl text-cream leading-tight mb-8"
                        >
                            A Complete Canvas For Your Biggest Dreams
                        </motion.h2>

                        <div ref={ref} className="mb-8">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: inView ? '80px' : '0%' }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="h-px bg-gold"
                            />
                        </div>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="font-ui text-gray-soft leading-relaxed mb-8 text-base lg:text-lg font-light"
                        >
                            Welcome to Moon City Studio — a sprawling 7-bigha sanctuary where every celebration is elevated into a cinematic masterpiece. Nestled in the heart of South Kolkata, our magnificent destination hosts dreams of every scale and style. From four grand community halls and three pristine outdoor lawns to dedicated shooting floors and picturesque artificial scenic hills — every corner of Moon City Studio is designed to frame your perfect moment.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            {['Lush Lawns', 'AC Banquet', 'Central Location'].map((feature, i) => (
                                <span key={i} className="border border-gray-light text-gold text-xs font-ui font-medium tracking-wider px-4 py-2 rounded-full cursor-default hover:border-gold hover:bg-gold-pale transition-colors">
                                    {feature}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="text-gray-soft font-ui text-sm border-l-2 border-gold pl-4 py-1"
                        >
                            📍 6 Paschim Putiyary, Kolkata 700104 <br /> 📞 6291584884
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
