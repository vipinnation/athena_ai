"use client";
import { motion } from "framer-motion";
import React from "react";

const ZoomInComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      className=" tracking-tighter"
      initial={{ scale: 3 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInComponent;
