import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import GlobalScrollIndicator from '../components/ui/GlobalScrollIndicator';
import useLenis from '../hooks/useLenis';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Activate Lenis smooth scrolling globally
  useLenis();

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-brand-purple/10 selection:text-brand-purple antialiased">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Expandable Chat Widget */}
      <ChatWidget />
      
      {/* Global Mouse Scroll Down Button */}
      <GlobalScrollIndicator />
    </div>
  );
};

export default MainLayout;
