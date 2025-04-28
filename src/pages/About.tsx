
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import { Users, Leaf, Heart, Award, SunMedium, Droplet, Home } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Afripalta"
        subtitle="Our story, mission, and commitment to sustainable farming and community development"
        backgroundImage="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=2334&auto=format&fit=crop"
        height="medium"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Afripalta was born from a vision to create a sustainable agricultural enterprise that would not only produce premium quality avocado products but also support the local community and protect the environment.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a small farm has now grown into a 2000-acre operation that is home to more than 1,000 dedicated workers and their families. We've pioneered innovative techniques in avocado farming and processing, including being the first to use vacuum technology for oil extraction.
              </p>
              <p className="text-muted-foreground">
                Today, Afripalta stands as a model for sustainable agriculture, community development, and eco-friendly business practices in East Africa and beyond.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-afri-cream rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=2071&auto=format&fit=crop" 
                alt="Afripalta Farm" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Mission & Values"
            subtitle="Guided by principles of sustainability, community, and excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-afri-green-pale flex items-center justify-center">
                <Leaf className="h-8 w-8 text-afri-green" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to environmentally friendly farming practices that preserve and enhance the land for future generations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-afri-green-pale flex items-center justify-center">
                <Users className="h-8 w-8 text-afri-green" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Community</h3>
              <p className="text-muted-foreground">
                We believe in supporting our community through fair employment, housing, and infrastructure development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-afri-green-pale flex items-center justify-center">
                <Award className="h-8 w-8 text-afri-green" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest quality in everything we do, from our farming practices to our products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Farm: A Community & Legacy"
            subtitle="More than just agriculture – a family, a community, a legacy"
          />

          <div className="prose max-w-none prose-lg md:prose-xl mx-auto">
            <p>
              At Afripalta, our 2000-acre farm is not just a place where we grow premium avocados – it's the heart of a vibrant community. It's a place where the land and the people are woven together in a shared vision of growth, care, and prosperity. Here, we don't just cultivate crops; we cultivate relationships, opportunities, and a brighter future for all.
            </p>
            
            <p>
              More than 1,000 dedicated members of our extended family live and work on the farm, and every person is treated with the respect and care they deserve. Our farm is a place of support and opportunity, where families are housed, fed, and empowered to thrive. We believe in providing more than just employment – we offer a home, a community, and a sense of belonging.
            </p>
            
            <p>
              We're deeply committed to the well-being of everyone who calls Afripalta home. That's why we've invested in vital infrastructure, including boreholes that provide clean, fresh drinking water for the community. Access to this life-changing resource helps ensure the health and prosperity of the families that live here, allowing them to focus on their work, their families, and their dreams.
            </p>
            
            <p>
              At Afripalta, the farm is not just a place of business – it's a testament to our commitment to creating lasting change and fostering a sense of unity. We don't just grow avocados; we grow hope, opportunity, and a sustainable future for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1595229296623-b68e335c0cdd?q=80&w=987&auto=format&fit=crop" 
              alt="Afripalta Farm" 
              className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1485637701894-09ad422f6de6?q=80&w=2076&auto=format&fit=crop" 
              alt="Afripalta Community" 
              className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1594499468121-f45e83e30df4?q=80&w=2070&auto=format&fit=crop" 
              alt="Water Resources" 
              className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop" 
              alt="Farm Workers" 
              className="rounded-lg shadow-lg w-full h-48 md:h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-green text-white">
        <div className="container mx-auto">
          <SectionHeader
            title="Our Sustainability Practices"
            subtitle="Leading the way in eco-friendly farming and production"
            className="text-white"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="mb-4 text-afri-brown">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Organic Farming</h3>
              <p className="text-white/90">
                We use only organic fertilizers in our farming practices, ensuring our products are free from harmful chemicals and our soil remains healthy for generations to come.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="mb-4 text-afri-brown">
                <SunMedium className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Solar Energy</h3>
              <p className="text-white/90">
                Our facilities are powered by solar energy, reducing our carbon footprint and dependency on non-renewable energy sources.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
              <div className="mb-4 text-afri-brown">
                <Droplet className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Water Conservation</h3>
              <p className="text-white/90">
                We implement water conservation techniques and have installed boreholes to provide clean water for our community while managing this precious resource responsibly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Community Impact</h2>
              <p className="text-muted-foreground mb-6">
                At Afripalta, we believe that our success is intricately tied to the wellbeing of the communities we serve. That's why we've invested in more than just our farm – we've invested in people.
              </p>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <Home className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Housing</h3>
                    <p className="text-muted-foreground">
                      We provide quality housing for our workers and their families, creating a true community on our farm.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Droplet className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Clean Water</h3>
                    <p className="text-muted-foreground">
                      Our borehole projects provide clean, fresh drinking water for the community, ensuring health and prosperity.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <Heart className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Support Programs</h3>
                    <p className="text-muted-foreground">
                      We run various support programs to empower our community members, including education initiatives and skills development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=2070&auto=format&fit=crop" 
                alt="Afripalta Community" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
