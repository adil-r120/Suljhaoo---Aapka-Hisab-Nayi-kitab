import type { PricingPlan } from '../types/pricing.types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free Plan',
    desc: 'For small micro-shops starting their digital journey.',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Simple Digital Invoicing',
      'Up to 100 Customer Records',
      'Offline Database',
      'Single Device Support',
      'Basic Daily Sales Log',
    ],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Starter',
    desc: 'For growing shops wanting secure ledger backups.',
    price: { monthly: 199, yearly: 149 },
    features: [
      'Everything in Free Plan',
      'Unlimited Customer Records',
      'Automated Cloud Backup',
      'Custom Store Invoice Logo',
      'Basic Stock Records (50 items)',
    ],
    cta: 'Choose Starter',
    featured: false,
  },
  {
    name: 'Growth',
    desc: 'Best for busy stores wanting full automation.',
    price: { monthly: 399, yearly: 299 },
    features: [
      'Everything in Starter Plan',
      'Unlimited Stock Records',
      'Automated WhatsApp Invoices',
      'UPI Payment Links',
      'Multi-staff Login (up to 3)',
      'Barcode Camera Scanner',
    ],
    cta: 'Choose Growth',
    featured: true,
  },
  {
    name: 'Plus',
    desc: 'For multi-outlet or wholesale distribution stores.',
    price: { monthly: 699, yearly: 499 },
    features: [
      'Everything in Growth Plan',
      'Multi-Outlet Synced Logs',
      'Wholesale Distributor panel',
      'Custom Thermal formatting',
      'Dedicated Account Manager',
      'Premium 24/7 WhatsApp help',
    ],
    cta: 'Choose Plus',
    featured: false,
  },
];
