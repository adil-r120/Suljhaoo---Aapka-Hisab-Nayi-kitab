import React from 'react';
import type { Feature } from '../types/feature.types';
import {
  SalesIllustration,
  StockIllustration,
  CustomerIllustration,
  ExpenseIllustration,
  DeliveryIllustration,
  ReportsIllustration,
} from '../components/illustrations/FeatureIllustrations';

export const features: Feature[] = [
  {
    title: 'Sales Management',
    desc: 'Record daily cash and online sales. Generate instant professional invoices and share directly with customers.',
    illustration: React.createElement(SalesIllustration),
  },
  {
    title: 'Stock Management',
    desc: 'Track inventory quantities automatically as you sell. Low stock alerts notify you before you run out of essential items.',
    illustration: React.createElement(StockIllustration),
  },
  {
    title: 'Customer & Supplier Management',
    desc: 'Maintain digital credit registers. Send automated friendly SMS and WhatsApp balance reminders to collect payments 3x faster.',
    illustration: React.createElement(CustomerIllustration),
  },
  {
    title: 'Expense Tracking',
    desc: 'Log daily shop expenses like rent, electricity bills, and staff salaries. Categorize expenses to see exactly where money goes.',
    illustration: React.createElement(ExpenseIllustration),
  },
  {
    title: 'Purchase & Delivery',
    desc: 'Manage orders placed with wholesale distributors. Track incoming deliveries and unpaid supplier balances easily.',
    illustration: React.createElement(DeliveryIllustration),
  },
  {
    title: 'Reports & Analytics',
    desc: 'Get automated end-of-day sales tallies and profit reports. Visual graphs help identify best-selling products instantly.',
    illustration: React.createElement(ReportsIllustration),
  },
];
