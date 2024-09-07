import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

// Define a custom NextPage type that includes getLayout
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
