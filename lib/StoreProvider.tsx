"use client";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={makeStore}>{children}</Provider>;
}
