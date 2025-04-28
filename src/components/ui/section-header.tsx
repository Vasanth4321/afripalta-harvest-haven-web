
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  alignment = "center",
  className
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-10 md:mb-12",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right"
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
