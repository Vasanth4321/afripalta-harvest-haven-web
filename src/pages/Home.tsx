
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import ProductCard from "@/components/ui/product-card";
import FeatureCard from "@/components/ui/feature-card";
import BlogCard from "@/components/ui/blog-card";
import { Leaf, Droplet, Sprout, Sun, Grape, CheckCircle2, Users } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="From Nature, For Nature"
        subtitle="Premium organic avocado products grown with care for people and the environment"
        backgroundImage="https://images.unsplash.com/photo-1580912558776-bcc4f9f1703c?q=80&w=2070&auto=format&fit=crop"
        height="large"
      >
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-afri-green hover:bg-afri-green-light">
            <Link to="/about">Learn More</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-afri-green">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </HeroSection>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-afri-brown-light rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Welcome to Afripalta</h2>
              <p className="text-muted-foreground mb-6">
                At Afripalta, we're committed to sustainable farming practices that benefit both our community and the environment. Our 2000-acre farm isn't just a place where we grow premium avocados – it's the heart of a vibrant community where over 1,000 dedicated members live and work.
              </p>
              <p className="text-muted-foreground mb-8">
                From our cold-pressed avocado oil extracted using innovative vacuum technology to our premium seedlings and fresh fruits, everything we do is guided by our commitment to quality, sustainability, and community support.
              </p>
              <Button asChild className="bg-afri-green hover:bg-afri-green-light">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Premium Products" 
            subtitle="Explore our range of sustainable, organic products grown with care on our 2000-acre farm"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              image="https://images.unsplash.com/photo-1598016670894-8dc9a0e05995?q=80&w=2070&auto=format&fit=crop"
              title="Cold-Pressed Avocado Oil"
              description="Premium quality, cold-pressed avocado oil extracted using our innovative vacuum technology for maximum purity and nutritional value."
              href="/avocado-oil"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop"
              title="Premium Seedlings"
              description="High-quality avocado seedlings produced using modern techniques like grafting for better plant genes and superior production."
              href="/seedlings"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop"
              title="Fresh Avocados"
              description="We export premium Hass and Jumbo avocados known for their exceptional taste, quality, and long shelf life."
              href="/fresh-fruits"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Why Choose Afripalta" 
            subtitle="Our commitment to sustainability, quality, and community sets us apart"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Leaf className="w-10 h-10" />}
              title="Organic Farming"
              description="We use only organic fertilizers, ensuring our products are free from harmful chemicals."
            />
            <FeatureCard
              icon={<Sun className="w-10 h-10" />}
              title="Green Energy"
              description="Our facilities are powered by solar energy, reducing our carbon footprint."
            />
            <FeatureCard
              icon={<Droplet className="w-10 h-10" />}
              title="Vacuum Technology"
              description="First-of-its-kind vacuum technology for extracting the purest avocado oil."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10" />}
              title="Community Support"
              description="We provide infrastructure like boreholes for clean drinking water to support our community."
            />
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-green text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Farm: More Than Just Agriculture</h2>
              <p className="mb-4">
                Our 2000-acre farm is not just a place where we grow premium avocados – it's the heart of a vibrant community. It's a place where the land and the people are woven together in a shared vision of growth, care, and prosperity.
              </p>
              <p className="mb-8">
                More than 1,000 dedicated members of our extended family live and work on the farm, and every person is treated with the respect and care they deserve.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Organic farming practices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Solar-powered facilities</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Community housing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Clean water initiatives</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Sustainable practices</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-afri-brown mr-2 mt-1" />
                  <span>Education support</span>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild variant="outline" className="bg-white text-afri-green hover:bg-afri-brown-light">
                  <Link to="/about">Explore Our Farm</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1595229296623-b68e335c0cdd?q=80&w=987&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover mt-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader 
            title="Latest From Our Blog" 
            subtitle="Stay updated with our latest news, farming tips, and community stories"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop"
              title="Sustainable Farming Practices at Afripalta"
              excerpt="Learn about the organic farming methods we use to grow premium avocados while protecting our environment."
              date="April 15, 2025"
              slug="sustainable-farming-practices"
              author="John Doe"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=2070&auto=format&fit=crop"
              title="Community Water Project Completion"
              excerpt="We're proud to announce the completion of our latest borehole project, bringing clean water to over 500 families."
              date="April 10, 2025"
              slug="community-water-project"
              author="Jane Smith"
            />
            <BlogCard 
              image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=2334&auto=format&fit=crop"
              title="The Benefits of Cold-Pressed Avocado Oil"
              excerpt="Discover the nutritional benefits of our cold-pressed avocado oil and how our vacuum technology preserves its quality."
              date="April 5, 2025"
              slug="benefits-cold-pressed-avocado-oil"
              author="Michael Johnson"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="hover:bg-afri-green hover:text-white">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-brown-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Experience Afripalta?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're interested in our premium avocado oil, seedlings, or fresh fruits, we'd love to hear from you. Contact us today to learn more about our products and services.
          </p>
          <Button asChild size="lg" className="bg-afri-green hover:bg-afri-green-light">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
