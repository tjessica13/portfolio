"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import {ThemeButton} from '@/components/ThemeButton';
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="./" className="relative justify-center my-1">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Portfolio"
              href="#Projects"
              description="Portfolio website using Next.js and Aceturnity UI components."
            />
            <ProductItem
              title="Honours Project"
              href="#Projects"
              description="Leveraging a LLM for emotion detection in social media data."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://www.linkedin.com/in/t-jessica/">LinkedIn</HoveredLink>
            <HoveredLink href="https://github.com/tjessica13">GitHub</HoveredLink>
          </div>
        </MenuItem>
        <ThemeButton />
      </Menu>
    </div>
  );
}

export default Navbar