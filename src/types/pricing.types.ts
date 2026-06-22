export interface PricingPlan {
  name: string;
  desc: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  cta: string;
  featured: boolean;
}
