"use client";

import Hero from "@/components/Hero";
import {FloatingNav} from '@/components/ui/floating-navbar';
import Projects from '@/components/Projects';
import {navItems} from '@/data';
import NavBar from '@/components/NavBar';
import Bento from '@/components/Bento';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
