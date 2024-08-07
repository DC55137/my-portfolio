"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";
import { Logo } from "@/components/logo";
import { Progress } from "@/components/ui/progress";

export function Hero() {
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleBackground = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scaleForeground = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scaleDesk = useTransform(scrollYProgress, [0, 0.5], [1, 20]);
  const opacityText = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacityIcons = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacityDesk = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

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

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setScrollY(value);
    });
  }, [scrollYProgress]);

  useEffect(() => {
    if (loadedImages === 3) {
      setIsLoading(false);
    }
  }, [loadedImages]);

  return (
    <section
      id="home"
      ref={ref}
      className={cn(
        "h-[200vh] bg-teal-8 relative ",
        scrollY > 0.8 ? "z-[0]" : "z-30"
      )}
    >
      {isLoading && (
        <div className="fixed h-screen w-screen inset-0 gap-4 flex flex-col items-center justify-center bg-base-6 z-[100]">
          <Logo className="w-32 h-32 fill-main-9 animate-pulse" />{" "}
          <Progress value={(loadedImages / 3) * 100} className="w-80 h-2 " />{" "}
          {/* Adjust the size as necessary */}
        </div>
      )}
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
            onLoad={handleImageLoad}
          />
        </motion.div>

        <motion.div
          style={{ scale: scaleDesk, opacity: opacityDesk }}
          className="absolute w-full h-full"
        >
          <Image
            src="/desk.png"
            alt="Foreground Image"
            fill={true}
            className="object-cover object-bottom floatingDesk"
            priority
            onLoad={handleImageLoad}
          />
        </motion.div>

        <motion.div
          style={{
            scale: scaleForeground,
            opacity: opacityIcons,
          }}
          className="absolute w-full h-full "
        >
          <Image
            src="/icons.png"
            alt="Foreground Image"
            fill={true}
            className="object-cover object-bottom mix-blend-soft-light floatingIcons"
            priority
            onLoad={handleImageLoad}
          />
        </motion.div>
        <div className="container">
          <motion.div
            style={{ opacity: opacityText }}
            className="relative w-full top-8 text-left sm:px-20"
          >
            <div className="2xl:text-8xl lg:text-7xl text-6xl flex flex-col gap-6">
              <h1 className="text-white">Hello! I&apos;m</h1>
              <h1 className="text-main-11">
                <strong>Daniel Correa</strong>
              </h1>
              <h2 className="lg:text-2xl text-white font-normal text-2xl">
                Welcome to my{" "}
                <strong className="text-main-11">digital realm.</strong>
              </h2>
            </div>
            <div className="my-4">
              <Button className="w-32 mx-2" onClick={handleScrollToProjects}>
                Dive in
              </Button>
              <Button className="w-32 mx-2" variant={"secondary"} asChild>
                <a download="Daniel-Correa-resume.pdf" href="/resume.pdf">
                  <IconDownload strokeWidth={1.5} className="h-[16px]" />
                  Résumé
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
