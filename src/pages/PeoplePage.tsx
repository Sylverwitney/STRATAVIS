import { motion } from 'motion/react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const team = [
  {
    name: 'Arthur Sterling',
    title: 'Founder & Co-CIO',
    bio: 'Arthur founded Stratavis in 2011 after a decade as Head of Macro Strategy at a tier-1 investment bank. He holds a PhD in Economics from the London School of Economics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'Head of Research',
    bio: 'Sarah leads our 40-person research team. Previously a senior economist at the IMF, her work focuses on structural shifts in emerging market demographics and productivity.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    title: 'Chief Risk Officer',
    bio: 'Elena oversees our systematic risk frameworks. She spent 15 years developing tail-risk models for a major sovereign wealth fund and holds a MS in Financial Engineering.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a09d2bd490?q=80&w=1964&auto=format&fit=crop'
  },
  {
    name: 'James T. Miller',
    title: 'Head of Systematic Trading',
    bio: 'James manages the infrastructure and execution of our systematic strategies. A former NASA engineer, he brings clinical precision to high-frequency macro implementation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function PeoplePage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="h-[1px] w-12 bg-gold" />
            <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold">Leadership & Intellectual Depth</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-8 leading-tight">Minds behind the <br/><span className="italic font-normal">Model.</span></h1>
          <p className="text-neutral-400 text-lg leading-relaxed max-w-2xl">
            Our team is a collective of economists, technologists, and risk experts dedicated to the pursuit of objective truth in global markets.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row gap-12 items-center md:items-start group"
            >
              <div className="w-full md:w-64 aspect-[3/4] relative grayscale group-hover:grayscale-0 transition-all duration-700 overflow-hidden bg-navy-mid">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 flex justify-center space-x-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-navy-mid/80 backdrop-blur-sm">
                  <Linkedin size={16} className="text-gold cursor-pointer hover:text-white" />
                  <Mail size={16} className="text-gold cursor-pointer hover:text-white" />
                  <ExternalLink size={16} className="text-gold cursor-pointer hover:text-white" />
                </div>
              </div>

              <div className="flex-1">
                <span className="text-gold text-[9px] tracking-[0.4em] uppercase font-bold mb-4 block">{member.title}</span>
                <h3 className="text-3xl font-serif mb-6 text-white">{member.name}</h3>
                <p className="text-neutral-500 leading-relaxed mb-8 text-sm">
                  {member.bio}
                </p>
                <div className="w-8 h-[1px] bg-gold/30 group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advisory Section */}
      <section className="px-6 md:px-12 lg:px-24 mt-40">
        <div className="bg-navy-mid/30 border-y border-gold/10 py-20">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl font-serif mb-12 uppercase tracking-widest text-gold/60">Investment Committee</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Quantitative Risk', 'Macro Research', 'Systematic Execution', 'Strategy Compliance'].map((dept) => (
                  <div key={dept} className="flex flex-col items-center">
                     <div className="w-1 h-1 bg-gold rounded-full mb-4" />
                     <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">{dept}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
