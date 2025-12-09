import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, MapPin, Navigation, Play } from "lucide-react";

const slides = [
  {
    image: "/images/hero-bg.jpg",
    title: "SAVEURS",
    subtitle: "THAÏLANDAISES",
    description: "Un voyage culinaire authentique au cœur de Lille",
    cta: "Découvrir le menu",
    link: "/menu"
  },
  {
    image: "/images/dishes/curry-vert.jpg",
    title: "CURRY",
    subtitle: "D'EXCEPTION",
    description: "Green, Red, Massaman - Nos currys signature préparés avec passion",
    cta: "Commander maintenant",
    link: "/menu"
  },
  {
    image: "/images/dishes/wok-royal.jpg",
    title: "WOK",
    subtitle: "& FRAÎCHEUR",
    description: "Légumes croquants et viandes tendres sautées minute",
    cta: "Voir nos plats",
    link: "/menu"
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [address, setAddress] = useState("");

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Ouvert maintenant • Livraison disponible
          </div>

          {/* Slide Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 leading-none">
            {slides[currentSlide].title}
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
            {slides[currentSlide].subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl">
            {slides[currentSlide].description}
          </p>

          {/* Address Input */}
          <div className="bg-white rounded-2xl p-2 max-w-xl flex items-center gap-2 shadow-2xl shadow-black/30 mb-8">
            <div className="flex-1 flex items-center gap-3 px-4">
              <MapPin className="w-5 h-5 text-amber-500" />
              <input
                type="text"
                placeholder="Entrez votre adresse de livraison..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full py-3 text-slate-800 placeholder-slate-400 outline-none text-base"
              />
            </div>
            <button className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3.5 rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/30">
              <Navigation className="w-5 h-5" />
              <span className="hidden sm:inline">COMMANDER</span>
            </button>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg"
            >
              VOIR LE MENU
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              NOS RESTAURANTS
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 rounded-full transition-all border border-white/20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Progress */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
          >
            <div className={`w-16 h-1.5 rounded-full transition-all overflow-hidden ${
              index === currentSlide ? "bg-white/30" : "bg-white/20"
            }`}>
              {index === currentSlide && (
                <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 animate-[progress_6s_linear]" 
                  style={{ animation: 'progress 6s linear' }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Side Stats */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-6">
        <div className="text-right">
          <div className="text-3xl font-black text-white">4.8</div>
          <div className="text-white/60 text-sm">★★★★★</div>
        </div>
        <div className="w-px h-12 bg-white/20 ml-auto" />
        <div className="text-right">
          <div className="text-3xl font-black text-white">5</div>
          <div className="text-white/60 text-sm">Restaurants</div>
        </div>
        <div className="w-px h-12 bg-white/20 ml-auto" />
        <div className="text-right">
          <div className="text-3xl font-black text-white">15</div>
          <div className="text-white/60 text-sm">min livraison</div>
        </div>
      </div>
    </section>
  );
}
