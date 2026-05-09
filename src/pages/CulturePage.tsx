import { motion } from 'motion/react';
import { Quote, Heart, Users, Sparkles, Scale } from 'lucide-react';

export default function CulturePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">The Human Element</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Radical Inquiry. <br/><span className="italic font-normal">Authentic Debate.</span></h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            Success in complex markets requires more than just intelligence—it requires a culture of radical truth. At Stratavis, we foster an environment where the best ideas win, regardless of hierarchy.
          </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10 border border-gold/10">
            {[
               {
                  title: 'Thought Partnership',
                  icon: Users,
                  desc: 'We operate as a collective of partners, not a collection of silos. Knowledge is shared instantly to sharpen our edge.'
               },
               {
                  title: 'Intellectual Honesty',
                  icon: Scale,
                  desc: 'We prioritize the "what" over the "who." Admitting failure is the first step toward a more durable system.'
               },
               {
                  title: 'Systematic Rigor',
                  icon: Sparkles,
                  desc: 'Every cultural principle is translated into a protocol. We are as disciplined in our behavior as we are in our trading.'
               },
               {
                  title: 'Deep Integrity',
                  icon: Heart,
                  desc: 'Trust is our primary capital. We maintain the highest ethical standards for our institutional partners.'
               }
            ].map((p, i) => (
               <div key={i} className="bg-navy p-16 group hover:bg-gold/5 transition-all duration-700">
                  <p.icon size={36} className="text-gold mb-10 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-2xl font-serif mb-6 text-white">{p.title}</h3>
                  <p className="text-neutral-500 leading-relaxed max-w-md">{p.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Philosophy Callout */}
      <section className="bg-navy-mid/30 py-32 border-y border-gold/10">
        <div className="max-w-5xl mx-auto px-6 px-12 text-center">
            <Quote size={48} className="text-gold/20 mx-auto mb-12" />
            <h2 className="text-3xl md:text-5xl font-serif italic mb-12 text-white leading-tight">
               "The greatest risk is not in being wrong, but in being wrong and not knowing why. Our culture is the search for 'why'."
            </h2>
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 mb-4 overflow-hidden">
                   <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                      alt="Founder" 
                      className="w-full h-full object-cover grayscale"
                      referrerPolicy="no-referrer"
                   />
               </div>
               <span className="text-white text-xs tracking-[0.2em] uppercase font-bold">Arthur Sterling</span>
               <span className="text-gold text-[9px] tracking-[0.4em] uppercase mt-1">Founder & CO-CIO</span>
            </div>
        </div>
      </section>

      {/* Careers Bridge */}
      <section className="px-6 md:px-12 lg:px-24 mt-32 text-center">
         <h2 className="text-3xl mb-8">Join the Vanguard.</h2>
         <p className="text-neutral-500 mb-12 max-w-xl mx-auto">We are always seeking exceptional minds who thrive in environments of high-level debate and clinical precision.</p>
         <button className="btn-gold">View Open Positions</button>
      </section>
    </div>
  );
}
