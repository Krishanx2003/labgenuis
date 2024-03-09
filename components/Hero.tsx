
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center  p-8">
      <h1 className="text-6xl font-bold leading-tight text-center mb-6">
        Your hub for AI innovation, collaboration, and exploration
      </h1>
      <p className="text-xl leading-relaxed text-center mb-8">
        Discover groundbreaking projects, powerful tools, and connect with a vibrant community of AI enthusiasts,
        researchers, developers, and startups.
      </p>
      <Button className="bg-white text-black rounded-full px-8 py-3 font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
        Get Started
      </Button>
    </div>
  )
}

