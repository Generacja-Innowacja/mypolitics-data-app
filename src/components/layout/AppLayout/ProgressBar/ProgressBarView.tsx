'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export const ProgressBar: React.FC = () => (
  <AppProgressBar
    height="4px"
    color="#00B3DB"
    options={{ showSpinner: false }}
    shallowRouting
  />
);
