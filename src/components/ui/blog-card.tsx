
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author: string;
  className?: string;
}

const BlogCard = ({
  image,
  title,
  excerpt,
  date,
  slug,
  author,
  className,
}: BlogCardProps) => {
  return (
    <article className={cn("overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all", className)}>
      <Link to={`/blog/${slug}`} className="block aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
        
        <h3 className="font-serif text-xl font-semibold mb-2">
          <Link to={`/blog/${slug}`} className="hover:text-afri-green transition-colors">
            {title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
        
        <Link 
          to={`/blog/${slug}`} 
          className="text-sm font-medium text-afri-green hover:text-afri-green/80 inline-flex items-center"
        >
          Read More 
          <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
