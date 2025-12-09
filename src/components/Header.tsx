import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "MENU", href: "/menu" },
  { name: "RESTAURANTS", href: "/restaurants" },
  { name: "ACTUALITÉS", href: "/actualites" },
  { name: "CONCEPT", href: "/concept" },
  { name: "FIDÉLITÉ", href: "/fidelite" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages that should have solid header background
  const solidBackgroundPages = ['/restaurants', '/menu', '/concept', '/fidelite', '/contact', '/product', '/actualites', '/article'];
  const hasSolidBackground = solidBackgroundPages.some(page => location.pathname.startsWith(page)) || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      hasSolidBackground 
        ? "bg-slate-900 shadow-lg shadow-black/10" 
        : "bg-transparent"
    )}>
      {/* Top Bar - Only visible on large screens when not scrolled */}
      <div className={cn(
        "hidden lg:block transition-all duration-300 overflow-hidden",
        hasSolidBackground ? "h-0" : "h-10"
      )}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full text-sm text-white/70">
            <div className="flex items-center gap-6">
              <a href="tel:+33320123456" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                03 20 12 34 56
              </a>
              <span className="text-white/30">|</span>
              <span>Livraison 7j/7 • 11h30 - 22h30</span>
            </div>
            <div className="flex items-center gap-4">
              <span>🇹🇭 Cuisine Thaïlandaise Authentique</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-10">
            <img 
              src="/images/logo.png"
              alt="Thai Land Square" 
              className="h-10 lg:h-14 w-auto"
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all",
                  location.pathname === item.href
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-white/80 hover:text-white transition-colors p-2.5 hover:bg-white/10 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white/80 hover:text-white transition-colors p-2.5 hover:bg-white/10 rounded-full relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <Link 
              to="/menu" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              COMMANDER
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden fixed inset-0 bg-slate-900/98 backdrop-blur-xl transition-all duration-300 pt-20",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-4 px-6 font-bold text-lg tracking-wide transition-all rounded-xl",
                  location.pathname === item.href
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "text-white/80 hover:bg-white/10"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 py-4 px-6 border-t border-white/10 mt-4">
              <button className="text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-full">
                <User className="w-6 h-6" />
              </button>
              <button className="text-white/80 hover:text-white transition-colors p-3 bg-white/5 rounded-full relative">
                <ShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl text-center flex items-center justify-center gap-3 mt-4 shadow-lg shadow-amber-500/30"
            >
              <MapPin className="w-5 h-5" />
              COMMANDER
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
