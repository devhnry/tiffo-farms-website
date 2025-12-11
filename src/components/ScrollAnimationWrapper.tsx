"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean; // allow controlling 'once'
  alwaysRender?: boolean; // new: keep children in DOM
  rest?: React.HTMLAttributes<HTMLDivElement>;
}

const ScrollAnimationWrapper = ({
                                  children,
                                  className = "",
                                  once = true,
                                  alwaysRender = false,
                                  ...rest
                                }: ScrollAnimationWrapperProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-120px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView || alwaysRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;