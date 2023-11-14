"use client";

import React, { ReactNode } from "react";
// rtk
import { Provider } from "react-redux";
import store from "./store";

interface ProvidersProps {
  children: ReactNode;
}

export function ReduxProviders({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
