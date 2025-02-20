import { cn } from "@/lib/utils";
import React from "react";

const TextStorke: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h1
      className={cn(
        "text-center text-white font-bold leading-none tracking-[0.5rem]",
        "",
        "text-transparent bg-clip-text bg-gradient-to-br from-[#2A51B2] via-[#6684CC] to-[#061A4D]"
      )}
      style={{
        WebkitTextStroke: "3px transparent",
        WebkitBackgroundClip: "text",
        backgroundImage:
          "linear-gradient(214deg, #2A51B2 16.91%, #6684CC 39.28%, #061A4D 66.02%)",
        color: "white",
      }}
    >
      {title}
    </h1>
  );
};

export default TextStorke;
