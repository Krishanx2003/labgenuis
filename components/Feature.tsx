import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Feature {
  id: number;
  title: string;
  imagePath: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  description: string;
  buttonText: string;
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ title, description, buttonText, features }) => {
  return (
    
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
         <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">{title}</h1>
        <p className="mt-4 text-xl">{description}</p>
        <Button className="mt-8" variant="default">
          {buttonText}
        </Button>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => (
            <Card key={feature.id} >
              <CardContent>
                <img
                  alt={feature.title}
                  className="rounded-t-lg"
                  src={feature.imagePath}
                  style={{
                    aspectRatio: "350/200",
                    objectFit: "cover",
                  }}
                />
                <h3 className="text-2xl font-bold mt-4">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

  );
};

const features: Feature[] = [
  {
    id: 0,
    title: "Explore Cutting-Edge Projects",
    imagePath: "/post2.png",
    description: "Discover a variety of AI projects spanning computer vision, NLP, and more.",
  },
  {
    id: 1,
    title: "Access Powerful Development Tools",
    imagePath: "/post2.png",
    description: "Unlock a suite of robust AI tools and libraries for efficient development.",
  },
  {
    id: 2,
    title: "Join a Thriving Community",
    imagePath: "/post2.png",
    description: "Connect with AI enthusiasts, researchers, developers, and startups worldwide.",
  },
];

const App: React.FC = () => {
  return (
    <Features
      title="Dive Into AI Innovation"
      description="Embark on a Journey of Discovery and Creativity in Artificial Intelligence"
      buttonText="Get Started"
      features={features}
    />
  );
};

export default App;