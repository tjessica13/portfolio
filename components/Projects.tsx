
import {projects} from '@/data';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/utils/cn";

const Projects = () => {
    return (
        <div className="py-20 relative" id="Projects"> 
            <h1 className="heading mt-40 text-black dark:text-white">
                A small selection of{" "}
                <span className="relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    recent projects
                </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
                {projects.map((item, i) => (
                    <BackgroundGradient className="rounded-[22px] max-w-sm p-2 sm:p-5 bg-white dark:bg-zinc-900" key={i}>
                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                        {item.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {item.des}
                    </p>
                <div className="w-full mt-2">
                    {item.img && (
                        <img 
                        src={item.img}
                        alt={item.title}
                        className={cn('object-cover, object-center')}
                        />
                    )}
                </div>
                <button className="rounded-full pl-2 pr-2 py-2 text-purple flex items-center 
                space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Read more</span>
                </button>
                </BackgroundGradient>
                ))}
            </div>
        </div>
    );
}

export default Projects