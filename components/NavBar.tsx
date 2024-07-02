"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {ThemeButton} from '@/components/ThemeButton';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        
      <Menu setActive={setActive}>
        <Link href="/" className="relative justify-center my-1">Home</Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Portfolio"
              href="/Porfolio"
              src=""
              description="Developer Portfolio website using Next.js"
            />
            <ProductItem
              title="Honours Project"
              href="/HonoursProject"
              src=""
              description="Leveraging the LLM ChatGPT for emotion detection in social media text"
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