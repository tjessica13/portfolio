"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export function HeroHighlightComponent({text}:{text:string}) {
  return (
        <Highlight className="text-center text-[40px] md:text-5xl lg:text-6xl text-white">
          {text}
        </Highlight>
  );
}
