import Hero from "@/components/Hero";
import SweetShowcase from "@/components/SweetShowcase";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SweetShowcase />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
