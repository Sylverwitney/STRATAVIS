import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy-mid border-t border-gold/15 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 text-sm">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-xl font-bold tracking-refined text-white uppercase italic">
              Stratavis
            </span>
            <span className="text-[9px] tracking-institutional text-gold mt-1 uppercase">
              Capital
            </span>
          </Link>
          <p className="mt-8 text-[#8a9ab5] text-[13px] leading-relaxed max-w-sm">
            Translating deep macro research into durable returns for the world's most sophisticated institutional allocators.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white text-[10px] tracking-refined uppercase font-bold mb-8">Firm</h4>
          <ul className="space-y-4 text-[11px] tracking-widest text-[#8a9ab5] uppercase">
            <li><Link to="/approach" className="hover:text-gold transition-colors">Approach</Link></li>
            <li><Link to="/culture" className="hover:text-gold transition-colors">Culture</Link></li>
            <li><Link to="/people" className="hover:text-gold transition-colors">People</Link></li>
            <li><Link to="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] tracking-refined uppercase font-bold mb-8">Insights</h4>
          <ul className="space-y-4 text-[11px] tracking-widest text-[#8a9ab5] uppercase">
            <li><Link to="/research" className="hover:text-gold transition-colors">Market Views</Link></li>
            <li><Link to="/research" className="hover:text-gold transition-colors">Annual Outlook</Link></li>
            <li><Link to="/research" className="hover:text-gold transition-colors">Strategy Notes</Link></li>
            <li><Link to="/research" className="hover:text-gold transition-colors">Archive</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-[10px] tracking-refined uppercase font-bold mb-8">Legal</h4>
          <ul className="space-y-4 text-[11px] tracking-widest text-[#8a9ab5] uppercase">
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Disclosures</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">SFDR</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-10 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-institutional text-neutral-600 uppercase">
        <p>© 2026 Stratavis Capital. All rights reserved.</p>
        <p className="mt-4 md:mt-0 font-medium">Confidential · Institutional Use Only</p>
      </div>
    </footer>
  );
}
