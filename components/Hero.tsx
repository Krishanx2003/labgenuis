
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-24">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-12">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-zinc-100 md:text-5xl lg:text-7xl">
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
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit shadcn/ui
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}