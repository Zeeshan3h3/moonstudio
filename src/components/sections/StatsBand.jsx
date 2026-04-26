import { motion } from 'framer-motion';
import useCounter from '../../hooks/useCounter';

const StatItem = ({ target, suffix, label, delay }) => {
    const { ref, count } = useCounter(target, 2500);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className="flex flex-col items-center relative text-center"
        >
            <div className="w-1.5 h-1.5 bg-gold rounded-full mb-4 opacity-50" />
            <p className="font-display text-5xl md:text-7xl text-gold font-bold mb-2 text-shadow-gold">
                {count}{suffix}
            </p>
            <p className="font-ui text-[10px] md:text-xs tracking-[0.3em] uppercase text-gray-soft">
                {label}
            </p>
        </motion.div>
    );
};

export default function StatsBand() {
    const stats = [
        { target: 7, suffix: '', label: 'Bigha Land' },
        { target: 4, suffix: '', label: 'Banquet Halls' },
        { target: 3, suffix: '', label: 'Open Lawns' },
        { target: 3, suffix: '', label: 'Shooting Floors' },
        { target: 500, suffix: '+', label: 'Happy Couples' },
        { target: 15, suffix: '+', label: 'Years of Legacy' }
    ];

    return (
        <section className="w-full bg-dark-gradient border-y border-gray-light relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-px bg-gold rotate-45 transform origin-top-left opacity-30" />
            <div className="absolute bottom-0 right-0 w-16 h-px bg-gold rotate-45 transform origin-bottom-right opacity-30" />

            <div className="max-w-[90rem] mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16 relative">

                    {/* Vertical dividers (desktop only) */}
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[16.66%] w-px bg-gold/10" />
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[33.33%] w-px bg-gold/10" />
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[50%] w-px bg-gold/10" />
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[66.66%] w-px bg-gold/10" />
                    <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[83.33%] w-px bg-gold/10" />

                    {/* Grid dividers (mobile/tablet) */}
                    <div className="block lg:hidden absolute top-1/2 left-0 right-0 h-px bg-gold/10 md:top-[33.33%] md:h-px" />
                    <div className="hidden md:block lg:hidden absolute top-[66.66%] left-0 right-0 h-px bg-gold/10" />

                    {stats.map((stat, i) => (
                        <StatItem key={i} {...stat} delay={i * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
}
