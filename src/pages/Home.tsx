import React, { Suspense, lazy } from 'react';
import Hero from '../sections/01-Hero';
import BenefitsStrip from '../sections/02-BenefitsStrip';
import PageTransition from '../components/ui/PageTransition';
import PageLoader from '../components/PageLoader';

// Lazy-load all below-the-fold sections for faster initial paint
const FeaturesGrid = lazy(() => import('../sections/03-FeaturesGrid'));
const ProductDemo = lazy(() => import('../sections/04-ProductDemo'));
const AppShowcase = lazy(() => import('../sections/05-AppShowcase'));
const WhySuljhaoo = lazy(() => import('../sections/06-WhySuljhaoo'));
const ProblemSection = lazy(() => import('../sections/07-ProblemSection'));
const SetupProcess = lazy(() => import('../sections/08-SetupProcess'));
const Journey90Days = lazy(() => import('../sections/09-Journey90Days'));
const ShopkeeperFeatures = lazy(() => import('../sections/10-ShopkeeperFeatures'));
const TrustSection = lazy(() => import('../sections/11-TrustSection'));
const Testimonials = lazy(() => import('../sections/12-Testimonials'));
const Pricing = lazy(() => import('../sections/13-Pricing'));
const FAQ = lazy(() => import('../sections/14-FAQ'));
const FinalCTA = lazy(() => import('../sections/15-FinalCTA'));
const DownloadCTA = lazy(() => import('../sections/16-DownloadCTA'));

export const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* 1. Hero Landing & ThreeJS Background Canvas — above fold, eager */}
      <Hero />

      {/* 2. Horizontal Benefits Strip Ticker — above fold, eager */}
      <BenefitsStrip />

      {/* All below-fold sections are lazy loaded */}
      <Suspense fallback={<PageLoader />}>

        {/* 3. Features Grid */}
        <FeaturesGrid />

        {/* 4. Product Demo Simulation Showcase */}
        <ProductDemo />

        {/* 5. App Device Mockup Showcase */}
        <AppShowcase />

        {/* 6. Why Suljhaoo (Phone center, benefit connectors) */}
        <WhySuljhaoo />

        {/* 7. Pain Points vs Suljhaoo Solutions Comparison */}
        <ProblemSection />

        {/* 8. Setup Timeline Onboarding Process */}
        <SetupProcess />

        {/* 9. GSAP vertical scroll-animated 90 Day Journey */}
        <Journey90Days />

        {/* 10. Granular Shopkeeper Feature Grid */}
        <ShopkeeperFeatures />

        {/* 11. Security & Trust Prominent Cards */}
        <TrustSection />

        {/* 12. Infinite Loop Testimonials Swiper */}
        <Testimonials />

        {/* 13. Interactive Pricing Plans with billing toggles */}
        <Pricing />

        {/* 14. Framer Motion Expandable FAQ Accordions */}
        <FAQ />

        {/* 15. Download CTA with Play Store / App Store buttons */}
        <DownloadCTA />

        {/* 16. Final Call-To-Action Gradient Panel */}
        <FinalCTA />

      </Suspense>
    </PageTransition>
  );
};

export default Home;
