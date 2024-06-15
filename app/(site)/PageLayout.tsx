import type { ReactNode } from "react";

import { Fragment } from "react";

import { SiteAside } from "./_components/site-aside";
import { Glass } from "../_components/glass";

export type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Fragment>
      <Glass />
      <div className="relative z-20 flex flex-col flex-auto lg:flex-row-reverse">
        {children}
        <SiteAside />
      </div>
    </Fragment>
  );
}
