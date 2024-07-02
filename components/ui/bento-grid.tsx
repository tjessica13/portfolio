import { cn } from "@/utils/cn";
import MagicButton from '@/components/ui/MagicButton';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  href
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  href?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two for colour
        background: "rgb(4,7,29)",
        backgroundColor:"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className="group-hover/bento:translate-x-2 transition duration-200">
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg">
            {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
            </div>

            <div className="w-full mt-2">
            {img && (<img 
                src={img}
                alt={img}
                className={cn(imgClassName, 'object-cover, object-center')}
                />
                )}
            </div>

            <div className="flex items-center justify-between mt-2 mb-3">
                <div className="flex justify-center items-center">
                  <a href={href} className="flex lg:text-xl md:text-xs text-sm text-purple">
                    <u>Read More</u>
                  </a>
                </div>
            </div>

        </div>
    </div>
  );
};
