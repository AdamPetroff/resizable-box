"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";
import { cn } from "../utils";
import React from "react";
import useMeasure from "../useMeasure";

const duration = 0.3;

export default function ResizablePanel({
  children,
  tabValue,
  className,
}: PropsWithChildren & { tabValue?: string; className?: string }) {
  let [ref, { height }] = useMeasure();

  let animations: { [key: string]: Variants } = {
    fade: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: duration / 2, delay: duration / 2 },
      },
      exit: { opacity: 0, transition: { duration: duration / 2 } },
    },

    crossFade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },

    slide: {
      initial: { x: "100%", opacity: 0, scale: 0.75 },
      animate: { x: "0%", opacity: 1, scale: 1 },
      exit: { x: "-100%", opacity: 0, scale: 0.75 },
    },

    slideAndFade: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: "0%", opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden"
      animate={{ height: height || "auto" }}
      transition={{ duration }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={tabValue || JSON.stringify(children, ignoreCircularReferences())}
          {...animations["slideAndFade"]}
          transition={{ duration }}
          className={cn(height ? "absolute" : "relative", "w-full")}
        >
          <div ref={ref} className={cn("pb-8", className)}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.

  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: string) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
