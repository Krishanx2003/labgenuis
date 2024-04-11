'use client'
import { createContext } from 'react'
import { BackgroundGradient } from "../../../components/ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";


interface CardData {
  imageUrl: string;
  title: string;
}

const cardData: CardData[] = [
  {
    imageUrl: "/icons/github.png",
    title: "Chat with Labgenius community members!",
  },
  {
    imageUrl: "/icons/discord.png",
    title: "Chat with Labgenius community members!",
  },
  {
    imageUrl: "/icons/github.png",
    title: "Chat with Labgenius community members!",
  },
  // Add more card data objects here as needed
];

const Community: React.FC = () => {
  return (
    <div className="grid grid-cols-1 pt-14 px-16 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {cardData.map((card, index) => (
    <div key={index}>
      <BackgroundGradient className="rounded-[20px] pt-0.5 sm:p-4 bg-white dark:bg-zinc-900">
        <Image
          src={card.imageUrl}
          alt={card.title}
          height={100} // Adjusted height
          width={200}  // Adjusted width
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {card.title}
        </p>
      </BackgroundGradient>
    </div>
  ))}
</div>

  );
}

export default Community;
