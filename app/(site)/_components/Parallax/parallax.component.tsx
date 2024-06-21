"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function Parallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const smUp = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smDown = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const mdUp = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const mdDown = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const finishBottom = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const images = [
    {
      src: "/experience/aeon2.png",
      y: smDown,
      className:
        "h-[40vw] w-[30vw] md:h-[40vh] md:w-[30vh] 2xl:h-[30vh] 2xl:w-[20vh] z-10 top-0 right-0",
    },
    {
      src: "/experience/imagine.png",
      y: 0,
      className:
        "h-[50vw] w-[35vw] md:h-[50vh] md:w-[35vh] 2xl:h-[40vh] 2xl:w-[25vh] z-20 top-0 right-1/2",
    },
    {
      src: "/experience/engineer.jpg",
      y: finishBottom,
      className:
        "h-[45vw] w-[35vw] md:h-[45vh] md:w-[35vh] 2xl:h-[35vh] 2xl:w-[25vh]  z-30 sm:bottom-0 bottom-10 left-0",
    },
    {
      src: "/experience/graduation.jpg",
      y: smUp,
      className:
        "h-[35vw] w-[25vw] md:h-[34vh] md:w-[24vh] 2xl:h-[23vh] 2xl:w-[13vh] z-40 top-1/2 md:bottom-0 left-1/2",
    },
    {
      src: "/experience/BJJ.png",
      y: finishBottom,
      className:
        "h-[40vw] w-[30vw] md:h-[40vh] md:w-[30vh] 2xl:h-[30vh] 2xl:w-[20vh] z-50 sm:bottom-0 bottom-10 right-20",
    },
  ];

  return (
    <div ref={container} className=" min-h-[70vh] relative overflow-visible">
      {images.map(({ src, y, className }, i) => (
        <motion.div
          style={{ y }}
          key={`i_${i}`}
          className={`absolute ${className}`}
        >
          <Image
            src={src}
            alt="image"
            fill={true}
            className="object-cover rounded-xl"
            priority
          />
        </motion.div>
      ))}
    </div>
  );
}
