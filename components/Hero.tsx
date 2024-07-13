import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton';

const Hero = () => {
    return (
        <div className="pb-20 pt-40">
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center 
            justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white
                [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className="tracking-widest text-sm text-center text-black-100 dark:text-blue-100 max-w-80">
                        Hello, my name is
                    </h2>
                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-8xl" words="Jessica Tan" />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        I&apos;m a Software Developer based in Ottawa, ON
                    </p>
                    <a href="#Projects"><MagicButton title="View my Projects"/></a>
                </div>
            </div>
        </div>
    )
}

export default Hero