import { Link } from "react-router-dom";
import { Flame, Star, Plus, Clock, ArrowRight } from "lucide-react";

const specialties = [
  {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Nouilles de riz sautées au wok avec crevettes, œuf, tofu, cacahuètes",
    price: "12,90 €",
    image: "/images/dishes/pad-thai.jpg",
    isSpicy: false,
    isPopular: true,
    prepTime: "12 min",
    rating: 4.8,
  },
  {
    id: "curry-vert",
    name: "Curry Vert",
    description: "Curry au lait de coco, légumes frais et herbes thaïlandaises",
    price: "13,50 €",
    image: "/images/dishes/curry-vert.jpg",
    isSpicy: true,
    isPopular: true,
    prepTime: "15 min",
    rating: 4.9,
  },
  {
    id: "tom-yum",
    name: "Tom Yum",
    description: "Soupe épicée aux crevettes, citronnelle, galanga et combava",
    price: "11,90 €",
    image: "/images/dishes/tom-yum.jpg",
    isSpicy: true,
    isPopular: false,
    prepTime: "10 min",
    rating: 4.7,
  },
  {
    id: "satay",
    name: "Poulet Satay",
    description: "Brochettes de poulet marinées, sauce cacahuète maison",
    price: "10,50 €",
    image: "/images/dishes/satay.jpg",
    isSpicy: false,
    isPopular: true,
    prepTime: "8 min",
    rating: 4.6,
  },
  {
    id: "som-tam",
    name: "Som Tam",
    description: "Salade de papaye verte épicée avec cacahuètes",
    price: "9,90 €",
    image: "/images/dishes/som-tam.jpg",
    isSpicy: true,
    isPopular: false,
    prepTime: "5 min",
    rating: 4.5,
  },
  {
    id: "wok-royal",
    name: "Wok Royal",
    description: "Viandes et fruits de mer sautés au wok avec légumes",
    price: "15,90 €",
    image: "/images/dishes/wok-royal.jpg",
    isSpicy: false,
    isPopular: true,
    prepTime: "12 min",
    rating: 4.8,
  },
];

export default function Specialties() {
  return (
    <section id="specialties" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
              ⭐ Les favoris
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Best-Sellers</span>
            </h2>
          </div>
          <Link 
            to="/menu" 
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:gap-4 transition-all"
          >
            Voir tout le menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((dish) => (
            <Link
              key={dish.id}
              to={`/product/${dish.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {dish.isPopular && (
                    <span className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      TOP
                    </span>
                  )}
                  {dish.isSpicy && (
                    <span className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Flame className="w-3 h-3" />
                    </span>
                  )}
                </div>

                {/* Quick info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-white text-sm">
                      <Clock className="w-4 h-4" />
                      {dish.prepTime}
                    </span>
                    <span className="flex items-center gap-1 text-white text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      {dish.rating}
                    </span>
                  </div>
                </div>

                {/* Add Button */}
                <button className="absolute bottom-4 right-4 bg-white text-slate-900 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:bg-amber-500 hover:text-white">
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-lg font-black text-amber-600 whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>
                <p className="text-slate-500 text-sm line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/menu" 
            className="inline-flex items-center gap-3 bg-slate-900 text-white font-bold px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            DÉCOUVRIR TOUT LE MENU
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
