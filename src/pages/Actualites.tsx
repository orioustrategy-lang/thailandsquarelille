import { useState, useEffect, useRef } from "react";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WHATSAPP_NUMBER = "33777714604";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite passer une commande chez Thai Land Square !";

const articles = [
  {
    id: 1,
    title: "L'histoire de Thai Land Square : De Bangkok à Lille",
    excerpt: "Découvrez comment notre passion pour la cuisine thaïlandaise authentique nous a amenés à ouvrir notre premier restaurant à Lille en 2018...",
    image: "/images/restaurant/interior-1.jpg",
    category: "Histoire",
    date: "2024-12-01",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Nouveau : Les Pad Thai aux crevettes géantes",
    excerpt: "Nous sommes fiers de vous présenter notre nouvelle création : le Pad Thai aux crevettes géantes, directement importées de Thaïlande...",
    image: "/images/dishes/pad-thai.jpg",
    category: "Nouveauté",
    date: "2024-11-28",
    readTime: "3 min",
  },
  {
    id: 3,
    title: "Ouverture de notre 5ème restaurant à Villeneuve d'Ascq",
    excerpt: "Thai Land Square continue son expansion dans la métropole lilloise avec l'ouverture de notre nouveau restaurant au Centre Commercial V2...",
    image: "/images/restaurant/interior-2.jpg",
    category: "Actualité",
    date: "2024-11-15",
    readTime: "4 min",
  },
  {
    id: 4,
    title: "Les secrets du curry vert thaïlandais",
    excerpt: "Plongez dans les origines du curry vert, l'un des plats les plus emblématiques de la cuisine thaïlandaise, et découvrez nos techniques ancestrales...",
    image: "/images/dishes/curry-vert.jpg",
    category: "Recettes",
    date: "2024-11-10",
    readTime: "6 min",
  },
  {
    id: 5,
    title: "Thai Land Square récompensé aux Trophées de la Restauration",
    excerpt: "Nous sommes honorés d'avoir reçu le prix de la Meilleure Cuisine Asiatique aux Trophées de la Restauration des Hauts-de-France 2024...",
    image: "/images/concept/kitchen-1.jpg",
    category: "Récompense",
    date: "2024-10-25",
    readTime: "3 min",
  },
  {
    id: 6,
    title: "Le Songkran : Nouvel An Thaïlandais chez Thai Land Square",
    excerpt: "Chaque année en avril, nous célébrons le Songkran avec des animations spéciales et des plats traditionnels. Retour sur l'édition 2024...",
    image: "/images/restaurant/dishes.jpg",
    category: "Événement",
    date: "2024-10-15",
    readTime: "4 min",
  },
];

const categories = ["Tous", "Histoire", "Actualité", "Nouveauté", "Recettes", "Événement", "Récompense"];

// Hook pour les animations au scroll
function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

// Composant Article Card avec animation
function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        to={`/article/${article.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100"
      >
        <div className="h-52 overflow-hidden relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-slate-500 text-sm line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 text-slate-900 text-sm font-semibold group-hover:gap-3 transition-all">
            Lire la suite
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = filteredArticles.filter(a => !a.featured);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Actualités | Thai Land Square - Nouveautés et Événements"
        description="Suivez toute l'actualité de Thai Land Square : nouveaux plats, ouvertures de restaurants, événements et promotions. Restez informés des dernières nouvelles de vos restaurants thaïlandais préférés à Lille."
        keywords="actualités thai land square, news restaurant thai lille, nouveaux plats thai, événements restaurant thailandais, promotions thai lille"
        canonicalUrl="https://thailandsquarelille.com/actualites"
        ogImage="/images/restaurant/interior-1.jpg"
      />
      <Header />
      
      <main className="flex-1 pt-24">
        {/* Hero Section - Clean & Minimal */}
        <section className="relative bg-slate-900 py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/restaurant/interior-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900" />

          <div 
            ref={heroRef}
            className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                Actualités
              </h1>
              <p className="text-slate-400 max-w-xl mx-auto text-lg">
                Restez informé des dernières nouvelles et événements de Thai Land Square
              </p>
            </div>

            {/* Featured Article */}
            {featuredArticle && (
              <Link 
                to={`/article/${featuredArticle.id}`}
                className={`block group max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-80 overflow-hidden">
                      <img 
                        src={featuredArticle.image} 
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                          À LA UNE
                        </span>
                        <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-slate-500 mb-6 line-clamp-3">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredArticle.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <div className="mt-6 flex items-center gap-2 text-slate-900 font-semibold group-hover:gap-4 transition-all">
                        Lire l'article
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </section>

        {/* Category Filter - Clean */}
        <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-16">
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full font-medium transition-all ${
                    currentPage === page
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section - Simple & Clean */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Envie de commander ?
              </h2>
              <p className="text-slate-400 mb-10 text-lg">
                Passez votre commande directement via WhatsApp et recevez vos plats thaïlandais préférés.
              </p>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-green-500/30"
              >
                <MessageCircle className="w-6 h-6" />
                Commander sur WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
