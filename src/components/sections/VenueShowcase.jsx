import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTag from '../ui/SectionTag';
import GoldButton from '../ui/GoldButton';
import { venues } from '../../data/venues';

export default function VenueShowcase() {
    const [activeTab, setActiveTab] = useState(venues[0].id);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const activeVenue = venues.find(v => v.id === activeTab);

    const handleTabSwitch = (id) => {
        setActiveTab(id);
        setActiveImageIndex(0);
    };

    return (
        <section id="venues" className="bg-dark min-h-screen py-28 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionTag>Our Spaces</SectionTag>
                <h2 className="font-display text-4xl md:text-5xl text-cream mb-12">Every Corner Tells A Story</h2>

                {/* Tab Switcher */}
                <div className="flex overflow-x-auto no-scrollbar mb-16 border-b border-gray-light pb-1">
                    {venues.map((venue) => (
                        <button
                            key={venue.id}
                            onClick={() => handleTabSwitch(venue.id)}
                            className={`relative font-ui text-xs font-medium tracking-widest uppercase py-4 px-6 md:px-8 whitespace-nowrap transition-colors ${activeTab === venue.id ? 'text-gold' : 'text-gray-soft hover:text-cream'
                                }`}
                        >
                            {venue.label}
                            {activeTab === venue.id && (
                                <motion.div
                                    layoutId="venueUnderline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                                    style={{ marginBottom: '-1px' }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Active Venue Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                    >
                        {/* Left: Images */}
                        <div className="lg:col-span-7">
                            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden mb-4 group shadow-lg">
                                <motion.img
                                    key={activeImageIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={activeVenue.images[activeImageIndex]}
                                    alt={activeVenue.label}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                                {activeVenue.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImageIndex(idx)}
                                        className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${activeImageIndex === idx ? 'ring-2 ring-gold shadow-[0_0_10px_rgba(201,168,76,0.3)]' : 'opacity-60 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="self-start bg-gold/10 border border-gold/30 text-gold text-xs font-ui px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
                                {activeVenue.tag}
                            </div>

                            <h3 className="font-display text-4xl lg:text-5xl text-cream mb-4">{activeVenue.label}</h3>
                            <p className="font-ui text-sm text-gold tracking-widest uppercase mb-6">👥 {activeVenue.capacity}</p>

                            <p className="font-ui text-gray-soft leading-relaxed mb-10 text-base font-light">
                                {activeVenue.description}
                            </p>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-12">
                                {activeVenue.features.map((feature, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center p-4 bg-dark-card border border-gray-light rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                        <span className="text-gold text-2xl mb-2">{idx === 0 ? '👥' : idx === 1 ? '📏' : '✨'}</span>
                                        <span className="font-ui text-sm font-medium text-gray-soft text-center">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-8 border-t border-gray-light">
                                <GoldButton href="#contact" variant="outlined">
                                    Enquire About This Venue &rarr;
                                </GoldButton>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
