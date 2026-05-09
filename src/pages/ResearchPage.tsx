import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter, Search, Download, Lock } from 'lucide-react';

const categories = ['All', 'Macro View', 'Strategy Notes', 'Annual Outlook', 'Risk Analysis'];

const researchItems = [
  {
    category: 'Annual Outlook',
    title: 'The Great Rebalancing: 2026 Global Forecast',
    desc: 'Our annual guide to the structural shifts defining the next decade of capital allocation.',
    date: 'May 05, 2026',
    author: 'Dr. Sarah Chen',
    gated: true
  },
  {
    category: 'Strategy Notes',
    title: 'Systematic Resilience in Volatile Environments',
    desc: 'How our proprietary signal filters navigate rapid shifts in interest rate expectations.',
    date: 'April 28, 2026',
    author: 'James T. Miller',
    gated: false
  },
  {
    category: 'Macro View',
    title: 'Commodity Cycles and Geopolitical Risk',
    desc: 'An analysis of supply-chain fragmentation and its impact on inflationary baselines.',
    date: 'April 15, 2026',
    author: 'Stratavis Research Team',
    gated: false
  },
  {
    category: 'Risk Analysis',
    title: 'Tail Risk Hedging in a Post-Globalized World',
    desc: 'Quantifying the cost of insurance against black-swan geopolitical events.',
    date: 'March 30, 2026',
    author: 'Elena Rodriguez',
    gated: true
  },
  {
    category: 'Macro View',
    title: 'Monetary Policy at the Intersection of AI and Labor',
    desc: 'Why productivity gains might delay the next easing cycle indefinitely.',
    date: 'March 12, 2026',
    author: 'Dr. Sarah Chen',
    gated: false
  }
];

export default function ResearchPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? researchItems 
    : researchItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-[0.4em] uppercase text-[10px] items-center flex font-bold">
              Intellectual Capital
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-8 leading-tight">Research & Insights</h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            We believe that understanding the fundamental drivers of markets is the only way to build durable portfolios. Our research team produces deep-dive analysis on the macro trends shaping the global economy.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 lg:px-24 mb-16">
        <div className="bg-navy-mid border border-gold/10 p-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide max-w-full">
            <Filter size={14} className="text-gold mr-3 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 flex-shrink-0 border ${
                  activeCategory === cat 
                    ? 'bg-gold text-navy border-gold' 
                    : 'text-neutral-400 border-gold/10 hover:border-gold/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
            <input 
              type="text" 
              placeholder="Search Archives..."
              className="w-full bg-navy border border-gold/10 pl-12 pr-4 py-3 text-xs tracking-widest text-white focus:outline-none focus:border-gold/30 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Research Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredItems.map((item, i) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={item.title}
              className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gold/10 group cursor-pointer"
            >
              <div className="w-full md:w-48 aspect-square bg-navy-mid overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                   src={`https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&sig=${i}`}
                   alt={item.title}
                   className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.gated ? <Lock className="text-gold/50" /> : <Download className="text-gold/50" />}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                   <span className="text-gold text-[9px] tracking-[0.3em] uppercase font-bold">{item.category}</span>
                   {item.gated && <span className="bg-gold/10 text-gold text-[8px] px-2 py-1 uppercase tracking-widest border border-gold/20">Institutional Access Only</span>}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-neutral-500 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between text-[10px] tracking-widest text-neutral-600 uppercase">
                  <span>{item.author} — {item.date}</span>
                  <button className="text-gold hover:text-gold-light border-b border-gold/20 pb-1">Read Report</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-6 md:px-12 lg:px-24 mt-24">
        <div className="bg-navy-mid border border-gold/10 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1">
              <h2 className="text-3xl mb-4">Stay at the Horizon.</h2>
              <p className="text-neutral-500 text-sm max-w-md">Our weekly research roundup, "Stratavis Insights," delivers deep geometric analysis of global markets directly to your inbox.</p>
           </div>
           <div className="flex-1 w-full max-w-md">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Professional Email"
                  className="flex-grow bg-navy border border-gold/10 px-6 py-4 text-xs tracking-widest focus:outline-none focus:border-gold/30"
                />
                <button className="btn-gold whitespace-nowrap">Subscribe</button>
              </div>
              <p className="mt-4 text-[9px] text-neutral-600 uppercase tracking-widest leading-relaxed">
                By subscribing, you agree to our Terms of Use and acknowledge our Privacy Policy.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
}
