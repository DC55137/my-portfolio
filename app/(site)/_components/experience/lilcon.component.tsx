"use client";

import React, { RefObject } from "react";
import { motion, useScroll } from "framer-motion";

interface LiIconProps {
  reference: RefObject<HTMLElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start center", "center center"],
  });

  return (
    <figure className="absolute -left-[18px] stroke-main-11">
      <svg
        className="-rotate-90 w-[60px] h-[60px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-1 stroke-main-4 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-black"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 animate-pulse fill-main-12"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
