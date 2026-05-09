import { motion } from 'motion/react';
import { Layers, Search, BarChart3, ShieldCheck, Play } from 'lucide-react';

export default function ApproachPage() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20 relative">
        <div className="absolute -right-20 top-0 text-gold/5 font-serif text-[20vw] leading-none pointer-events-none select-none">
          SYSTEMS
        </div>
        <div className="max-w-4xl relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-[0.4em] uppercase text-[10px] items-center flex font-bold">
              Investment Philosophy
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl mb-8 leading-tight">The Systematic <br/><span className="italic font-normal">Advantage.</span></h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            At Stratavis, we replace emotional decision-making with disciplined, cause-and-effect algorithms. Our approach combines decades of macro experience with modern computational power.
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <h2 className="text-2xl font-serif text-white mb-16 text-center uppercase tracking-[0.2em] opacity-50">Our Lifecycle</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-gold/10 border border-gold/10">
          {[
            {
              title: 'Research',
              icon: Search,
              desc: 'Deep fundamental analysis of global economic engines and geopolitical shifts.'
            },
            {
              title: 'Signals',
              icon: BarChart3,
              desc: 'Translating research into measurable indicators and repeatable market signals.'
            },
            {
              title: 'Allocation',
              icon: Layers,
              desc: 'Optimizing portfolio construction to maximize resilience and institutional alpha.'
            },
            {
              title: 'Execution',
              icon: Play,
              desc: 'Automated, disciplined trading across global liquid markets 24 hours a day.'
            }
          ].map((step, i) => (
            <div key={i} className="p-12 group hover:bg-gold/5 transition-colors duration-500">
               <div className="text-gold/20 font-serif text-6xl mb-12 group-hover:text-gold/40 transition-colors">0{i+1}</div>
               <step.icon size={32} className="text-gold mb-8 transform group-hover:scale-110 transition-transform" />
               <h3 className="text-xl text-white mb-4 uppercase tracking-widest">{step.title}</h3>
               <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="bg-navy-mid/50 py-32 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
               <div className="grid grid-cols-1 gap-12">
                  <div className="flex gap-8">
                     <div className="flex-shrink-0 w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                        <ShieldCheck size={20} />
                     </div>
                     <div>
                        <h4 className="text-white text-lg mb-2">Risk Management</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">Risk is not an afterthought; it is the cornerstone of our signal generation. Continuous stress testing across decades of synthetic scenarios.</p>
                     </div>
                  </div>
                  <div className="flex gap-8">
                     <div className="flex-shrink-0 w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                        <BarChart3 size={20} />
                     </div>
                     <div>
                        <h4 className="text-white text-lg mb-2">Durable Returns</h4>
                        <p className="text-sm text-neutral-500 leading-relaxed">We target high-quality, non-correlated returns that serve as a ballast for the world's largest institutional portfolios.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
               <h2 className="text-4xl mb-10 leading-tight">Built for Resilience. <br/>Controlled by <span className="italic font-normal">Code.</span></h2>
               <p className="text-neutral-400 mb-10 leading-relaxed">
                  Our systems are designed to detect regime shifts before they manifest in price-action. By monitoring the flow of capital and the friction of geopolitics, we stay one step ahead of the consensus.
               </p>
               <button className="btn-gold">Read Whitepaper</button>
            </div>
        </div>
      </section>
    </div>
  );
}
