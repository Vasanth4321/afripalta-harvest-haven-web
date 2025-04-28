
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HeroSection from "@/components/ui/hero-section";
import SectionHeader from "@/components/ui/section-header";
import ContactForm from "@/components/ui/contact-form";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team to learn more about our products and services"
        backgroundImage="https://images.unsplash.com/photo-1551636898-47668aa61de2?q=80&w=2034&auto=format&fit=crop"
        height="small"
      />

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8">Get In Touch</h2>
              <p className="text-muted-foreground mb-10">
                Whether you have questions about our products, want to place an order, or are interested in visiting our farm, we're here to help. Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Afripalta Farm<br />
                      P.O. Box 12345<br />
                      East Africa
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      +254 (0) 123 456 789<br />
                      +254 (0) 987 654 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      info@afripalta.com<br />
                      sales@afripalta.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 bg-afri-green-pale w-12 h-12 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-afri-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-afri-cream">
        <div className="container mx-auto">
          <SectionHeader
            title="Find Us"
            subtitle="Visit our farm to experience the beauty of sustainable agriculture"
          />
          
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            {/* This is a placeholder for a real map. In production, you would use Google Maps or another map provider */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-muted-foreground">Interactive Map Would Be Displayed Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Tours */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Visit Our Farm</h2>
              <p className="text-muted-foreground mb-6">
                We welcome visitors to our 2000-acre farm to experience firsthand our sustainable farming practices, meet our community, and learn about our production processes.
              </p>
              <p className="text-muted-foreground mb-8">
                Farm tours include:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-3">✓</span>
                  <span>Guided tour of our avocado orchards</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-3">✓</span>
                  <span>Visit to our seedling nursery</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-3">✓</span>
                  <span>Demonstration of our oil extraction process</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-afri-green-pale flex items-center justify-center text-afri-green font-bold mr-3">✓</span>
                  <span>Opportunity to meet our farm community</span>
                </li>
              </ul>
              <div className="space-y-4">
                <p className="font-medium">To schedule a tour, please contact us:</p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-afri-green mr-2" />
                  <span>+254 (0) 123 456 789</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-afri-green mr-2" />
                  <span>tours@afripalta.com</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-afri-brown-light rounded-full -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1595229296623-b68e335c0cdd?q=80&w=987&auto=format&fit=crop" 
                alt="Afripalta Farm Tour" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-afri-brown-light">
        <div className="container mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about our products and services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">Do you ship internationally?</h3>
              <p className="text-muted-foreground">
                Yes, we export our avocados and avocado oil to markets worldwide. Contact our export team for shipping options and pricing details.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">What makes your avocado oil special?</h3>
              <p className="text-muted-foreground">
                Our avocado oil is extracted using proprietary vacuum technology, which preserves nutrients and flavor. We also use only organic farming practices and solar power in our production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">How many seedlings can you supply?</h3>
              <p className="text-muted-foreground">
                We can supply from a few seedlings for home gardens to thousands for commercial orchards. Our annual production ranges from 200,000 to 300,000 seedlings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">Can I visit your farm?</h3>
              <p className="text-muted-foreground">
                Absolutely! We welcome visitors and offer guided tours of our farm, nursery, and production facilities. Please contact us in advance to schedule your visit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">Do you offer bulk pricing?</h3>
              <p className="text-muted-foreground">
                Yes, we offer competitive pricing for bulk orders of our avocados, oil, and seedlings. Contact our sales team for a customized quote.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-3">How do you support the local community?</h3>
              <p className="text-muted-foreground">
                We provide housing, clean water through boreholes, and employment to over 1,000 community members. We also invest in education and skills development initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
