import type { TablerIcon } from "@tabler/icons-react";
import type { ComponentType } from "react";

export type Section = {
  id: string;
  icon: ComponentType<TablerIcon>;
  label: string;
  title: string;
  subtitle: string;
};
