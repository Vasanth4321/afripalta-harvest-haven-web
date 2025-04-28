
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import BlogCard from "@/components/ui/blog-card";
import { Search } from "lucide-react";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Sustainable Farming Practices at Afripalta",
    excerpt: "Learn about the organic farming methods we use to grow premium avocados while protecting our environment and supporting local communities.",
    date: "April 15, 2025",
    author: "John Doe",
    slug: "sustainable-farming-practices",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop",
    category: "Farming"
  },
  {
    id: 2,
    title: "Community Water Project Completion",
    excerpt: "We're proud to announce the completion of our latest borehole project, bringing clean water to over 500 families in our community.",
    date: "April 10, 2025",
    author: "Jane Smith",
    slug: "community-water-project",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2070&auto=format&fit=crop",
    category: "Community"
  },
  {
    id: 3,
    title: "The Benefits of Cold-Pressed Avocado Oil",
    excerpt: "Discover the nutritional benefits of our cold-pressed avocado oil and how our vacuum technology preserves its quality and health properties.",
    date: "April 5, 2025",
    author: "Michael Johnson",
    slug: "benefits-cold-pressed-avocado-oil",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=2334&auto=format&fit=crop",
    category: "Products"
  },
  {
    id: 4,
    title: "Avocado Seedling Care: Expert Tips",
    excerpt: "Learn how to care for your avocado seedlings to ensure they grow into healthy, productive trees with abundant fruit production.",
    date: "March 28, 2025",
    author: "Emily Wilson",
    slug: "avocado-seedling-care",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop",
    category: "Farming"
  },
  {
    id: 5,
    title: "Green Energy: Our Solar Power Journey",
    excerpt: "Discover how we've implemented solar energy throughout our operations to reduce our carbon footprint and create a more sustainable business.",
    date: "March 20, 2025",
    author: "Robert Green",
    slug: "green-energy-solar-power",
    image: "https://images.unsplash.com/photo-1617480088922-235a8250bc89?q=80&w=2070&auto=format&fit=crop",
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Meet Our Farm Families",
    excerpt: "Get to know the dedicated families who live and work on our 2000-acre farm, contributing to our success and building their futures.",
    date: "March 15, 2025",
    author: "Sarah Johnson",
    slug: "meet-our-farm-families",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop",
    category: "Community"
  },
  {
    id: 7,
    title: "Avocado Varieties: A Complete Guide",
    excerpt: "Learn about the different avocado varieties we grow at Afripalta, their unique characteristics, and best uses in cooking and consumption.",
    date: "March 8, 2025",
    author: "David Miller",
    slug: "avocado-varieties-guide",
    image: "https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=2069&auto=format&fit=crop",
    category: "Products"
  },
  {
    id: 8,
    title: "Grafting Techniques for Better Yields",
    excerpt: "Explore the advanced grafting techniques we use to create stronger, more productive avocado trees that yield premium quality fruit.",
    date: "February 28, 2025",
    author: "Thomas Garcia",
    slug: "grafting-techniques-better-yields",
    image: "https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=2076&auto=format&fit=crop",
    category: "Farming"
  },
  {
    id: 9,
    title: "Expanding Our Export Markets",
    excerpt: "Afripalta is proud to announce expansion into new international markets, bringing our premium avocados to more consumers worldwide.",
    date: "February 20, 2025",
    author: "Patricia Lee",
    slug: "expanding-export-markets",
    image: "https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?q=80&w=2070&auto=format&fit=crop",
    category: "Business"
  }
];

// Unique categories for filter
const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Afripalta Blog"
        subtitle="Insights, updates, and stories from our farm and community"
        backgroundImage="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2070&auto=format&fit=crop"
        height="small"
      />

      {/* Blog Filters */}
      <section className="py-8 px-4 bg-afri-brown-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category 
                      ? "bg-afri-green hover:bg-afri-green-light" 
                      : "bg-white hover:bg-afri-green hover:text-white"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="w-full md:w-64 relative">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard
                  key={post.id}
                  image={post.image}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  author={post.author}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-serif font-semibold mb-4">No matching articles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto max-w-3xl text-center">
          <SectionHeader
            title="Stay Updated"
            subtitle="Subscribe to our newsletter for the latest news, articles, and updates from Afripalta"
          />
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow"
              required
            />
            <Button className="bg-afri-green hover:bg-afri-green-light">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            By subscribing, you'll receive monthly updates on our latest news and events. You can unsubscribe at any time.
          </p>
        </div>
      </section>
    </>
  );
};

export default Blog;
