import { useState } from 'react';
import toast from 'react-hot-toast';
import SectionTag from '../ui/SectionTag';

export default function ContactSection() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success("Thank you! We'll contact you within 24 hours. 🌙", {
                style: {
                    background: '#ffffff',
                    color: '#222222',
                    border: '1px solid rgba(184,138,68,0.3)',
                },
            });
            e.target.reset();
        }, 1500);
    };

    const inputClass = "w-full bg-dark-card border border-gray-light rounded-xl px-5 py-4 text-cream font-ui text-sm focus:border-gold outline-none focus:ring-0 placeholder:text-gray-soft transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-gold/50";

    return (
        <section id="contact" className="bg-dark py-28 hover:bg-dark transition-colors duration-1000">
            <div className="max-w-[90rem] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column - Form */}
                    <div>
                        <SectionTag>Reserve Your Date</SectionTag>
                        <h2 className="font-display text-4xl md:text-5xl text-cream mb-6">Let's Create Your Dream Event</h2>
                        <div className="w-16 h-px bg-gold mb-10" />

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Full Name" required className={inputClass} />
                                <input type="tel" placeholder="Phone Number" required className={inputClass} />
                            </div>
                            <input type="email" placeholder="Email Address" required className={inputClass} />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <select required className={`${inputClass} appearance-none cursor-pointer`} defaultValue="">
                                    <option value="" disabled hidden>Event Type</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Reception">Reception</option>
                                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Social Gathering">Social Gathering</option>
                                    <option value="Film/Ad Shoot">Film/Ad Shoot</option>
                                </select>
                                <input type="date" required className={`${inputClass} cursor-pointer`} />
                            </div>

                            <input type="number" placeholder="Estimated Guests" min="10" className={inputClass} />
                            <textarea placeholder="Message / Special Requests" rows="4" className={`${inputClass} resize-none`} />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-white font-ui font-medium tracking-[1px] uppercase text-[13px] mt-4 transition-all duration-300 disabled:opacity-80 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(197,160,40,0.5)] transform hover:-translate-y-1"
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                ) : (
                                    "Send Enquiry →"
                                )}
                            </button>
                        </form>

                        {/* Quick Contact Inline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 pt-8 border-t border-gray-light">
                            <a href="tel:+916291584884" className="flex items-center gap-3 text-gray-soft hover:text-gold transition-colors font-ui text-sm">
                                <span className="text-gold">📞</span> 6291584884 / 9903348907
                            </a>
                            <a href="mailto:nilanjanagroup.mooncity@gmail.com" className="flex items-center gap-3 text-gray-soft hover:text-gold transition-colors font-ui text-sm">
                                <span className="text-gold">✉️</span> nilanjanagroup.mooncity@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div>
                        <iframe
                            src="https://maps.google.com/maps?q=6+Paschim+Putiyary+Kolkata+700104&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-[300px] md:h-[400px] rounded-2xl border border-gray-light shadow-[0_4px_20px_rgba(0,0,0,0.05)] grayscale-[30%] mb-8"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                        />

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <div className="bg-dark-card border border-gray-light rounded-xl px-5 py-3 flex-1 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <span className="text-gold text-xl">🚇</span>
                                <p className="font-ui text-sm text-gray-soft">Tollygunge Metro · 15 min</p>
                            </div>
                            <div className="bg-dark-card border border-gray-light rounded-xl px-5 py-3 flex-1 flex items-center gap-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                <span className="text-gold text-xl">🚇</span>
                                <p className="font-ui text-sm text-gray-soft">Joka Metro · 10 min</p>
                            </div>
                        </div>

                        <div className="bg-dark-sec border border-gray-light rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
                            <p className="font-ui text-sm text-cream mb-1">
                                <span className="text-gold font-bold">Moon City Studio</span><br />
                                Opposite Carmel School, South Kolkata
                            </p>
                            <p className="font-ui text-xs text-gray-soft mt-2">
                                Open for visits: Mon–Sat, 10 AM – 7 PM
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
