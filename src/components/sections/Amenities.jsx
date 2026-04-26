import { motion } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import { amenities } from '../../data/amenities';

export default function Amenities() {
    return (
        <section id="amenities" className="bg-dark-sec py-28 relative overflow-hidden">
            {/* Decorative Text */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] text-black/[0.03] select-none pointer-events-none whitespace-nowrap z-0">
                LUXURY
            </h2>

            <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-16">
                    <SectionTag>Amenities</SectionTag>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">Everything You Need. Nothing Left Behind.</h2>
                </div>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {amenities.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                            className="bg-dark-card border border-gray-light rounded-xl p-6 text-center hover:border-gold hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] shadow-[0_4px_15px_rgba(0,0,0,0.04)] transition-all duration-300 group"
                        >
                            <div className="text-3xl mb-3 filter drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]">
                                {item.icon}
                            </div>
                            <h3 className="font-ui text-[10px] sm:text-xs tracking-widest uppercase text-gold mt-3">
                                {item.label}
                            </h3>
                            <p className="font-ui text-gray-soft text-xs sm:text-sm mt-2">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
