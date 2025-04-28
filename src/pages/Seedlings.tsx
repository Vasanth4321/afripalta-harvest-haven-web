
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import { CheckCircle2, Sprout, Leaf, PieChart } from "lucide-react";

const Seedlings = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Premium Avocado Seedlings"
        subtitle="Modern techniques for superior genetics and better production"
        backgroundImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2070&auto=format&fit=crop"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-afri-cream rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Seedlings" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Growing Tomorrow's Success Today</h2>
              <p className="text-muted-foreground mb-6">
                At Afripalta, our seedling business is dedicated to producing high-quality avocado seedlings using modern techniques like grafting to create plants with superior genetics and production capabilities.
              </p>
              <p className="text-muted-foreground mb-6">
                With annual sales of 200,000 to 300,000 seedlings, we've established ourselves as a trusted provider of premium avocado starts for commercial growers and home gardeners alike.
              </p>
              <p className="text-muted-foreground mb-8">
                Our seedlings are nurtured in our state-of-the-art nursery, where we maintain optimal conditions for healthy growth and development before they're ready for transplanting.
              </p>
              <Button asChild className="bg-afri-green hover:bg-afri-green-light">
                <Link to="/contact">Inquire About Seedlings</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Approach to Seedling Production"
            subtitle="Modern techniques combined with traditional knowledge for optimal results"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6 text-afri-green">
                <Sprout className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Expert Grafting</h3>
              <p className="text-muted-foreground">
                Our skilled horticulturists use advanced grafting techniques to combine the strongest rootstock with premium scions, ensuring each seedling has the best genetic foundation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6 text-afri-green">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Organic Cultivation</h3>
              <p className="text-muted-foreground">
                We nurture our seedlings using only organic fertilizers and natural pest management, creating healthy plants that thrive without harmful chemicals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6 text-afri-green">
                <PieChart className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Climate Adaptation</h3>
              <p className="text-muted-foreground">
                Our seedlings are specifically bred and acclimated to thrive in various climate conditions, making them more resilient and productive in different environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Varieties */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Seedling Varieties"
            subtitle="Premium avocado varieties selected for quality and productivity"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hass Avocado Seedlings" 
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Hass Avocado Seedlings</h3>
                  <p className="text-muted-foreground mb-4">
                    Our most popular variety, known for its creamy texture, excellent flavor, and long shelf life. Hass avocados are versatile for both oil production and fresh consumption.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Yields fruit within 3-4 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>High oil content (18-25%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Extended harvest season</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=2069&auto=format&fit=crop" 
                  alt="Jumbo Avocado Seedlings" 
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Jumbo Avocado Seedlings</h3>
                  <p className="text-muted-foreground mb-4">
                    These larger varietals produce impressive fruits with smooth, green skin and a rich, buttery flavor. Perfect for commercial growers looking for eye-catching products.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Produces large fruits (500g-1.5kg)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Higher water content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Excellent for fresh market sales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1551336841-04c2aa208e6a?q=80&w=2074&auto=format&fit=crop" 
                  alt="Fuerte Avocado Seedlings" 
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Fuerte Avocado Seedlings</h3>
                  <p className="text-muted-foreground mb-4">
                    A classic variety with pear-shaped fruits and a smooth, thin green skin. Known for its excellent oil quality and rich, nutty flavor.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Cold-hardy variety</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>High oil content (18-26%)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Earlier harvest season</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1631160299919-6a175aa6d189?q=80&w=2036&auto=format&fit=crop" 
                  alt="Reed Avocado Seedlings" 
                  className="w-full md:w-1/3 h-48 md:h-auto object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Reed Avocado Seedlings</h3>
                  <p className="text-muted-foreground mb-4">
                    Round, large fruits with a thick, green skin and exceptional flavor. This summer variety is known for its consistent bearing habits.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Late-season harvest</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Large seed-to-flesh ratio</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-afri-green mr-2 mt-1" />
                      <span>Heat tolerant</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Nursery */}
      <section className="py-16 md:py-24 px-4 bg-afri-green text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our State-of-the-Art Nursery</h2>
              <p className="mb-6">
                At the heart of our seedling business is our advanced nursery facility, designed to provide optimal growing conditions for young avocado plants. Here, our experts nurture each seedling from grafting to maturity.
              </p>
              <p className="mb-8">
                Our nursery features:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-brown mr-2 mt-1" />
                  <span>Climate-controlled environments for optimal growth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-brown mr-2 mt-1" />
                  <span>Advanced irrigation systems for precise watering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-brown mr-2 mt-1" />
                  <span>Solar-powered operations for sustainability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-afri-brown mr-2 mt-1" />
                  <span>Regular quality checks and disease prevention measures</span>
                </li>
              </ul>
              
              <p>
                Our commitment to quality begins in the nursery, where we lay the foundation for healthy, productive avocado trees that will thrive for decades.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2071&auto=format&fit=crop" 
                alt="Afripalta Nursery" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" 
                alt="Seedling Growth" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1551893665-f843f600794e?q=80&w=2076&auto=format&fit=crop" 
                alt="Grafting Process" 
                className="rounded-lg shadow-lg w-full h-auto object-cover mt-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1581088583196-92377676ead0?q=80&w=2070&auto=format&fit=crop" 
                alt="Seedling Care" 
                className="rounded-lg shadow-lg w-full h-auto object-cover mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planting Guide */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Avocado Planting Guide"
            subtitle="Expert tips for successfully establishing your avocado seedlings"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-afri-green text-xl font-bold">1</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Site Selection</h3>
              <p className="text-muted-foreground">
                Choose a well-drained location with protection from strong winds. Avocados thrive in full sun with some afternoon shade in hot regions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-afri-green text-xl font-bold">2</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Soil Preparation</h3>
              <p className="text-muted-foreground">
                Prepare soil with good drainage and organic matter. Avocados prefer slightly acidic to neutral pH levels (6.0-7.0).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-afri-green text-xl font-bold">3</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Planting</h3>
              <p className="text-muted-foreground">
                Dig a hole twice as wide as the root ball but no deeper. Plant at the same level as the seedling was in its container.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
              <div className="bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="text-afri-green text-xl font-bold">4</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-4">Aftercare</h3>
              <p className="text-muted-foreground">
                Water thoroughly after planting, but avoid overwatering. Apply mulch around the base, keeping it away from the trunk.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="hover:bg-afri-green hover:text-white">
              <Link to="/contact">Request Our Complete Planting Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-afri-brown-light">
        <div className="container mx-auto">
          <SectionHeader
            title="Success Stories"
            subtitle="Hear from farmers who have grown with our seedlings"
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
                "I started with 500 Hass seedlings from Afripalta three years ago. Today, my orchard is thriving with a 95% success rate and the first commercial harvest exceeded all expectations."
              </p>
              <p className="font-medium">- John Mwangi, Nakuru County</p>
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
                "The technical support provided along with Afripalta's seedlings made all the difference for our cooperative. The grafted varieties are producing consistent, high-quality fruit."
              </p>
              <p className="font-medium">- Mary Ochieng, Kisii Farmers Cooperative</p>
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
                "We've purchased seedlings from several suppliers, but Afripalta's are consistently the healthiest and most productive. Their Jumbo varieties have become our farm's signature product."
              </p>
              <p className="font-medium">- James Kamau, Export Farm Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Start Your Avocado Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're starting a commercial orchard or adding a few trees to your property, we have the perfect seedlings for your needs.
          </p>
          <Button asChild size="lg" className="bg-afri-green hover:bg-afri-green-light">
            <Link to="/contact">Contact Our Seedling Experts</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Seedlings;
