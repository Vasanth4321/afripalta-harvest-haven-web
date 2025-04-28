
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import { Fruit, Leaf, SunMedium, ShieldCheck, Clock, Truck } from "lucide-react";

const FreshFruits = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Fresh Avocados"
        subtitle="Premium quality avocados grown with sustainable practices"
        backgroundImage="https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=2070&auto=format&fit=crop"
        height="medium"
      />

      {/* Introduction */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Premium Avocados from Our Farm to Your Table</h2>
              <p className="text-muted-foreground mb-6">
                At Afripalta, we take pride in growing and exporting the finest avocados. Our 2000-acre farm uses sustainable practices to produce high-quality Hass and Jumbo avocados that are sought after both locally and internationally.
              </p>
              <p className="text-muted-foreground mb-6">
                We specialize in Hass avocados, prized for their long shelf life and creamy texture, as well as Jumbo avocados, known for their impressive size and rich flavor. All our fruits are grown using organic fertilizers, ensuring they are free from harmful chemicals.
              </p>
              <p className="text-muted-foreground mb-8">
                From careful cultivation to selective harvesting and efficient distribution, we maintain the highest standards at every step to deliver fresh, delicious avocados to markets around the world.
              </p>
              <Button asChild className="bg-afri-green hover:bg-afri-green-light">
                <Link to="/contact">Inquire About Our Fruits</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-afri-brown-light rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1628483368858-32d5eb052741?q=80&w=2070&auto=format&fit=crop" 
                alt="Fresh Avocados" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Varieties */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Avocado Varieties"
            subtitle="Premium selections grown with care for optimal flavor and quality"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1580912558776-bcc4f9f1703c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hass Avocados" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">Hass Avocados</h3>
                <p className="text-muted-foreground mb-6">
                  Our most popular export variety, Hass avocados are known for their exceptional taste and long shelf life. With pebbly skin that turns from green to purplish-black when ripe, they offer a rich, creamy texture and nutty flavor that's perfect for guacamole, salads, and spreading on toast.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <Fruit className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Weight: 140-200g</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <Leaf className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Oil Content: 18-25%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <SunMedium className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Season: Year-round</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <ShieldCheck className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Shelf Life: 2-3 weeks</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1589621316382-008455b857cd?q=80&w=2069&auto=format&fit=crop" 
                  alt="Jumbo Avocados" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-semibold mb-4">Jumbo Avocados</h3>
                <p className="text-muted-foreground mb-6">
                  Our impressive Jumbo avocados make a statement with their size and quality. With smooth, green skin and a buttery texture, they're ideal for larger serving portions in restaurants or for families. Their substantial flesh-to-seed ratio provides excellent value.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <Fruit className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Weight: 500g-1.5kg</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <Leaf className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Oil Content: 12-15%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <SunMedium className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Season: Seasonal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-afri-green-pale flex items-center justify-center mr-3">
                      <ShieldCheck className="h-5 w-5 text-afri-green" />
                    </div>
                    <span className="text-sm">Shelf Life: 1-2 weeks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="From Farm to Table"
            subtitle="Our meticulous process ensures only the highest quality avocados reach our customers"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-afri-green flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="font-serif text-xl font-semibold mt-4 mb-4">Sustainable Cultivation</h3>
                <p className="text-muted-foreground">
                  Our avocados are grown using organic fertilizers and sustainable farming practices that respect the environment and produce healthier fruits.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-afri-green flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="font-serif text-xl font-semibold mt-4 mb-4">Careful Harvesting</h3>
                <p className="text-muted-foreground">
                  Each avocado is hand-picked at the optimal time to ensure perfect ripeness and handled with care to prevent bruising.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-afri-green flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="font-serif text-xl font-semibold mt-4 mb-4">Rigorous Quality Control</h3>
                <p className="text-muted-foreground">
                  Our avocados undergo strict quality checks to ensure only the finest fruits make it to packaging, meeting international standards.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border h-full">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-afri-green flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="font-serif text-xl font-semibold mt-4 mb-4">Efficient Distribution</h3>
                <p className="text-muted-foreground">
                  Our streamlined logistics ensure that avocados reach their destination quickly while maintaining freshness and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Information */}
      <section className="py-16 md:py-24 px-4 bg-afri-green text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Export Excellence</h2>
              <p className="mb-6">
                Afripalta is a trusted exporter of premium avocados to markets across the globe. Our commitment to quality and sustainability has made us a preferred supplier for discerning buyers worldwide.
              </p>
              <p className="mb-8">
                We offer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Certification</h3>
                    <p className="text-white/90">
                      All our exports meet international quality and safety standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Timing</h3>
                    <p className="text-white/90">
                      Precise harvesting schedules ensure optimal ripeness upon arrival.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Logistics</h3>
                    <p className="text-white/90">
                      Efficient shipping solutions for both large and small orders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-afri-brown">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Sustainability</h3>
                    <p className="text-white/90">
                      Eco-friendly packaging and carbon-offset shipping options.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild variant="outline" className="bg-white text-afri-green hover:bg-afri-brown-light">
                <Link to="/contact">Contact Our Export Team</Link>
              </Button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?q=80&w=2070&auto=format&fit=crop" 
                alt="Export Packaging" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Quality Standards"
            subtitle="We adhere to the highest standards to ensure premium quality in every avocado"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="font-serif text-xl font-semibold mb-4">Grade A Classification</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Uniform size and shape</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Unblemished skin</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Optimal oil content</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Perfect stem cut</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="font-serif text-xl font-semibold mb-4">Safety & Testing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Regular pesticide testing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Microbial analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>No harmful chemicals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Clean handling facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-border">
              <h3 className="font-serif text-xl font-semibold mb-4">Freshness Guarantee</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Cold chain management</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Careful ripening control</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Quick distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-2">✓</span>
                  <span>Optimized packaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-afri-brown-light">
        <div className="container mx-auto">
          <SectionHeader
            title="What Our Clients Say"
            subtitle="Trusted by importers, retailers, and distributors worldwide"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4 text-afri-brown">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <p className="italic mb-6 text-muted-foreground">
                "Afripalta's avocados consistently exceed our expectations. Their commitment to quality and sustainability aligns perfectly with our values. Their Hass avocados are a favorite among our customers."
              </p>
              <p className="font-medium">- European Gourmet Foods, Netherlands</p>
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
                "As a premium grocery chain, we demand the highest quality produce. Afripalta delivers exceptional avocados that have helped us build a loyal customer base who specifically ask for their fruit."
              </p>
              <p className="font-medium">- Fresh Market Chain, Middle East</p>
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
                "We've been working with Afripalta for three years, and their consistency is remarkable. Their Jumbo avocados are a standout product, and their commitment to ethical farming practices is commendable."
              </p>
              <p className="font-medium">- Organic Food Distributor, Japan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Ready to Experience Premium Avocados?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're a retailer, distributor, or food service provider, we offer flexible solutions to meet your avocado needs.
          </p>
          <Button asChild size="lg" className="bg-afri-green hover:bg-afri-green-light">
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default FreshFruits;
