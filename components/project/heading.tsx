import { XIcon as Icon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>; // Explicitly specify the type of icon
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: IconComponent,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          {IconComponent && <IconComponent className={cn("w-10 h-10", iconColor)} />}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
