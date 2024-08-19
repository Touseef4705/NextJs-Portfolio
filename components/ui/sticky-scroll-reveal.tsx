import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    button?: string;
    content?: React.ReactNode | any;
    imageUrl?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <>
      <motion.div
        className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 no-scrollbar max-w-screen-xl mx-auto"
        style={{ backgroundColor: "#191A19" }}
        ref={ref}
      >
        <div className="div relative flex items-start px-4 max-w-6xl w-full">
          <div className="max-w-xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  href={item.button}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold flex items-center justify-center gap-2 mt-4 rounded-md bg-[#4E9F3D] text-xs p-2 w-[150px]"
                >
                  Live Preview <FaLink className="font-bold text-lg" />
                </motion.a>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          className={cn(
            "hidden md:block md:h-[70%] lg:h-[80%] w-[90%] lg:w-[80%] rounded-md bg-white sticky top-0 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard]?.content ?? null}
          {content[activeCard]?.imageUrl && (
            <Image
              src={content[activeCard]?.imageUrl || ""}
              alt={content[activeCard]?.title || ""}
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>
      </motion.div>
    </>
  );
};
