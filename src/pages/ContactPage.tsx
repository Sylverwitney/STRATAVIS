import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState('Investor Relations');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 md:px-12 lg:px-24 mb-20 text-center max-w-4xl mx-auto">
        <span className="text-gold tracking-[0.4em] uppercase text-[10px] font-bold block mb-4">Engagement</span>
        <h1 className="text-5xl md:text-6xl mb-8">Establish a Connection</h1>
        <p className="text-neutral-400 text-lg leading-relaxed">
          We welcome inquiries from institutional allocators, prospective talent, and the media. Select the appropriate department below to route your inquiry correctly.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-24">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-16">
          <div>
            <h3 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8 flex items-center">
              <span className="w-8 h-[1px] bg-gold mr-4"></span> Global Headquarters
            </h3>
            <div className="flex items-start space-x-6 text-neutral-400">
               <MapPin className="text-gold flex-shrink-0" size={20} />
               <div className="text-sm leading-relaxed">
                  500 Greenwich Street, Suite 1400<br />
                  New York, NY 10013<br />
                  United States
               </div>
            </div>
          </div>

          <div>
             <h3 className="text-white text-xs tracking-[0.3em] uppercase font-bold mb-8 flex items-center">
               <span className="w-8 h-[1px] bg-gold mr-4"></span> Direct Contact
             </h3>
             <div className="space-y-6 text-sm text-neutral-400">
                <div className="flex items-center space-x-6">
                   <Mail className="text-gold" size={20} />
                   <span>ir@stratavis.com</span>
                </div>
                <div className="flex items-center space-x-6">
                   <Phone className="text-gold" size={20} />
                   <span>+1 (212) 555-0198</span>
                </div>
             </div>
          </div>

          <div className="p-8 bg-navy-mid border border-gold/10">
            <h4 className="text-white text-sm mb-4">Media Inquiries</h4>
            <p className="text-[11px] uppercase tracking-widest text-neutral-500 mb-6">For press requests or interview availability regarding our latest macro outlooks.</p>
            <a href="mailto:press@stratavis.com" className="text-gold text-xs tracking-widest uppercase hover:text-gold-light transition-colors py-1 border-b border-gold/20">Email Media Relations</a>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:col-span-2">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-navy-mid border border-gold p-16 text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30">
                <CheckCircle2 className="text-gold" size={32} />
              </div>
              <h2 className="text-3xl mb-4 text-white">Inquiry Received</h2>
              <p className="text-neutral-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out to Stratavis Capital. A member of our {inquiryType} team will review your message and respond shortly.
              </p>
              <button 
                 onClick={() => setSubmitted(false)}
                 className="mt-12 text-gold text-xs tracking-widest uppercase border-b border-gold/20 pb-1"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="col-span-full">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 block mb-6 px-1">Inquiry Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Investor Relations', 'Institutional Research', 'Media', 'Careers', 'Other'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`px-4 py-3 text-[9px] tracking-widest uppercase transition-all border ${
                          inquiryType === type ? 'bg-gold text-navy border-gold' : 'border-gold/10 text-neutral-400 hover:border-gold/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 px-1">Full Name</label>
                  <input required type="text" className="w-full bg-navy border-b border-gold/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 px-1">Professional Email</label>
                  <input required type="email" className="w-full bg-navy border-b border-gold/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 px-1">Institutional Firm</label>
                  <input type="text" className="w-full bg-navy border-b border-gold/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="(Optional)" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 px-1">Position / Title</label>
                  <input type="text" className="w-full bg-navy border-b border-gold/20 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="(Optional)" />
                </div>
                <div className="col-span-full space-y-4">
                  <label className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 px-1">Message</label>
                  <textarea required rows={6} className="w-full bg-navy border border-gold/10 p-6 text-white focus:outline-none focus:border-gold/30 transition-colors bg-navy-mid/30" placeholder="How can Stratavis assist you?"></textarea>
                </div>
              </div>

              <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-[9px] text-neutral-600 uppercase tracking-widest leading-relaxed max-w-sm">
                  By submitting this form, you acknowledge that Stratavis Capital may process your information as described in our Privacy Policy and Disclosure statements.
                </p>
                <button type="submit" className="btn-gold px-16 flex items-center space-x-3 w-full md:w-auto justify-center">
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
