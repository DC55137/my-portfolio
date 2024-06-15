"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./lilcon.component";
import { experience } from "@/data/experience";

export const ExperiencePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" className=" relative z-20">
      <div className="relative mx-auto flex flex-col lg:flex-row gap-10 ">
        <div ref={ref} className="relative w-full">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 w-[3px] h-full bg-main-500 origin-top  left-[10px]"
          />
          <ul className="flex flex-col items-start justify-between gap-10 w-full isolate z-30">
            {experience.items.map((item) => (
              <Details
                key={item.id}
                position={item.position}
                company={item.company}
                companyLink={item.url}
                time={`${item.startDate} - ${item.endDate}`}
                address={item.address}
                work={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="mx-auto flex flex-col justify-between w-[90%] md:flex-row"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col md:flex-row items-center md:items-start"
      >
        <div>
          <h3 className="text-lg font-bold capitalize sm:text-xl">
            {position}&nbsp;
            <a
              href={companyLink}
              target="_blank"
              className="capitalize text-main-300"
            >
              @{company}
            </a>
          </h3>
          <span className="font-medium capitalize text-dark/75 xs:text-sm">
            {time} | {address}
          </span>
          <p className="w-full font-medium md:text-sm mt-2">{work}</p>
        </div>
      </motion.div>
    </li>
  );
};
