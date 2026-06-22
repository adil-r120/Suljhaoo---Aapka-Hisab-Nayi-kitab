import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';

export const Privacy: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-24 text-left">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
            <ShieldCheck className="text-brand-purple" size={24} />
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900">
            Privacy Policy
          </h1>
        </div>
        <div className="prose prose-purple max-w-none text-gray-600 space-y-6">
          <p className="text-lg leading-relaxed text-gray-500 font-medium">
            Your privacy is extremely important to us. Suljhaoo is built with local data security and offline-first encryption at its core.
          </p>
          <hr className="border-gray-100" />
          <h2 className="font-heading font-bold text-xl text-gray-900 mt-8">1. Data Storage & Ownership</h2>
          <p>
            All your customer transactions, bills, and stock lists are saved locally on your device. We use secure SQLite/IndexedDB structures. When you sync with the cloud, the data is encrypted in transit and at rest using industry-standard AES-256 protocols.
          </p>
          <h2 className="font-heading font-bold text-xl text-gray-900 mt-8">2. WhatsApp Sharing</h2>
          <p>
            When sharing bills via WhatsApp, Suljhaoo only reads the specific contact number and bill amount you select. No message logs or metadata are stored on our servers.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Privacy;
