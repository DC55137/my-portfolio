"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";

export function Hero() {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scaleForeground = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const opacityText = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacityIcons = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacityDesk = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const opacityMainSection = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const handleScrollToProjects = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById("about");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setScrollY(value);
    });
  }, [scrollYProgress]);

  return (
    <section
      id="home"
      ref={ref}
      className={cn(
        "h-[200vh] bg-teal-8 relative ",
        scrollY > 0.8 ? "z-[0]" : "z-30"
      )}
    >
      <motion.div
        style={{ opacity: opacityMainSection }}
        className={cn(
          "h-screen sticky top-0 overflow-hidden",
          scrollYProgress.get() > 1 && "hidden"
        )}
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
          className="absolute w-full top-8 text-center px-4"
        >
          <div className="2xl:text-8xl lg:text-7xl sm:text-6xl text-5xl flex flex-col gap-6">
            <h1 className="text-white">Hello! I&apos;m</h1>
            <h1 className="text-main-9">
              <strong>Daniel Correa</strong>
            </h1>
            <h2 className="lg:text-2xl font-normal text-2xl">
              Welcome to my{" "}
              <strong className="text-main-9">digital realm.</strong>
            </h2>
          </div>
          <div className="flex flex-col sm:text-lg px-14 text-sm sm:flex-row gap-2 justify-center mt-4">
            <Button
              className=" mx-auto sm:mx-0 w-full sm:w-60"
              onClick={handleScrollToProjects}
            >
              Dive in
            </Button>
            <Button
              className=" mx-auto sm:mx-0 w-full sm:w-60"
              variant={"secondary"}
              asChild
            >
              <a download="Daniel-Correa-resume.pdf" href="/resume.pdf">
                <IconDownload strokeWidth={1.5} className="h-[16px]" />
                Download Résumé
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
