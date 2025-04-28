
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import { CheckCircle2, Heart, ShieldCheck, Droplet, Leaf, Sprout, Sun } from "lucide-react";

const AvocadoOil = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Premium Avocado Oil"
        subtitle="First of its kind, extracted using innovative vacuum technology"
        backgroundImage="https://images.unsplash.com/photo-1612200133338-9c592960de1f?q=80&w=2070&auto=format&fit=crop"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Cold-Pressed Perfection</h2>
              <p className="text-muted-foreground mb-6">
                At Afripalta, we're proud to offer premium, cold-pressed avocado oil that's extracted using our revolutionary vacuum technology – the first of its kind in the industry. This innovative process ensures maximum purity and preserves all the natural nutrients and benefits of avocados.
              </p>
              <p className="text-muted-foreground mb-6">
                Our avocado oil is derived from organically grown Hass avocados, cultivated with care on our 2000-acre farm. We use no harmful fertilizers, ensuring that every drop of oil is as pure and natural as possible.
              </p>
              <p className="text-muted-foreground mb-8">
                Powered by our solar energy plant, our oil extraction facilities represent the perfect harmony of modern technology and ecological responsibility.
              </p>
              <Button asChild className="bg-afri-green hover:bg-afri-green-light">
                <Link to="/contact">Inquire About Our Oil</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-afri-brown-light rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598016670894-8dc9a0e05995?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Avocado Oil" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vacuum Technology Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop" 
                alt="Vacuum Technology" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Revolutionary Vacuum Technology</h2>
              <p className="text-muted-foreground mb-6">
                Our proprietary vacuum technology is what sets Afripalta avocado oil apart. By extracting oil in a low-oxygen environment, we prevent oxidation and preserve the oil's natural properties, resulting in:
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                  <span>Higher concentration of nutrients and antioxidants</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                  <span>Better preservation of the oil's natural flavor</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                  <span>Extended shelf life without preservatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                  <span>Reduced environmental impact through energy-efficient processing</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground">
                This technology is the culmination of years of research and development, representing our commitment to innovation and excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Benefits of Our Avocado Oil"
            subtitle="Discover the natural goodness in every drop of our premium oil"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="mb-6 text-afri-green">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Heart Healthy</h3>
              <p className="text-muted-foreground">
                Rich in monounsaturated fats that support heart health and help maintain healthy cholesterol levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="mb-6 text-afri-green">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Antioxidant Rich</h3>
              <p className="text-muted-foreground">
                Packed with antioxidants that help neutralize free radicals and support overall cellular health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <div className="mb-6 text-afri-green">
                <Droplet className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Nutrient Absorption</h3>
              <p className="text-muted-foreground">
                Enhances absorption of fat-soluble nutrients from other foods when used in cooking and dressing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Production */}
      <section className="py-16 md:py-24 px-4 bg-afri-green text-white">
        <div className="container mx-auto">
          <SectionHeader
            title="Sustainable Production"
            subtitle="Our commitment to the environment in every step of production"
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Organic Farming</h3>
                    <p className="text-white/90">
                      We use only organic fertilizers in our avocado orchards, ensuring our oil is free from harmful chemicals and our soil remains healthy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Sun className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Solar Powered</h3>
                    <p className="text-white/90">
                      Our oil extraction facilities are powered by solar energy, reducing our carbon footprint and dependency on non-renewable energy sources.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Sprout className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Zero Waste</h3>
                    <p className="text-white/90">
                      We utilize every part of the avocado in our production process, with byproducts being recycled as organic compost for our farm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1628637307534-a6e7a65223f2?q=80&w=2070&auto=format&fit=crop" 
                alt="Sustainable Production" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products & Usage */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Avocado Oil Products"
            subtitle="Premium quality avocado oil for various uses"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
              <img 
                src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2070&auto=format&fit=crop" 
                alt="Culinary Avocado Oil" 
                className="rounded-lg w-full h-48 object-cover mb-6"
              />
              <h3 className="font-serif text-xl font-semibold mb-2">Culinary Avocado Oil</h3>
              <p className="text-muted-foreground mb-4">
                Perfect for cooking, salad dressings, and marinades. High smoke point makes it ideal for high-heat cooking.
              </p>
              <p className="text-afri-green font-medium">Available in 250ml, 500ml, and 1L bottles</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
              <img 
                src="https://images.unsplash.com/photo-1617500564225-2fc3a1753bc0?q=80&w=2070&auto=format&fit=crop" 
                alt="Infused Avocado Oils" 
                className="rounded-lg w-full h-48 object-cover mb-6"
              />
              <h3 className="font-serif text-xl font-semibold mb-2">Infused Avocado Oils</h3>
              <p className="text-muted-foreground mb-4">
                Our avocado oil infused with organic herbs and spices for added flavor complexity in your dishes.
              </p>
              <p className="text-afri-green font-medium">Available in Garlic, Chili, and Herb varieties</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border text-center">
              <img 
                src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop" 
                alt="Cosmetic Avocado Oil" 
                className="rounded-lg w-full h-48 object-cover mb-6"
              />
              <h3 className="font-serif text-xl font-semibold mb-2">Cosmetic Avocado Oil</h3>
              <p className="text-muted-foreground mb-4">
                Specially processed for skincare and haircare use. Rich in vitamins and antioxidants for natural beauty.
              </p>
              <p className="text-afri-green font-medium">Available in 100ml and 200ml bottles</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-afri-green hover:bg-afri-green-light">
              <Link to="/contact">Contact Us for Wholesale Inquiries</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-brown-light">
        <div className="container mx-auto">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Hear from those who have experienced the quality of our avocado oil"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4 text-afri-brown">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6 text-muted-foreground">
                "The quality of Afripalta's avocado oil is unmatched. I've been using it for cooking and in my salad dressings, and the flavor is exceptional. Knowing it's produced sustainably makes it even better."
              </p>
              <p className="font-medium">- Sarah Johnson, Chef</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4 text-afri-brown">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6 text-muted-foreground">
                "We've been importing Afripalta's avocado oil for our organic market for over two years now. Our customers love the quality, and we appreciate their commitment to sustainable farming."
              </p>
              <p className="font-medium">- Michael Brown, Organic Market Owner</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4 text-afri-brown">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6 text-muted-foreground">
                "I've been using Afripalta's cosmetic avocado oil in my skincare routine for months, and the difference in my skin is remarkable. It's pure, effective, and doesn't cause any irritation."
              </p>
              <p className="font-medium">- Emily Davis, Beauty Blogger</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Experience the Difference?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Contact us today to learn more about our premium avocado oil products, wholesale opportunities, or to place an order.
          </p>
          <Button asChild size="lg" className="bg-afri-green hover:bg-afri-green-light">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default AvocadoOil;
