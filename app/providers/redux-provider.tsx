// "use client";
import store from "@/components/store/store";
import { PropsWithChildren, ReactNode } from "react";

import { Provider } from "react-redux";

export default function ReduxProvider({ children }: PropsWithChildren<any>) {
  return <Provider store={store}>{children}</Provider>;
}
