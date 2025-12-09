import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Marie Lefebvre",
    initials: "ML",
    rating: 5,
    text: "Absolument incroyable ! Le Pad Thai est le meilleur que j'ai mangé en dehors de la Thaïlande. Les saveurs sont authentiques et le service est impeccable.",
    dish: "Pad Thai",
    location: "Lille Fives"
  },
  {
    id: 2,
    author: "Thomas Bernard",
    initials: "TB",
    rating: 5,
    text: "Mon restaurant thaï préféré à Lille ! Le curry vert est une vraie merveille, crémeux et parfaitement épicé. Je recommande les yeux fermés.",
    dish: "Curry Vert",
    location: "Centre Lille"
  },
  {
    id: 3,
    author: "Sophie Martin",
    initials: "SM",
    rating: 5,
    text: "Un vrai voyage en Thaïlande ! L'ambiance est chaleureuse, les plats sont généreux et les prix sont très raisonnables. On y retourne chaque semaine !",
    dish: "Tom Yum",
    location: "Vieux-Lille"
  },
  {
    id: 4,
    author: "Jean-Pierre Dumont",
    initials: "JPD",
    rating: 4,
    text: "Excellente découverte ! Les nems sont croustillants, le wok est savoureux. Seul bémol : l'attente peut être longue aux heures de pointe.",
    dish: "Wok Royal",
    location: "Euralille"
  },
  {
    id: 5,
    author: "Camille Rousseau",
    initials: "CR",
    rating: 5,
    text: "Le meilleur rapport qualité-prix de Lille ! Les portions sont énormes et tout est frais. Le personnel est adorable et les plats arrivent vite.",
    dish: "Menu Découverte",
    location: "Villeneuve d'Ascq"
  },
  {
    id: 6,
    author: "Alexandre Petit",
    initials: "AP",
    rating: 5,
    text: "Fan absolu du Massaman Curry ! C'est devenu mon addiction. Livraison rapide et plats toujours chauds. Merci Thai Land Square !",
    dish: "Massaman Curry",
    location: "Lille Fives"
  }
];

const stats = [
  { value: "4.8", label: "Note moyenne" },
  { value: "2500+", label: "Avis clients" },
  { value: "98%", label: "Recommandent" },
  { value: "15min", label: "Temps moyen" },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Plus de 2500 avis positifs
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Ce que disent nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">clients</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Découvrez pourquoi Thai Land Square est le restaurant thaïlandais préféré des Lillois
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
              <div className="text-3xl md:text-4xl font-black text-amber-400 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-amber-500/30 mb-4" />
              
              {/* Review text */}
              <p className="text-white/90 mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-slate-600'}`} 
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{review.author}</p>
                  <p className="text-slate-500 text-sm">{review.dish} • {review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-white/10 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Voir tous les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
