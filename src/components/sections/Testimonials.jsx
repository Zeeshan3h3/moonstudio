import SectionTag from '../ui/SectionTag';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
    return (
        <section className="bg-dark-sec py-28 overflow-hidden relative">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12 mb-16 text-center">
                <SectionTag>Stories</SectionTag>
                <h2 className="font-display text-4xl md:text-5xl text-cream">Words From Our Beloved Families</h2>
            </div>

            <div className="relative w-full flex overflow-hidden group">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-max whitespace-nowrap">
                    {[...testimonials, ...testimonials].map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-dark-card border border-gray-light rounded-2xl p-8 w-[320px] md:w-[380px] flex-shrink-0 mx-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-gold transition-colors duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.898 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="font-display text-6xl text-gold/25 leading-none -mt-4">"</span>
                            </div>

                            <p className="font-ui text-gray-soft text-lg leading-relaxed italic mb-8 whitespace-normal">
                                {review.text}
                            </p>

                            <div className="w-8 h-px bg-gold/50 mb-4" />

                            <p className="font-display text-cream text-lg">{review.name}</p>
                            <p className="font-ui text-gold text-[10px] tracking-widest uppercase mt-1">{review.event}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
