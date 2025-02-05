"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/moving-cards";
import AbodePng from "@/assets/images/Adobe.png";
import AtlassianPng from "@/assets/images/Atlassian.png";
import FigmaPng from "@/assets/images/Figma.png";
import FramerPng from "@/assets/images/Framer.png";
import GithubPng from "@/assets/images/GitHub.png";
import GitlabPng from "@/assets/images/GitLab.png";
import MixPanelPng from "@/assets/images/Mixpanel.png";
import MobbinPng from "@/assets/images/Mobbin.png";
import NotionPng from "@/assets/images/Notion.png";
import ProtopiePng from "@/assets/images/Protopie.png";
import VercelPng from "@/assets/images/Vercel.png";

export function Technologies() {
  return (
    <div className="flex items-center max-w-7xl mx-auto">
      <InfiniteMovingCards items={testimonials} direction="left" speed="fast" />
      <p className="uppercase text-xl">Technologies</p>
    </div>
  );
}

const testimonials = [
  {
    image: AbodePng.src,
    name: "Adobe",
  },
  {
    image: AtlassianPng.src,
    name: "Atlassian",
  },
  {
    image: FigmaPng.src,
    name: "Figma",
  },
  {
    image: FramerPng.src,
    name: "Framer",
  },
  {
    image: GithubPng.src,
    name: "Github",
  },
  {
    image: GitlabPng.src,
    name: "GitLab",
  },
  {
    image: MixPanelPng.src,
    name: "MixPanel",
  },
  {
    image: MobbinPng.src,
    name: "Mobbin",
  },
  {
    image: NotionPng.src,
    name: "Notion",
  },
  {
    image: ProtopiePng.src,
    name: "Protopie",
  },
  {
    image: VercelPng.src,
    name: "Vercel",
  },
];
