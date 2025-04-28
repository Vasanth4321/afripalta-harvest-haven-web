
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
  imagePosition?: "left" | "right";
  height?: "small" | "medium" | "large" | "full";
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  className,
  children,
  imagePosition = "right",
  height = "medium",
}: HeroSectionProps) => {
  return (
    <section 
      className={cn(
        "relative overflow-hidden",
        {
          "h-[60vh]": height === "small",
          "h-[80vh]": height === "medium",
          "h-[90vh]": height === "large",
          "h-screen": height === "full",
        },
        className
      )}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-black/25"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      )}
      <div className="absolute inset-0 z-10 bg-black/30"></div>

      <div className="container h-full mx-auto px-4 relative z-20 flex items-center">
        <div className={cn(
          "max-w-2xl text-white",
          {
            "ml-auto text-right": imagePosition === "left",
            "mr-auto text-left": imagePosition === "right",
          }
        )}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl mb-8 text-white/90">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
