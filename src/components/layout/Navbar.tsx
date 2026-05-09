import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Research & Insights', path: '/research' },
  { name: 'Investment Approach', path: '/approach' },
  { name: 'Culture', path: '/culture' },
  { name: 'People', path: '/people' },
  { name: 'Careers', path: '/careers' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'institutional-glass py-4 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-sm">
        <Link to="/" className="flex flex-col items-start group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-refined text-white group-hover:text-gold transition-colors duration-500 uppercase">
            Stratavis Capital
          </span>
          <span className="text-[9px] md:text-[10px] tracking-institutional text-gold mt-1 uppercase">
            Systematic Macro Research
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`relative py-1 group tracking-[0.2em] uppercase text-[10px] font-semibold transition-colors duration-300 ${
                location.pathname === item.path ? 'text-gold' : 'text-[#8a9ab5] hover:text-white'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-500 ${
                location.pathname === item.path ? 'w-full' : 'group-hover:w-full'
              }`} />
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-gold/20 mx-2" />
          <Link to="/contact" className="gold-link tracking-[0.2em] uppercase text-[10px] font-semibold">
            Contact
          </Link>
          <a href="#" className="bg-gold/5 border border-gold/20 px-6 py-2.5 text-gold text-[9px] tracking-institutional uppercase hover:bg-gold hover:text-navy transition-all duration-500">
            Client Portal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-mid border-b border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col space-y-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-white tracking-widest flex items-center justify-between"
                >
                  {item.name}
                  <ChevronRight size={16} className="text-gold" />
                </Link>
              ))}
              <div className="pt-8 border-t border-gold/10 flex flex-col space-y-4">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="text-gold tracking-[0.2em] uppercase text-xs"
                >
                  Investor Relations
                </Link>
                <a href="#" className="btn-gold text-center">
                  Client Portal
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
