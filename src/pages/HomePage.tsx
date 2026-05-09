import { motion } from 'motion/react';
import Hero from '../components/home/Hero.tsx';
import { ArrowRight, BookOpen, Layers, Target, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-navy">
      <Hero />

      {/* Philosophy Section */}
      <section className="section-padding flex flex-col lg:flex-row gap-20 items-center">
        <div className="flex-1">
          <div className="section-header-tag flex items-center space-x-3 mb-6">
            <span className="text-gold tracking-institutional uppercase text-[10px]">Strategic Foundation</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
            A Cause-and-Effect <br />
            <span className="italic text-gold-light">Understanding.</span>
          </h2>
          <p className="text-[#8a9ab5] leading-relaxed mb-10 text-lg">
            We believe that global markets are driven by timeless economic laws. By decoding these causal links through rigorous systematic research, we build portfolios that are resilient across all market cycles.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 bg-navy-mid institutional-border hover:border-gold/40">
              <Layers className="text-gold mb-8" size={32} />
              <h4 className="text-white text-lg mb-4">Systematic Edge</h4>
              <p className="text-sm text-[#8a9ab5] leading-relaxed">
                Removing emotional bias through data-driven execution and repeatable algorithms.
              </p>
            </div>
            <div className="p-10 bg-navy-mid institutional-border hover:border-gold/40">
              <Target className="text-gold mb-8" size={32} />
              <h4 className="text-white text-lg mb-4">Macro Depth</h4>
              <p className="text-sm text-[#8a9ab5] leading-relaxed">
                Analyzing the deep structural shifts in geopolitics, rates, and commerce.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
              alt="Research Detail"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/20" />
            
            {/* Callout box */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -left-10 bg-gold p-10 max-w-xs shadow-2xl hidden md:block"
            >
              <div className="text-navy text-xs uppercase tracking-[0.3em] font-bold mb-4">Firm Perspective</div>
              <p className="text-navy font-serif italic text-lg leading-relaxed">
                "Complexity is the enemy of durability. We seek the simple, underlying truths of the global economy."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Research */}
      <section className="section-padding bg-navy-mid/30 border-y border-gold/15">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div>
            <span className="text-gold tracking-institutional uppercase text-[10px] block mb-4">Research & Insights</span>
            <h2 className="text-4xl md:text-5xl">Connecting the Dots</h2>
          </div>
          <button className="hidden md:flex items-center space-x-4 text-gold text-[10px] tracking-refined uppercase hover:text-gold-light transition-colors group">
            <span>Explore All Research</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              category: 'Macro Outlook',
              title: 'The Great Rebalancing: 2026 Global Forecast',
              desc: 'Our annual guide to the structural shifts defining the next decade of capital allocation.',
              date: 'May 2026'
            },
            {
              category: 'Strategy Note',
              title: 'Systematic Resilience in Volatile Environments',
              desc: 'How our proprietary signal filters navigate rapid shifts in interest rate expectations.',
              date: 'April 2026'
            },
            {
              category: 'Market Views',
              title: 'Commodity Cycles and Geopolitical Risk',
              desc: 'An analysis of supply-chain fragmentation and its impact on inflationary baselines.',
              date: 'April 2026'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-navy-mid institutional-border p-12 group cursor-pointer h-full flex flex-col"
            >
              <span className="text-gold text-[9px] tracking-institutional uppercase font-bold mb-8 block">
                {item.category}
              </span>
              <h3 className="text-2xl mb-8 leading-tight group-hover:text-gold transition-colors flex-grow">
                {item.title}
              </h3>
              <p className="text-[#8a9ab5] text-[13px] leading-relaxed mb-10 flex-grow">
                {item.desc}
              </p>
              <div className="flex justify-between items-center pt-8 border-t border-gold/10">
                <span className="text-[10px] text-neutral-600 uppercase tracking-institutional">{item.date}</span>
                <BookOpen size={16} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="md:hidden mt-12 w-full btn-gold">Explore All Research</button>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="w-12 h-[2px] bg-gold mx-auto mb-10" />
          <h2 className="text-4xl md:text-6xl mb-8">Partner with Intelligence.</h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            We are currently accepting inquiries from qualified institutional allocators who share our vision for systematic macro investing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="btn-gold w-full sm:w-auto">Contact Investor Relations</button>
            <button className="w-full sm:w-auto px-8 py-3 border border-gold/30 text-white tracking-widest uppercase text-xs hover:bg-gold/10 transition-colors">
              Newsletter Signup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
