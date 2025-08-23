import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-foreground via-foreground/95 to-foreground/90 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black text-gradient-saffron mb-4">
              Lalamathu Ram Halwai 🍬
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium">
              Crafting the finest Indian sweets since generations. Every bite tells a story of tradition, love, and pure sweetness.
            </p>
            <Button className="btn-hero">
              🛒 Order Now - Quick Delivery!
            </Button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-saffron">📞 Contact Us</h4>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center gap-2">
                <span>📱</span>
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>orders@lalamathuhalwai.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span>
                <span>Sweet Street, Mithai Market<br />Delhi, India 110001</span>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-sweetPink">⏰ Business Hours</h4>
            <div className="space-y-2 text-white/80">
              <p><strong>Mon - Sat:</strong> 8:00 AM - 10:00 PM</p>
              <p><strong>Sunday:</strong> 9:00 AM - 9:00 PM</p>
              <p className="text-saffron font-semibold mt-3">
                🚚 Same Day Delivery Available!
              </p>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="card-sweet bg-gradient-to-r from-saffron/10 to-sweetPink/10 border-saffron/20 mb-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-saffron mb-2">🎉 Special Offers</h4>
            <p className="text-white/90 mb-4">
              Order above ₹500 and get FREE delivery + 10% discount on your next order!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-saffron/20 text-saffron px-3 py-1 rounded-full text-sm font-semibold">
                #FreeDelivery
              </span>
              <span className="bg-sweetPink/20 text-sweetPink px-3 py-1 rounded-full text-sm font-semibold">
                #FreshDaily
              </span>
              <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                #PureIngredients
              </span>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a href="#" className="text-2xl hover:text-saffron transition-colors">📘</a>
            <a href="#" className="text-2xl hover:text-sweetPink transition-colors">📸</a>
            <a href="#" className="text-2xl hover:text-gold transition-colors">🐦</a>
            <a href="#" className="text-2xl hover:text-saffron transition-colors">📱</a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              © 2024 Lalamathu Ram Halwai. Made with 💕 and lots of sweetness.
            </p>
            <p className="text-white/40 text-xs mt-1">
              Bringing sweetness to families since 1950 ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;