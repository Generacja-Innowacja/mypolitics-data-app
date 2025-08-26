"use client";

import { AppProgressBar } from "next-nprogress-bar";

export const ProgressBar = (): JSX.Element => (
  <AppProgressBar
    height="4px"
    color="#00B3DB"
    options={{ showSpinner: false }}
    shallowRouting
  />
);
