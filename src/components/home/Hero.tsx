import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Institutional Architecture"
          className="w-full h-full object-cover opacity-30 grayscale saturate-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center space-x-4 mb-8">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-institutional uppercase text-[10px] font-bold">
              Institutional Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-[1.05] mb-8">
            Systematic Intelligence. <br />
            <span className="italic font-normal text-gold-light">Durable Alpha.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#8a9ab5] font-light leading-relaxed mb-12 max-w-2xl">
            Stratavis Capital translates deep macroeconomic research into disciplined investment systems for the world’s most sophisticated institutional partners.
          </p>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <button className="btn-gold w-full sm:w-auto flex items-center justify-center space-x-2 group">
              <span>Our Approach</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center space-x-3 text-white tracking-widest uppercase text-[10px] font-bold">
              <span className="border-b border-gold/30 group-hover:border-gold transition-colors py-1">View Latest Insights</span>
              <ArrowRight size={16} className="text-gold group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-16 border-t border-gold/20"
        >
          <div>
            <div className="font-serif text-4xl text-gold mb-1">$42B+</div>
            <div className="text-[9px] tracking-institutional uppercase text-[#8a9ab5]">AUM Managed</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-gold mb-1">15+</div>
            <div className="text-[9px] tracking-institutional uppercase text-[#8a9ab5]">Years of Record</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-gold mb-1">24/7</div>
            <div className="text-[9px] tracking-institutional uppercase text-[#8a9ab5]">Systematic Coverage</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-gold mb-1">90+</div>
            <div className="text-[9px] tracking-institutional uppercase text-[#8a9ab5]">PhDs & Researchers</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 w-[1px] h-32 bg-gold/20 hidden lg:block" />
    </section>
  );
}
