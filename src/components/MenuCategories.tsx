import { Link } from "react-router-dom";
import { Sparkles, UtensilsCrossed, Flame, Soup, Salad, IceCream, Coffee } from "lucide-react";

const categories = [
  { 
    name: "NOUVEAUTÉS", 
    icon: Sparkles, 
    href: "/menu#nouveautes",
    gradient: "from-pink-500 to-rose-500"
  },
  { 
    name: "MENUS", 
    icon: UtensilsCrossed, 
    href: "/menu#menus",
    gradient: "from-amber-500 to-orange-500"
  },
  { 
    name: "PLATS SAUTÉS", 
    icon: Flame, 
    href: "/menu#plats",
    gradient: "from-orange-500 to-red-500"
  },
  { 
    name: "SOUPES", 
    icon: Soup, 
    href: "/menu#soupes",
    gradient: "from-red-500 to-pink-500"
  },
  { 
    name: "SALADES", 
    icon: Salad, 
    href: "/menu#salades",
    gradient: "from-emerald-500 to-teal-500"
  },
  { 
    name: "DESSERTS", 
    icon: IceCream, 
    href: "/menu#desserts",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    name: "BOISSONS", 
    icon: Coffee, 
    href: "/menu#boissons",
    gradient: "from-blue-500 to-cyan-500"
  },
];

export default function MenuCategories() {
  return (
    <section className="bg-slate-900 py-8 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-start lg:justify-center gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.href}
                className="flex flex-col items-center gap-3 min-w-[90px] group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-white/80 text-xs font-semibold tracking-wide whitespace-nowrap group-hover:text-white transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
