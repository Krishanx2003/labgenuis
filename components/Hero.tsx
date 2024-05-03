
import { Button } from "@/components/ui/button"
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-12">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        Harness the Power of AI, ML, and Data Science with AIHubPro
        </h1>
        <p className="text-zinc-500 sm:px-16 lg:px-48">
        we're more than just a platform – we're a gateway to innovation, exploration, and limitless possibilities.Dive into a world where artificial intelligence, machine learning, and data science converge to redefine what's possible.
        </p>
        <div className="mx-auto mt-10 flex max-w-xs flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
          <Button className="w-full">
            <a
              href="https://github.com/Krishanx2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add project
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://github.com/Krishanx2003"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Projects
            </a>
          </Button>
        </div>
      </div>
     <div className="flex flex-col overflow-hidden">
     <ContainerScroll
       titleComponent={
         <>
           <h1 className="text-4xl font-semibold py-0  bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
           Explore music, code, image recognition,  <br />
             {/* <span className="text-2xl md:text-[6rem] font-bold  leading-none  bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"> */}
              text analysis, and AI hosting.
          
           </h1>
         </>
       }
     >
       <Image
         src="/screenshot.png"
         alt="screenshot"
         height={720}
         width={1400}
         className="mx-auto rounded-2xl object-cover h-full object-left-top"
         draggable={false}
       />
     </ContainerScroll>
   </div>
   </section>
  );
}