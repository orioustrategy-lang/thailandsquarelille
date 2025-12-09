import { Link } from "react-router-dom";
import { Leaf, Flame, Award, ArrowRight, Play } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "FRAIS",
    description: "Ingrédients du jour",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Flame,
    title: "AUTHENTIQUE",
    description: "Recettes traditionnelles",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "QUALITÉ",
    description: "Épices importées",
    gradient: "from-amber-500 to-orange-500"
  },
];

export default function ConceptPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/restaurant/interior-1.jpg"
                alt="Notre restaurant"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              {/* Play button overlay */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all shadow-2xl group">
                <Play className="w-8 h-8 text-slate-900 ml-1 group-hover:text-amber-600" />
              </button>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-sm p-5 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg text-slate-900">Thai Land Square Fives</p>
                    <p className="text-slate-500">Notre restaurant principal</p>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-5 py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2"
                  >
                    VISITER
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              🇹🇭 Notre histoire
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              L'authenticité <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">thaïlandaise</span>
            </h2>
            
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Inspirés par les marchés animés de Bangkok et les saveurs authentiques 
              de la cuisine thaïlandaise, nous vous proposons une expérience culinaire 
              unique. Nos chefs utilisent des épices importées directement de Thaïlande.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {values.map((value) => (
                <div key={value.title} className="text-center p-4 bg-slate-50 rounded-2xl hover:shadow-lg transition-all group">
                  <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 mb-1">{value.title}</h3>
                  <p className="text-xs text-slate-500">{value.description}</p>
                </div>
              ))}
            </div>

            <Link 
              to="/concept" 
              className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all hover:shadow-xl"
            >
              DÉCOUVRIR NOTRE CONCEPT
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
