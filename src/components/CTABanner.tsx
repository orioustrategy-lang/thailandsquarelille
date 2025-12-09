import { Link } from "react-router-dom";
import { Gift, Star, ArrowRight, Smartphone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-black mb-1">
                PROGRAMME FIDÉLITÉ
              </h2>
              <p className="text-white/80 text-lg">
                Gagnez des points et obtenez des récompenses exclusives !
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-white fill-current" />
              <Star className="w-5 h-5 text-white fill-current" />
              <Star className="w-5 h-5 text-white fill-current" />
              <Star className="w-5 h-5 text-white fill-current" />
              <Star className="w-5 h-5 text-white fill-current" />
              <span className="font-bold text-white ml-2">4.8/5</span>
            </div>
            <Link 
              to="/menu" 
              className="bg-white text-slate-900 font-bold px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <Smartphone className="w-5 h-5" />
              COMMANDER
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
