import { motion } from 'framer-motion';

export default function GoldButton({
    variant = 'filled',
    children,
    onClick,
    href,
    className = '',
    type = 'button'
}) {
    const baseClasses = `relative overflow-hidden px-8 py-3 rounded-xl font-ui text-[13px] font-medium tracking-[1px] uppercase transition-all duration-300 transform hover:-translate-y-1 group inline-flex items-center justify-center ${className}`;
    const variants = {
        filled: `bg-gold-gradient text-cream shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(197,160,40,0.5)] hover:bg-gold-gradient-hover`,
        outlined: `bg-white border border-gray-light text-cream hover:border-gold hover:text-gold shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.15)]`
    };

    const Element = href ? motion.a : motion.button;
    const props = href ? { href } : { onClick, type };

    return (
        <Element
            {...props}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseClasses} ${variants[variant]}`}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {variant === 'filled' && (
                <div className="absolute inset-0 bg-shimmer-gold bg-[length:200%_100%] animate-shimmer opacity-0 hover:opacity-100 transition-opacity" />
            )}
        </Element>
    );
}
