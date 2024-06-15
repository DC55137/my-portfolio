"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scaleForeground = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const opacityText = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacityIcons = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacityDesk = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const opacityMainSection = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const handleScrollToProjects = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById("projects");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className={cn("h-[130vh] bg-main-100 relative z-20")}
    >
      <motion.div
        style={{ opacity: opacityMainSection }}
        className="h-screen sticky top-0 overflow-hidden"
      >
        <motion.div
          style={{ scale: scaleBackground }}
          className="absolute w-full h-full"
        >
          <Image
            src="/background.png"
            alt="Background Image"
            fill={true}
            className="object-cover object-bottom"
            priority
          />
        </motion.div>

        <motion.div
          style={{ scale: scaleForeground, opacity: opacityDesk }}
          className="absolute w-full h-full"
        >
          <Image
            src="/desk.png"
            alt="Foreground Image"
            fill={true}
            className="object-cover object-bottom floating"
            priority
          />
        </motion.div>

        <motion.div
          style={{ scale: scaleForeground, opacity: opacityIcons }}
          className="absolute w-full h-full "
        >
          <Image
            src="/icons.png"
            alt="Foreground Image"
            fill={true}
            className="object-cover object-bottom mix-blend-soft-light floatingIcons"
            priority
          />
        </motion.div>

        <motion.div
          style={{ opacity: opacityText }}
          className="absolute w-full  top-0 text-center"
        >
          <div className="lg:text-8xl text-4xl">
            <h1 className="font-bold text-white lg:py-4">Hello! I&apos;m</h1>
            <h1 className="lg:py-4">
              <strong className="text-main-500">Daniel Correa</strong>
            </h1>
            <h2 className="lg:text-4xl text-lg py-4">
              Welcome to my{" "}
              <strong className="text-main-500">digital realm</strong>
            </h2>
            <Button
              variant={"secondary"}
              onClick={handleScrollToProjects}
              className="py-2"
            >
              My Projects
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
