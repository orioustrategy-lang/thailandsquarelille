import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  Clock, 
  Flame, 
  Leaf, 
  Star, 
  Plus, 
  Minus, 
  ShoppingBag,
  Check,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

// Product data - in a real app this would come from an API
const products = {
  "pad-thai": {
    id: "pad-thai",
    name: "Pad Thai",
    description: "Notre célèbre Pad Thai, un classique de la cuisine thaïlandaise. Nouilles de riz sautées au wok avec des crevettes fraîches, du tofu croustillant, des œufs, le tout relevé de sauce tamarin et garni de cacahuètes concassées et citron vert frais.",
    price: 12.90,
    image: "/images/dishes/pad-thai.jpg",
    prepTime: "12-15 min",
    calories: "580 kcal",
    spicyLevel: 1,
    isVegetarian: false,
    isGlutenFree: false,
    rating: 4.8,
    reviewCount: 324,
    ingredients: [
      "Nouilles de riz",
      "Crevettes fraîches",
      "Tofu ferme",
      "Œufs",
      "Germes de soja",
      "Ciboule",
      "Cacahuètes concassées",
      "Sauce tamarin",
      "Sauce poisson",
      "Sucre de palme",
      "Citron vert",
      "Piment (optionnel)"
    ],
    allergens: ["Crustacés", "Œufs", "Arachides", "Soja"],
    nutritionInfo: {
      proteins: "28g",
      carbs: "65g",
      fats: "18g",
      fiber: "4g"
    },
    options: [
      { name: "Protéine", choices: ["Crevettes", "Poulet", "Tofu", "Bœuf"], extra: [0, 0, 0, 2] },
      { name: "Niveau d'épice", choices: ["Doux", "Moyen", "Fort", "Très fort"], extra: [0, 0, 0, 0] },
      { name: "Extras", choices: ["Double protéine +3€", "Légumes supplémentaires +1€", "Œuf au plat +1.50€"], extra: [3, 1, 1.5] }
    ]
  },
  "curry-vert": {
    id: "curry-vert",
    name: "Curry Vert",
    description: "Un curry vert crémeux et parfumé, préparé avec notre pâte de curry maison. Légumes croquants et viande tendre mijotés dans du lait de coco onctueux, parfumé au basilic thaï frais.",
    price: 13.50,
    image: "/images/dishes/curry-vert.jpg",
    prepTime: "15-18 min",
    calories: "620 kcal",
    spicyLevel: 3,
    isVegetarian: false,
    isGlutenFree: true,
    rating: 4.9,
    reviewCount: 256,
    ingredients: [
      "Pâte de curry vert maison",
      "Lait de coco",
      "Poulet fermier",
      "Aubergines thaï",
      "Pousses de bambou",
      "Haricots verts",
      "Basilic thaï",
      "Feuilles de combava",
      "Piment vert",
      "Riz jasmin parfumé"
    ],
    allergens: ["Lait de coco"],
    nutritionInfo: {
      proteins: "32g",
      carbs: "45g",
      fats: "28g",
      fiber: "6g"
    },
    options: [
      { name: "Protéine", choices: ["Poulet", "Bœuf", "Crevettes", "Tofu"], extra: [0, 2, 3, 0] },
      { name: "Niveau d'épice", choices: ["Doux", "Moyen", "Fort", "Thaï authentique"], extra: [0, 0, 0, 0] }
    ]
  },
  "tom-yum": {
    id: "tom-yum",
    name: "Tom Yum Kung",
    description: "La soupe emblématique de Thaïlande ! Un bouillon acidulé et épicé aux crevettes, parfumé à la citronnelle, au galanga et aux feuilles de combava. Un véritable voyage gustatif.",
    price: 11.90,
    image: "/images/dishes/tom-yum.jpg",
    prepTime: "10-12 min",
    calories: "280 kcal",
    spicyLevel: 4,
    isVegetarian: false,
    isGlutenFree: true,
    rating: 4.7,
    reviewCount: 189,
    ingredients: [
      "Crevettes tigres",
      "Citronnelle fraîche",
      "Galanga",
      "Feuilles de combava",
      "Champignons",
      "Tomates cerises",
      "Piment frais",
      "Sauce poisson",
      "Jus de citron vert",
      "Coriandre fraîche"
    ],
    allergens: ["Crustacés", "Poisson"],
    nutritionInfo: {
      proteins: "22g",
      carbs: "12g",
      fats: "8g",
      fiber: "3g"
    },
    options: [
      { name: "Version", choices: ["Tom Yum clair", "Tom Yum crémeux (+1€)"], extra: [0, 1] },
      { name: "Niveau d'épice", choices: ["Moyen", "Fort", "Très fort"], extra: [0, 0, 0] }
    ]
  }
};

// Reviews data
const reviews = [
  {
    id: 1,
    author: "Marie L.",
    avatar: "ML",
    rating: 5,
    date: "Il y a 2 jours",
    text: "Absolument délicieux ! Le Pad Thai est authentique et les saveurs sont parfaitement équilibrées. Je recommande vivement !",
    helpful: 12
  },
  {
    id: 2,
    author: "Thomas B.",
    avatar: "TB",
    rating: 5,
    date: "Il y a 1 semaine",
    text: "Meilleur restaurant thaï de Lille ! Les portions sont généreuses et le service rapide. J'y retourne chaque semaine.",
    helpful: 8
  },
  {
    id: 3,
    author: "Sophie M.",
    avatar: "SM",
    rating: 4,
    date: "Il y a 2 semaines",
    text: "Très bon mais un peu trop épicé pour moi. Pensez à demander moins pimenté si vous êtes sensible. Sinon, qualité au top !",
    helpful: 5
  }
];

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  
  const product = products[id as keyof typeof products];
  
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
            <Link to="/menu" className="text-amber-600 hover:underline">
              Retour au menu
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const calculateTotal = () => {
    let total = product.price;
    // Add extras based on selected options
    Object.entries(selectedOptions).forEach(([optionName, choiceIndex]) => {
      const option = product.options.find(o => o.name === optionName);
      if (option && option.extra[choiceIndex]) {
        total += option.extra[choiceIndex];
      }
    });
    return (total * quantity).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au menu
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="sticky top-24">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isVegetarian && (
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> Végétarien
                    </span>
                  )}
                  {product.isGlutenFree && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Sans gluten
                    </span>
                  )}
                </div>

                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="font-bold text-slate-800">{product.rating}</span>
                  <span className="text-slate-400 text-sm">({product.reviewCount})</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              {/* Title & Price */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 text-slate-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {product.prepTime}
                  </span>
                  <span>{product.calories}</span>
                  <span className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Flame 
                        key={i} 
                        className={`w-4 h-4 ${i < product.spicyLevel ? 'text-red-500' : 'text-slate-200'}`} 
                      />
                    ))}
                  </span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-6">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-black text-slate-900">{product.price.toFixed(2)} €</span>
                </div>
              </div>

              {/* Options */}
              {product.options.map((option) => (
                <div key={option.name} className="mb-6">
                  <h3 className="font-bold text-slate-900 mb-3">{option.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {option.choices.map((choice, index) => (
                      <button
                        key={choice}
                        onClick={() => setSelectedOptions({...selectedOptions, [option.name]: index})}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedOptions[option.name] === index
                            ? 'bg-amber-500 text-white'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-500'
                        }`}
                      >
                        {choice}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center bg-white rounded-full border border-slate-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:text-amber-600 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 px-8 rounded-full hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-3">
                  <ShoppingBag className="w-5 h-5" />
                  AJOUTER • {calculateTotal()} €
                </button>
              </div>

              {/* Ingredients */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-500" />
                  Ingrédients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span 
                      key={ingredient}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              <div className="bg-red-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Allergènes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen) => (
                    <span 
                      key={allergen}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>

              {/* Nutrition */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Valeurs Nutritionnelles</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionInfo.proteins}</div>
                    <div className="text-xs text-slate-500">Protéines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionInfo.carbs}</div>
                    <div className="text-xs text-slate-500">Glucides</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionInfo.fats}</div>
                    <div className="text-xs text-slate-500">Lipides</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600">{product.nutritionInfo.fiber}</div>
                    <div className="text-xs text-slate-500">Fibres</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black text-slate-900">
                Avis Clients
              </h2>
              <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span className="font-bold text-slate-900">{product.rating}</span>
                <span className="text-slate-500">/ 5 ({product.reviewCount} avis)</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{review.author}</p>
                      <p className="text-sm text-slate-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{review.text}</p>
                  <button className="text-sm text-slate-500 hover:text-amber-600 flex items-center gap-1">
                    <Check className="w-4 h-4" />
                    Utile ({review.helpful})
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
