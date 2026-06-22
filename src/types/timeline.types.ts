import type { ReactNode } from 'react';

export interface TimelineMilestone {
  time: string;
  title: string;
  desc: string;
  icon: ReactNode;
  tag: string;
}
