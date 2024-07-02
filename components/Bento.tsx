import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

const Bento = () => {

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
      );
      const items = [
        {
          title: "Developer Porfolio Website",
          description: "Created a website using Next.js and Aceturnity UI Components.",
          header: <Skeleton />,
          className: "md:col-span-2",
          img: "",
          imgClassName:"",
          href:"",
        },
        {
          title: "Honours Project",
          description: "Leveraging a LLM for emotion detection on social media posts.",
          header: <Skeleton />,
          className: "md:col-span-1",
          img: "./HonoursProjectImage.PNG",
          imgClassName:"",
          href:"",
        },
      ];
    return (
        <div className="py-20 relative" id="Projects">

            <h1 className="heading mt-20">
                A small selection of{" "}
                <span className="relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">recent projects</span>
            </h1>

            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          href={item.href}
        />
      ))}

    </BentoGrid>

        </div>
    );
}

export default Bento