const testimonials = [
  {
    quote: "The sweetest bite ever! These jalebis are pure magic! ✨",
    author: "Priya Sharma",
    location: "Mumbai",
    emoji: "😍",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "My family can't stop talking about the barfi! Absolutely divine! 💕",
    author: "Rajesh Kumar", 
    location: "Delhi",
    emoji: "🤤",
    rating: "⭐⭐⭐⭐⭐"
  },
  {
    quote: "The milk cake melted my heart! Best sweets in the city! 🍯",
    author: "Kavya Patel",
    location: "Bangalore", 
    emoji: "😋",
    rating: "⭐⭐⭐⭐⭐"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-saffron-light/10 via-sweetPink-light/10 to-milkyCream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-gradient-saffron mb-6">
            Sweet Memories 💝
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            What our happy customers are saying about us
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-sweet text-center group relative overflow-hidden"
              style={{
                animationDelay: `${index * 0.3}s`
              }}
            >
              {/* Quote Icon */}
              <div className="text-6xl text-saffron/20 mb-4 group-hover:text-saffron/40 transition-colors">
                "
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed italic">
                {testimonial.quote}
              </blockquote>
              
              {/* Rating */}
              <div className="text-2xl mb-4 group-hover:scale-110 transition-transform">
                {testimonial.rating}
              </div>
              
              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">{testimonial.emoji}</span>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-saffron to-gold rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-block card-sweet px-8 py-6">
            <h3 className="text-2xl font-bold text-gradient-sweet mb-2">
              Join Our Sweet Family! 🏠
            </h3>
            <p className="text-muted-foreground font-medium">
              Experience the joy that thousands of customers already know
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;