"use client";

import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/utils/ui";

export type TooltipProps = {
  delay?: number;
  sideOffset?: number;
  content: React.ReactNode;
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<typeof TooltipContent>;

export function Tooltip({
  delay = 0,
  sideOffset = 4,
  content,
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={delay}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          className={cn(
            "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "bg-base-12 text-[12px] text-main-5 font-medium leading-[1] select-none rounded px-[8px] py-[4px] will-change-[transform,opacity]",
            className
          )}
          {...props}
        >
          {content}
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
}
