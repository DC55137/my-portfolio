"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./lilcon.component";
import { experience } from "@/data/experience";
import Link from "next/link";

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
            className="absolute top-0 w-[3px] h-full bg-main-8 origin-top left-[10px]"
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
      <Link
        href={companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-5 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:transition-opacity"
      >
        <LiIcon reference={ref} />
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col pl-4 md:flex-row items-center md:items-start"
        >
          <div>
            <h3 className="text-lg font-bold capitalize sm:text-xl">
              {position}&nbsp;
              <p className="capitalize text-dimmed">@{company}</p>
            </h3>
            <span className="font-medium capitalize text-dark/75 xs:text-sm">
              {time} | {address}
            </span>
            <p className="w-full font-medium text-dimmed md:text-sm mt-2">
              {work}
            </p>
          </div>
        </motion.div>
      </Link>
    </li>
  );
};
