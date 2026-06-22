import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig, AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <MotionConfig reducedMotion="user">
        <MainLayout>
          <AnimatedRoutes />
        </MainLayout>
      </MotionConfig>
    </Router>
  );
};

export default App;
