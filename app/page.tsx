"use client";
import NavBar from '@/components/NavBar';
import Hero from "@/components/Hero";
import Projects from '@/components/Projects';
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
