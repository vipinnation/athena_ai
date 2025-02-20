"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const GradientLearn: React.FC = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <h1
          className={cn(
            "text-center text-white font-bold leading-none tracking-[0.5rem]",
            "text-[200px] max-md:text-[40px]",
            "text-transparent bg-clip-text bg-gradient-to-br from-[#2A51B2] via-[#6684CC] to-[#061A4D]"
          )}
          style={{
            WebkitTextStroke: "6px transparent",
            WebkitBackgroundClip: "text",
            backgroundImage:
              "linear-gradient(214deg, #2A51B2 16.91%, #6684CC 39.28%, #061A4D 66.02%)",
              color:"white"
          }}
        >
          Computer Vision
        </h1>
      </motion.div>
    </div>
  );
};

export default GradientLearn;
