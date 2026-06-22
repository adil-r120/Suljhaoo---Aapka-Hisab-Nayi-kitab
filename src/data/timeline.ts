import React from 'react';
import type { TimelineMilestone } from '../types/timeline.types';
import { Sparkles, BarChart, Trophy } from 'lucide-react';

export const timelineMilestones: TimelineMilestone[] = [
  {
    time: 'Week 1',
    title: 'Digitize & Setup',
    desc: 'Clear out paper registers. Import all customer balances (Udhar) and products. Send initial WhatsApp billing notifications. Shopkeepers see an average of ₹5,000+ pending cash collected in the first 7 days.',
    icon: React.createElement(Sparkles, { size: 20, className: 'text-white' }),
    tag: 'Smooth Setup',
  },
  {
    time: 'Month 1',
    title: 'Clarity & Organization',
    desc: 'Automatic stock logs adjust with sales, preventing empty shelves. Staff accounts delegate cash registration safely. Visual dashboard reports identify high-margin goods, saving 15+ hours of manual math weekly.',
    icon: React.createElement(BarChart, { size: 20, className: 'text-white' }),
    tag: 'Full Control',
  },
  {
    time: 'Month 3 & Beyond',
    title: 'Financial Freedom',
    desc: 'Collect credit 3x faster with automated UPI reminder links. Minimize cash leakage, monitor accurate tax tallies, and experience stress-free growth with the complete Store Platform backing your operations.',
    icon: React.createElement(Trophy, { size: 20, className: 'text-white' }),
    tag: 'Business Scaling',
  },
];
