
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  className?: string;
}

const ProductCard = ({
  image,
  title,
  description,
  href,
  className,
}: ProductCardProps) => {
  return (
    <div className={cn("overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all group", className)}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Button asChild variant="outline" className="hover:bg-afri-green hover:text-white">
          <Link to={href}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
