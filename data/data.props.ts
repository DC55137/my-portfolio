import type { IconProps } from "@tabler/icons-react";
import type { ComponentType } from "react";

export type Section = {
  id: string;
  icon: ComponentType<IconProps>;
  label: string;
  title: string;
  subtitle: string;
};
