import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight, Heart, MessageCircle, Bookmark, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const articles = [
  {
    id: 1,
    title: "L'histoire de Thai Land Square : De Bangkok à Lille",
    excerpt: "Découvrez comment notre passion pour la cuisine thaïlandaise authentique nous a amenés à ouvrir notre premier restaurant à Lille en 2018...",
    content: `
      <div class="article-intro">
        <p class="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
          Notre aventure a commencé dans les rues animées de Bangkok, où notre fondateur a découvert les saveurs uniques de la street food thaïlandaise. Cette passion l'a conduit à ramener ces saveurs authentiques dans le nord de la France.
        </p>
      </div>
      
      <div class="article-image my-12 rounded-2xl overflow-hidden shadow-xl">
        <img src="/images/concept/kitchen-1.jpg" alt="Notre cuisine" class="w-full h-80 object-cover" />
        <p class="text-center text-sm text-slate-500 py-3 bg-slate-50 italic">Notre cuisine, source d'inspiration pour Thai Land Square</p>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Les débuts à Bangkok
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        En 2015, lors d'un voyage en Thaïlande, notre fondateur <strong class="text-slate-900">Somchai Patel</strong> a été émerveillé par la richesse et la diversité de la cuisine de rue thaïlandaise. Des marchés nocturnes de Chiang Mai aux stands de Pad Thai de Bangkok, chaque saveur racontait une histoire.
      </p>
      
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-2xl">
        <p class="text-lg text-slate-700 italic">
          "J'ai passé des mois à apprendre les techniques traditionnelles auprès des meilleurs chefs de rue de Bangkok. Le secret réside dans la fraîcheur des ingrédients et le respect des recettes ancestrales."
        </p>
        <p class="mt-4 font-semibold text-amber-700">— Somchai Patel, Fondateur</p>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        L'arrivée à Lille en 2018
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        C'est en 2018 que Thai Land Square a ouvert ses portes pour la première fois dans le quartier de <strong class="text-slate-900">Fives à Lille</strong>. Le concept était simple : proposer une cuisine thaïlandaise authentique, préparée avec des ingrédients frais et des épices directement importées de Thaïlande.
      </p>

      <div class="grid md:grid-cols-2 gap-6 my-10">
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
            <span class="text-2xl">🍜</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Notre Mission</h3>
          <p class="text-slate-600">Faire voyager nos clients à travers leurs papilles, leur offrir un véritable voyage gustatif en Thaïlande.</p>
        </div>
        <div class="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-shadow">
          <div class="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
            <span class="text-2xl">🌿</span>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Notre Engagement</h3>
          <p class="text-slate-600">Des ingrédients frais sélectionnés quotidiennement, des épices authentiques importées de Thaïlande.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Une expansion rapide
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Le succès a été immédiat. Les Lillois ont adopté nos saveurs, et nous avons rapidement ouvert d'autres restaurants :
      </p>
      
      <div class="relative my-10 pl-8 border-l-2 border-amber-200">
        <div class="mb-8 relative">
          <div class="absolute -left-10 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow"></div>
          <span class="text-amber-600 font-bold text-sm">2018</span>
          <h4 class="text-lg font-semibold text-slate-900">Premier restaurant à Lille Fives</h4>
          <p class="text-slate-600">Notre aventure lilloise commence avec l'ouverture de notre premier restaurant rue Pierre Legrand.</p>
        </div>
        <div class="mb-8 relative">
          <div class="absolute -left-10 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow"></div>
          <span class="text-amber-600 font-bold text-sm">2019</span>
          <h4 class="text-lg font-semibold text-slate-900">Expansion à Lille Centre</h4>
          <p class="text-slate-600">Fort de notre succès, nous ouvrons notre deuxième adresse au cœur de Lille, rue de Béthune.</p>
        </div>
        <div class="mb-8 relative">
          <div class="absolute -left-10 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow"></div>
          <span class="text-amber-600 font-bold text-sm">2020</span>
          <h4 class="text-lg font-semibold text-slate-900">Ouverture à Wazemmes</h4>
          <p class="text-slate-600">Malgré la pandémie, nous restons confiants et ouvrons notre troisième restaurant.</p>
        </div>
        <div class="mb-8 relative">
          <div class="absolute -left-10 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow"></div>
          <span class="text-amber-600 font-bold text-sm">2022</span>
          <h4 class="text-lg font-semibold text-slate-900">Nouveau restaurant Vieux-Lille</h4>
          <p class="text-slate-600">Le charme du Vieux-Lille accueille désormais nos saveurs thaïlandaises authentiques.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-10 w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow"></div>
          <span class="text-amber-600 font-bold text-sm">2024</span>
          <h4 class="text-lg font-semibold text-slate-900">5ème restaurant - Centre Commercial V2</h4>
          <p class="text-slate-600">Notre dernière ouverture à Villeneuve d'Ascq marque une nouvelle étape dans notre développement.</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Nos valeurs
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Aujourd'hui, Thai Land Square reste fidèle à ses valeurs fondatrices :
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div class="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
          <span class="text-4xl mb-3 block">🎯</span>
          <h4 class="font-bold text-slate-900">Authenticité</h4>
          <p class="text-sm text-slate-600 mt-1">Recettes traditionnelles</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
          <span class="text-4xl mb-3 block">🥬</span>
          <h4 class="font-bold text-slate-900">Fraîcheur</h4>
          <p class="text-sm text-slate-600 mt-1">Ingrédients du jour</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
          <span class="text-4xl mb-3 block">⭐</span>
          <h4 class="font-bold text-slate-900">Qualité</h4>
          <p class="text-sm text-slate-600 mt-1">Épices importées</p>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
          <span class="text-4xl mb-3 block">💚</span>
          <h4 class="font-bold text-slate-900">Accessibilité</h4>
          <p class="text-sm text-slate-600 mt-1">Prix justes</p>
        </div>
      </div>
      
      <div class="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-10 rounded-3xl my-12 text-center">
        <h3 class="text-2xl md:text-3xl font-bold mb-4">Rejoignez l'aventure Thai Land Square !</h3>
        <p class="text-white/70 mb-6 max-w-lg mx-auto">Notre aventure continue, et nous sommes fiers de partager notre passion avec vous chaque jour.</p>
        <a href="/restaurants" class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all">
          Découvrir nos restaurants
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
      </div>
    `,
    image: "/images/restaurant/interior-1.jpg",
    category: "Histoire",
    date: "2024-12-01",
    readTime: "5 min",
    author: "Équipe Thai Land Square",
    authorImage: "/images/logo.png",
    featured: true,
    likes: 124,
    comments: 18,
  },
  {
    id: 2,
    title: "Nouveau : Les Pad Thai aux crevettes géantes",
    excerpt: "Nous sommes fiers de vous présenter notre nouvelle création : le Pad Thai aux crevettes géantes, directement importées de Thaïlande...",
    content: `
      <div class="article-intro">
        <p class="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
          Notre chef a travaillé pendant plusieurs mois pour créer cette version premium de notre célèbre Pad Thai, utilisant des crevettes géantes tigre directement importées des côtes thaïlandaises.
        </p>
      </div>
      
      <div class="article-image my-12 rounded-2xl overflow-hidden shadow-xl">
        <img src="/images/dishes/pad-thai.jpg" alt="Pad Thai aux crevettes géantes" class="w-full h-80 object-cover" />
        <p class="text-center text-sm text-slate-500 py-3 bg-slate-50 italic">Notre nouvelle création : le Pad Thai aux crevettes géantes</p>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Des crevettes d'exception
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Nos crevettes tigre géantes sont sélectionnées pour leur <strong class="text-slate-900">taille exceptionnelle</strong> et leur chair tendre. Elles sont pêchées de manière responsable dans le golfe de Thaïlande et livrées fraîches chaque semaine.
      </p>

      <div class="grid md:grid-cols-3 gap-6 my-10">
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
          <span class="text-5xl mb-4 block">🦐</span>
          <h3 class="font-bold text-slate-900 text-lg">Taille XXL</h3>
          <p class="text-slate-600 text-sm mt-2">Crevettes de 15-20cm sélectionnées à la main</p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
          <span class="text-5xl mb-4 block">🌊</span>
          <h3 class="font-bold text-slate-900 text-lg">Pêche durable</h3>
          <p class="text-slate-600 text-sm mt-2">Pêchées de manière responsable en Thaïlande</p>
        </div>
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center">
          <span class="text-5xl mb-4 block">✈️</span>
          <h3 class="font-bold text-slate-900 text-lg">Fraîcheur garantie</h3>
          <p class="text-slate-600 text-sm mt-2">Livrées fraîches chaque semaine par avion</p>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Une recette revisitée
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Le Pad Thai traditionnel est sublimé par ces crevettes d'exception. Notre chef a ajusté les proportions de sauce tamarin et de cacahuètes pour créer un équilibre parfait avec la saveur délicate des crevettes.
      </p>
      
      <div class="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-3xl my-10 text-center">
        <p class="text-2xl font-bold mb-2">Disponible dès maintenant !</p>
        <p class="text-white/80">Dans tous nos restaurants • À partir de 16,90€</p>
      </div>
    `,
    image: "/images/dishes/pad-thai.jpg",
    category: "Nouveauté",
    date: "2024-11-28",
    readTime: "3 min",
    author: "Chef Somchai",
    authorImage: "/images/logo.png",
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    title: "Ouverture de notre 5ème restaurant à Villeneuve d'Ascq",
    excerpt: "Thai Land Square continue son expansion dans la métropole lilloise avec l'ouverture de notre nouveau restaurant au Centre Commercial V2...",
    content: `
      <div class="article-intro">
        <p class="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
          Nous sommes ravis d'annoncer l'ouverture de notre 5ème restaurant au cœur du Centre Commercial V2 à Villeneuve d'Ascq !
        </p>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Un emplacement stratégique
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Situé au cœur de l'un des plus grands centres commerciaux de la région, notre nouveau restaurant permet aux habitants de Villeneuve d'Ascq et des communes environnantes de profiter de notre cuisine thaïlandaise authentique.
      </p>
      
      <div class="bg-slate-100 rounded-2xl p-8 my-10">
        <h3 class="font-bold text-xl text-slate-900 mb-4">📍 Informations pratiques</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start gap-3">
            <span class="text-2xl">🏬</span>
            <div>
              <p class="font-semibold text-slate-900">Adresse</p>
              <p class="text-slate-600">Centre Commercial V2, Villeneuve d'Ascq</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-2xl">🕐</span>
            <div>
              <p class="font-semibold text-slate-900">Horaires</p>
              <p class="text-slate-600">Lun-Sam : 10h00 - 21h00</p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 flex items-center gap-3">
        <span class="w-1 h-8 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></span>
        Un design moderne
      </h2>
      <p class="text-lg text-slate-600 leading-relaxed mb-6">
        Ce nouveau restaurant adopte notre nouveau concept de décoration, mêlant modernité et touches traditionnelles thaïlandaises. Vous y retrouverez une ambiance chaleureuse et dépaysante.
      </p>
    `,
    image: "/images/restaurant/interior-2.jpg",
    category: "Actualité",
    date: "2024-11-15",
    readTime: "4 min",
    author: "Équipe Thai Land Square",
    authorImage: "/images/logo.png",
    likes: 156,
    comments: 24,
  },
];

const relatedArticles = articles.slice(0, 3);

export default function Article() {
  const { id } = useParams();
  const article = articles.find(a => a.id === parseInt(id || "1")) || articles[0];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Image */}
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover animate-scale-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
          
          {/* Back Button */}
          <Link 
            to="/actualites"
            className="absolute top-6 left-6 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-5 py-2.5 rounded-full hover:bg-white/20 transition-all border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>

          {/* Article Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">
                  {article.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {article.title}
              </h1>
              
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{article.author}</p>
                    <p className="text-white/60 text-sm">Auteur</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Bar */}
        <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-slate-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">{article.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-600 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm font-medium">{article.comments}</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-sky-500 hover:text-white transition-all">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition-all">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-amber-500 hover:text-white transition-all">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-700 hover:text-white transition-all">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Author Card */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <User className="w-12 h-12 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{article.author}</h3>
                  <p className="text-amber-600 font-medium mb-3">Thai Land Square</p>
                  <p className="text-slate-600">
                    Passionnés par la cuisine thaïlandaise authentique, nous partageons avec vous nos actualités, recettes et histoires depuis 2018.
                  </p>
                </div>
                <Link 
                  to="/actualites"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-amber-500/30 transition-all whitespace-nowrap"
                >
                  Voir tous les articles
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center">
              Articles <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">similaires</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedArticles.filter(a => a.id !== article.id).slice(0, 3).map((related, index) => (
                <Link
                  key={related.id}
                  to={`/article/${related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={related.image} 
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-amber-600 font-bold uppercase tracking-wide">{related.category}</span>
                    <h3 className="font-bold text-slate-900 mt-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-4 text-amber-600 text-sm font-semibold group-hover:gap-3 transition-all">
                      Lire l'article <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
