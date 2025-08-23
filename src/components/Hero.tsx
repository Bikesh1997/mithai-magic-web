import { Button } from "@/components/ui/button";
import heroSweetsBg from "@/assets/hero-sweets-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroSweetsBg})`,
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-saffron rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-16 w-12 h-12 bg-sweetPink rounded-full animate-bounce-gentle opacity-50"></div>
      <div className="absolute bottom-32 left-20 w-20 h-20 bg-gold rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Welcome to the
            <span className="block text-gradient-saffron text-stroke">
              World of Mithai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
            Experience the sweetest journey through traditional Indian sweets crafted with love and heritage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-hero text-lg px-10 py-6 rounded-full">
              🍬 Explore Our Sweets
            </Button>
            <Button variant="outline" className="text-white border-white/30 hover:bg-white hover:text-saffron font-semibold px-8 py-6 rounded-full backdrop-blur-sm">
              📞 Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;