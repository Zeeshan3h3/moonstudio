import { motion } from 'framer-motion';
import SectionTag from '../ui/SectionTag';

export default function WhyChooseUs() {
    const cards = [
        {
            num: '01',
            title: 'Scale & Space',
            img: '/assets/img29.jpg',
            desc: 'Our 7-bigha expanse means no event is too grand and no dream too large. Indoor, outdoor, scenic — all under one magnificent roof.'
        },
        {
            num: '02',
            title: 'Versatile Beauty',
            img: '/assets/img41.jpg',
            desc: 'Five distinct settings from lush lawns to cinematic hillscapes ensure your event has a backdrop as unique as your story.'
        },
        {
            num: '03',
            title: 'The Complete Package',
            img: '/assets/img32.jpg',
            desc: 'Guest rooms, makeup suites, parking, power backup, and shooting studios — everything choreographed for perfection.'
        }
    ];

    return (
        <section className="bg-dark py-28 overflow-hidden relative">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <SectionTag>Why Moon City</SectionTag>
                    <h2 className="font-display text-4xl md:text-5xl text-cream">An Experience Like No Other</h2>
                </div>

                <motion.div
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0"
                >
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
                            className="relative h-[440px] lg:h-[520px] min-w-[85vw] md:min-w-[350px] lg:min-w-0 w-full rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 border border-gray-light shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:border-gold hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500"
                            data-cursor="hover"
                        >
                            <img
                                src={card.img}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-card-overlay" />

                            <div className="absolute top-6 right-6 font-display text-5xl lg:text-5xl text-gold/40 font-bold mix-blend-multiply drop-shadow-sm">
                                {card.num}
                            </div>

                            <div className="absolute bottom-0 w-full p-8 flex flex-col justify-end h-full">
                                <div className="mt-auto">
                                    <h3 className="font-display text-3xl text-cream italic mb-3">{card.title}</h3>
                                    <div className="w-12 h-px bg-gold mb-4" />
                                    <p className="font-ui text-gray-soft text-sm lg:text-base mb-6 max-w-sm leading-relaxed">
                                        {card.desc}
                                    </p>
                                    <div className="font-ui text-gold text-[11px] font-medium tracking-[1px] uppercase border border-gray-light inline-flex items-center px-4 py-2 rounded-xl group-hover:border-gold group-hover:bg-gold-gradient group-hover:text-white transition-all duration-300">
                                        Discover More &rarr;
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
