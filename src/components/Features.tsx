import { Truck, Clock, UtensilsCrossed, MapPin, Smartphone, Star } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "SUR PLACE",
    description: "Ambiance authentique",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Truck,
    title: "LIVRAISON",
    description: "En 30 min max",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Clock,
    title: "CLICK & COLLECT",
    description: "Prêt en 15 min",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MapPin,
    title: "5 RESTAURANTS",
    description: "À Lille & métropole",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Star,
    title: "4.8/5 ÉTOILES",
    description: "+2500 avis",
    gradient: "from-amber-400 to-amber-600"
  },
];

export default function Features() {
  return (
    <section className="py-6 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start lg:justify-center gap-6 lg:gap-10 overflow-x-auto pb-2 scrollbar-hide">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 min-w-max group cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-xs">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
