import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/916291584884?text=Hi!%20I%27m%20interested%20in%20booking%20Moon%20City%20Studio"
            target="_blank"
            rel="noreferrer"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, type: 'spring', stiffness: 200, damping: 20 }}
            className="fixed bottom-6 right-6 z-[8000] group"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-40" />
            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.385 0 0 5.386 0 12.031c0 2.646.852 5.127 2.376 7.202L.811 24l5.011-1.503A11.967 11.967 0 0 0 12.031 24c6.645 0 12.031-5.386 12.031-12.031C24.062 5.386 18.676 0 12.031 0zM12 22a9.962 9.962 0 0 1-5.074-1.37l-.364-.216-3.766 1.13 1.146-3.668-.237-.377A9.972 9.972 0 0 1 2.031 12c0-5.513 4.488-10 10.001-10 5.514 0 10 4.487 10 10 0 5.512-4.486 10-10 10zm5.421-7.408c-.297-.15-1.758-.87-2.032-.97-.272-.1-.472-.15-.67.15-.2.302-.767.97-.94 1.171-.173.201-.346.226-.643.076-.297-.15-1.254-.46-2.39-1.29-1.3-1.026-1.597-2.203-1.794-2.505-.198-.302-.02-.465.132-.613.136-.135.297-.302.446-.452.15-.152.198-.252.298-.452.1-.202.05-.377-.025-.526-.075-.15-.67-1.615-.92-2.215-.24-.582-.486-.503-.67-.512-.172-.008-.372-.01-.572-.01s-.522.075-.795.376c-.272.303-1.042 1.002-1.042 2.453s1.066 2.85 1.215 3.05c.15.202 2.08 3.176 5.042 4.444 2.96 1.267 2.96.845 3.504.795.545-.05 1.758-.72 2.006-1.411.248-.693.248-1.29.173-1.412-.074-.122-.272-.2-.57-.352z" />
                </svg>
            </div>
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black font-ui text-xs px-3 py-1.5 rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                Chat with us on WhatsApp
            </div>
        </motion.a>
    );
}
