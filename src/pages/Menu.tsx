import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Flame, Leaf, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Tout" },
  { id: "entrees", name: "Entrées" },
  { id: "soupes", name: "Soupes" },
  { id: "wok", name: "Wok & Sautés" },
  { id: "curry", name: "Currys" },
  { id: "nouilles", name: "Nouilles" },
  { id: "riz", name: "Riz" },
  { id: "desserts", name: "Desserts" },
  { id: "boissons", name: "Boissons" },
];

const menuItems = [
  // Entrées
  {
    id: 1,
    category: "entrees",
    name: "Nems au Poulet",
    description: "4 nems croustillants au poulet, servis avec sauce nuoc mam",
    price: "6,50 €",
    image: "/images/menu/nems.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 2,
    category: "entrees",
    name: "Satay de Poulet",
    description: "Brochettes de poulet marinées, sauce cacahuète maison",
    price: "8,90 €",
    image: "/images/menu/satay.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 3,
    category: "entrees",
    name: "Rouleaux de Printemps",
    description: "Rouleaux frais aux crevettes, menthe et vermicelles",
    price: "7,50 €",
    image: "/images/menu/rouleaux.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: false,
  },
  {
    id: 4,
    category: "entrees",
    name: "Som Tam",
    description: "Salade de papaye verte épicée, tomates, cacahuètes",
    price: "8,50 €",
    image: "/images/menu/som-tam.jpg",
    isSpicy: true,
    isVegetarian: true,
    isPopular: true,
  },
  // Soupes
  {
    id: 5,
    category: "soupes",
    name: "Tom Yum Kung",
    description: "Soupe épicée aux crevettes, citronnelle et galanga",
    price: "9,90 €",
    image: "/images/menu/tom-yum.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 6,
    category: "soupes",
    name: "Tom Kha Kai",
    description: "Soupe de poulet au lait de coco et galanga",
    price: "9,50 €",
    image: "/images/menu/tom-kha.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: false,
  },
  // Wok
  {
    id: 7,
    category: "wok",
    name: "Poulet Basil Thaï",
    description: "Poulet sauté au basilic thaï, piment et légumes",
    price: "12,90 €",
    image: "/images/menu/basil-chicken.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 8,
    category: "wok",
    name: "Bœuf Loc Lac",
    description: "Bœuf sauté à la sauce spéciale, oignons et poivrons",
    price: "14,90 €",
    image: "/images/menu/loc-lac.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 9,
    category: "wok",
    name: "Crevettes au Wok",
    description: "Crevettes sautées aux légumes croquants et gingembre",
    price: "15,90 €",
    image: "/images/menu/shrimp-wok.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: false,
  },
  {
    id: 10,
    category: "wok",
    name: "Légumes Sautés",
    description: "Mélange de légumes frais sautés au wok et sauce soja",
    price: "10,90 €",
    image: "/images/menu/veg-wok.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
  // Curry
  {
    id: 11,
    category: "curry",
    name: "Curry Vert Poulet",
    description: "Curry vert au lait de coco, bambou et basilic thaï",
    price: "13,50 €",
    image: "/images/menu/green-curry.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 12,
    category: "curry",
    name: "Curry Rouge Crevettes",
    description: "Curry rouge au lait de coco et crevettes",
    price: "15,50 €",
    image: "/images/menu/red-curry.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 13,
    category: "curry",
    name: "Curry Massaman",
    description: "Curry doux au bœuf, pommes de terre et cacahuètes",
    price: "14,90 €",
    image: "/images/menu/massaman.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: false,
  },
  {
    id: 14,
    category: "curry",
    name: "Curry Jaune Végétarien",
    description: "Curry jaune au lait de coco et légumes variés",
    price: "12,50 €",
    image: "/images/menu/yellow-curry.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
  // Nouilles
  {
    id: 15,
    category: "nouilles",
    name: "Pad Thai Classique",
    description: "Nouilles de riz sautées au choix: poulet, crevettes ou tofu",
    price: "12,90 €",
    image: "/images/menu/pad-thai.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 16,
    category: "nouilles",
    name: "Pad Thai Crevettes",
    description: "Pad Thai aux grosses crevettes et cacahuètes",
    price: "14,90 €",
    image: "/images/menu/pad-thai-shrimp.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 17,
    category: "nouilles",
    name: "Pad See Ew",
    description: "Larges nouilles de riz sautées à la sauce soja noire",
    price: "12,50 €",
    image: "/images/menu/pad-see-ew.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: false,
  },
  {
    id: 18,
    category: "nouilles",
    name: "Drunken Noodles",
    description: "Nouilles sautées épicées au basilic thaï",
    price: "13,50 €",
    image: "/images/menu/drunken-noodles.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: false,
  },
  // Riz
  {
    id: 19,
    category: "riz",
    name: "Riz Sauté Thaï",
    description: "Riz sauté aux œufs, légumes et choix de protéine",
    price: "11,90 €",
    image: "/images/menu/fried-rice.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 20,
    category: "riz",
    name: "Riz à l'Ananas",
    description: "Riz sauté servi dans un ananas avec crevettes et noix de cajou",
    price: "14,90 €",
    image: "/images/menu/pineapple-rice.jpg",
    isSpicy: false,
    isVegetarian: false,
    isPopular: true,
  },
  {
    id: 21,
    category: "riz",
    name: "Kao Pad Krapao",
    description: "Riz sauté au basilic thaï et viande hachée épicée",
    price: "12,50 €",
    image: "/images/menu/kao-pad.jpg",
    isSpicy: true,
    isVegetarian: false,
    isPopular: false,
  },
  // Desserts
  {
    id: 22,
    category: "desserts",
    name: "Mango Sticky Rice",
    description: "Riz gluant au lait de coco avec mangue fraîche",
    price: "6,90 €",
    image: "/images/menu/mango-rice.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 23,
    category: "desserts",
    name: "Beignets de Banane",
    description: "Bananes frites caramélisées avec glace vanille",
    price: "5,90 €",
    image: "/images/menu/banana-fritter.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
  {
    id: 24,
    category: "desserts",
    name: "Glace Coco Maison",
    description: "Glace artisanale à la noix de coco",
    price: "4,50 €",
    image: "/images/menu/coconut-ice.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
  // Boissons
  {
    id: 25,
    category: "boissons",
    name: "Thai Iced Tea",
    description: "Thé thaï glacé au lait concentré sucré",
    price: "4,50 €",
    image: "/images/menu/thai-tea.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 26,
    category: "boissons",
    name: "Jus de Coco Frais",
    description: "Eau de coco fraîche servie dans la noix",
    price: "5,50 €",
    image: "/images/menu/coconut-ice.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: true,
  },
  {
    id: 27,
    category: "boissons",
    name: "Smoothie Mangue",
    description: "Smoothie onctueux à la mangue fraîche",
    price: "5,00 €",
    image: "/images/menu/mango-rice.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
  {
    id: 28,
    category: "boissons",
    name: "Bière Singha",
    description: "Bière blonde thaïlandaise 33cl",
    price: "4,50 €",
    image: "/images/menu/thai-tea.jpg",
    isSpicy: false,
    isVegetarian: true,
    isPopular: false,
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-thai-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/menu-hero.jpg"
              alt="Menu Thai Land Square"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-thai-dark/80 to-thai-dark" />
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
              Notre Carte
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Le Menu
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Découvrez nos plats authentiques préparés avec des ingrédients frais 
              et des recettes traditionnelles thaïlandaises.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-0 z-40 bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all",
                    activeCategory === category.id
                      ? "bg-thai-gold text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-16 bg-thai-cream">
          <div className="container mx-auto px-4">
            {/* Legend */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-thai-red rounded-full flex items-center justify-center">
                  <Flame className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Épicé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-thai-green rounded-full flex items-center justify-center">
                  <Leaf className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Végétarien</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-thai-gold rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Populaire</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      {item.isPopular && (
                        <div className="w-7 h-7 bg-thai-gold rounded-full flex items-center justify-center">
                          <Star className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {item.isSpicy && (
                        <div className="w-7 h-7 bg-thai-red rounded-full flex items-center justify-center">
                          <Flame className="w-4 h-4 text-white" />
                        </div>
                      )}
                      {item.isVegetarian && (
                        <div className="w-7 h-7 bg-thai-green rounded-full flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="absolute bottom-3 right-3 bg-white text-thai-dark font-bold px-3 py-1.5 rounded-lg shadow-md text-sm">
                      {item.price}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-thai-dark mb-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Aucun plat trouvé dans cette catégorie.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Allergies Notice */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-thai-cream rounded-2xl p-8">
              <h3 className="font-heading text-xl font-bold text-thai-dark mb-4">
                Information Allergènes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nos plats peuvent contenir des allergènes (arachides, crustacés, soja, gluten, sésame, etc.). 
                Pour toute question concernant les allergènes ou les ingrédients de nos plats, 
                n'hésitez pas à demander à notre équipe.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
