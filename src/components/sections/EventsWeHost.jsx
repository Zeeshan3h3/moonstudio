import { motion } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import { events } from '../../data/events';

export default function EventsWeHost() {
    return (
        <section id="events" className="bg-dark py-28 relative">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <SectionTag>Events</SectionTag>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">From Intimate Moments To Grand Celebrations</h2>
                </div>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {events.map((event, idx) => (
                        <motion.div
                            key={idx}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ y: -8, boxShadow: '0 8px 30px rgba(0,0,0,0.08)' }}
                            className="bg-dark-card border border-gray-light rounded-2xl p-8 cursor-pointer relative overflow-hidden group transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-gold"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="text-4xl mb-6 filter drop-shadow-[0_0_8px_rgba(201,168,76,0.4)]">
                                {event.icon}
                            </div>
                            <h3 className="font-display text-xl text-cream mb-3">{event.title}</h3>
                            <p className="font-ui text-gray-soft text-base leading-relaxed font-light">
                                {event.desc}
                            </p>

                            <div className="mt-8 flex items-center text-gold font-ui tracking-widest text-xs uppercase opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                Explore Event <span className="ml-2">&rarr;</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
