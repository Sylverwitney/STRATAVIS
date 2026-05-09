/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar.tsx';
import Footer from './components/layout/Footer.tsx';
import HomePage from './pages/HomePage.tsx';
import ResearchPage from './pages/ResearchPage.tsx';
import ApproachPage from './pages/ApproachPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import CulturePage from './pages/CulturePage.tsx';
import PeoplePage from './pages/PeoplePage.tsx';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-navy text-[#d4dce8] selection:bg-gold selection:text-navy border-[8px] md:border-[16px] border-navy-mid overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/people" element={<PeoplePage />} />
            {/* Placeholder routes for demo purposes */}
            <Route path="/careers" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}





