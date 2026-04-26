import { motion } from 'framer-motion';

export default function SectionTag({ children }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-ui text-xs tracking-[0.35em] uppercase text-gold mb-4"
        >
            ✦ {children} ✦
        </motion.p>
    );
}
