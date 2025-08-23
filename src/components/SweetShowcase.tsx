import jalebiIcon from "@/assets/jalebi-icon.jpg";
import barfiIcon from "@/assets/barfi-icon.jpg";
import milkcakeIcon from "@/assets/milkcake-icon.jpg";

const sweets = [
  {
    name: "Jalebi",
    description: "Golden spiral of pure joy! Crispy outside, syrupy sweet inside. Each bite takes you to dessert heaven.",
    image: jalebiIcon,
    color: "saffron",
    emoji: "🌀",
    gradient: "from-saffron to-gold"
  },
  {
    name: "Barfi",
    description: "Silky smooth squares of sweetness! Made with pure milk and love, these pink delights melt in your mouth.",
    image: barfiIcon,
    color: "sweetPink", 
    emoji: "💗",
    gradient: "from-sweetPink to-sweetPink-light"
  },
  {
    name: "Milk Cake",
    description: "Creamy clouds of comfort! Rich, dense, and absolutely divine. Perfect for celebrating life's sweet moments.",
    image: milkcakeIcon,
    color: "milkyCream",
    emoji: "🥛",
    gradient: "from-milkyCream to-white"
  }
];

const SweetShowcase = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-milkyCream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-gradient-sweet mb-6">
            Our Sweet Stars ✨
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Handcrafted with traditional recipes passed down through generations
          </p>
        </div>

        {/* Sweet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {sweets.map((sweet, index) => (
            <div 
              key={sweet.name}
              className="card-sweet group cursor-pointer"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Sweet Image */}
              <div className="relative mb-6">
                <div className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${sweet.gradient} p-2 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <img 
                    src={sweet.image} 
                    alt={sweet.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-2 -right-2 text-4xl animate-bounce-gentle">
                  {sweet.emoji}
                </div>
              </div>

              {/* Sweet Info */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-saffron transition-colors">
                  {sweet.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium mb-6">
                  {sweet.description}
                </p>
                
                {/* CTA */}
                <button className={`btn-secondary bg-gradient-to-r ${sweet.gradient} text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-all duration-300`}>
                  Order Now 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold text-foreground mb-4">
            Can't decide? Try our Sweet Combo! 🎁
          </p>
          <button className="btn-hero text-lg">
            Get All Three Sweets
          </button>
        </div>
      </div>
    </section>
  );
};

export default SweetShowcase;