"use client";

import React, { RefObject, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface LiIconProps {
  reference: RefObject<HTMLLIElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      console.log("LiIcon scrollYProgress:", latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

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
            pathLength: pathLength,
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
