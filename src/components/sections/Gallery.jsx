import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import GoldButton from '../ui/GoldButton';
import { gallery } from '../../data/gallery';

export default function Gallery() {
    const [filter, setFilter] = useState('all');
    const [visibleCount, setVisibleCount] = useState(12);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'lawns', label: 'Lawns' },
        { id: 'halls', label: 'Halls' },
        { id: 'hills', label: 'Hills' },
        { id: 'gardens', label: 'Gardens' },
        { id: 'mandap', label: 'Mandap' }
    ];

    const filteredItems = filter === 'all'
        ? gallery
        : gallery.filter(item => item.category === filter);

    const visibleItems = filteredItems.slice(0, visibleCount);

    // Lightbox handlers
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = '';
    };

    const nextImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((currentIndex + 1) % filteredItems.length);
    };

    const prevImage = (e) => {
        e?.stopPropagation();
        setCurrentIndex((currentIndex - 1 + filteredItems.length) % filteredItems.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentIndex, filteredItems.length]);

    return (
        <section id="gallery" className="bg-dark-sec py-28 relative">
            <div className="max-w-[90rem] mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionTag>Gallery</SectionTag>
                    <h2 className="font-display text-4xl md:text-5xl text-cream mb-10">Moments Frozen In Gold</h2>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {filters.map(f => (
                            <button
                                key={f.id}
                                onClick={() => { setFilter(f.id); setVisibleCount(12); }}
                                className={`font-ui text-[10px] sm:text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${filter === f.id ? 'bg-gold text-white' : 'border border-gray-light text-gray-soft hover:border-gold hover:text-gold'
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid (CSS Columns approximation) */}
                <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    <AnimatePresence>
                        {visibleItems.map((item, idx) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                key={item.id}
                                onClick={() => openLightbox(idx)}
                                className="relative break-inside-avoid overflow-hidden rounded-xl cursor-pointer group"
                                data-cursor="hover"
                            >
                                <img src={item.src} alt={item.venue} className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110" loading="lazy" />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-end p-4">
                                    <div>
                                        <p className="font-display text-lg text-cream leading-tight">{item.venue}</p>
                                        <p className="font-ui text-[10px] tracking-widest uppercase text-gold mt-1">{item.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleCount < filteredItems.length && (
                    <div className="mt-16 flex justify-center">
                        <GoldButton variant="outlined" onClick={() => setVisibleCount(prev => prev + 8)}>
                            Load More
                        </GoldButton>
                    </div>
                )}
            </div>

            {/* Lightbox Portal */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-[9000] bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                    >
                        <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-gray-light text-gold hover:bg-gold-pale transition-colors z-10 hover:border-gold">✕</button>
                        <button onClick={prevImage} className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-light text-gold hover:bg-gold-pale transition-colors z-10 hover:border-gold">&larr;</button>
                        <button onClick={nextImage} className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-light text-gold hover:bg-gold-pale transition-colors z-10 hover:border-gold">&rarr;</button>

                        <img
                            src={filteredItems[currentIndex].src}
                            alt={filteredItems[currentIndex].alt}
                            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.1)]"
                        />
                        <div className="absolute inset-0 border border-gray-light rounded-lg pointer-events-none opacity-50" />

                        <p className="absolute bottom-6 text-gray-soft font-ui text-sm tracking-widest uppercase bg-white/90 px-6 py-2 rounded-full shadow-sm">{filteredItems[currentIndex].venue}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
