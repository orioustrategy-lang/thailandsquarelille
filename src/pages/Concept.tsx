import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Heart, Leaf, Award, Users } from "lucide-react";

const values = [
  {
    icon: ChefHat,
    title: "Authenticité",
    description: "Recettes traditionnelles thaïlandaises préparées par nos chefs expérimentés",
  },
  {
    icon: Leaf,
    title: "Fraîcheur",
    description: "Ingrédients frais sélectionnés chaque jour pour une qualité optimale",
  },
  {
    icon: Flame,
    title: "Passion",
    description: "L'amour de la cuisine thaïlandaise transmis dans chaque plat",
  },
  {
    icon: Heart,
    title: "Convivialité",
    description: "Une atmosphère chaleureuse pour des moments de partage inoubliables",
  },
  {
    icon: Award,
    title: "Qualité",
    description: "Des épices et sauces importées directement de Thaïlande",
  },
  {
    icon: Users,
    title: "Service",
    description: "Une équipe attentive et souriante pour vous accueillir",
  },
];

export default function Concept() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/concept-hero.jpg"
              alt="Notre concept"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
              Notre Histoire
            </span>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              L'Art de la Cuisine<br />
              <span className="text-gradient">Thaïlandaise</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Découvrez l'histoire de Thai Land Square et notre passion 
              pour la cuisine authentique de la Thaïlande.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Notre Voyage
                </span>
                <h2 className="section-title mb-6">
                  De Bangkok à<br />
                  <span className="text-gradient">Lille</span>
                </h2>
                
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Thai Land Square est né d'une passion profonde pour la cuisine thaïlandaise 
                    et d'un rêve : faire découvrir aux Lillois les saveurs authentiques 
                    des marchés de Bangkok.
                  </p>
                  <p className="leading-relaxed">
                    Notre aventure a commencé avec un premier restaurant à Lille Fives, 
                    où nous avons voulu recréer l'ambiance chaleureuse des échoppes de rue 
                    thaïlandaises. Le wok qui crépite, les arômes d'épices qui embaument 
                    l'air, les couleurs vives des plats... toute l'essence de la Thaïlande 
                    réunie sous un même toit.
                  </p>
                  <p className="leading-relaxed">
                    Aujourd'hui, forts de notre succès, nous sommes fiers de compter 
                    5 restaurants dans la métropole lilloise. Chaque jour, nos équipes 
                    s'engagent à vous offrir une expérience culinaire unique, 
                    préparée avec amour et respect des traditions.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/concept/story-1.jpg"
                  alt="Notre histoire"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 bg-thai-gold text-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-5xl font-bold font-heading">5</div>
                  <div className="text-sm opacity-90">Restaurants<br />dans le Nord</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-thai-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                Nos Valeurs
              </span>
              <h2 className="section-title mb-4">
                Ce qui nous <span className="text-gradient">Anime</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Chez Thai Land Square, chaque détail compte pour vous offrir 
                une expérience culinaire exceptionnelle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-thai-gold/10 rounded-2xl flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-thai-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-thai-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="/images/concept/kitchen-1.jpg"
                    alt="Notre cuisine"
                    className="rounded-2xl h-48 object-cover w-full"
                  />
                  <img
                    src="/images/concept/kitchen-2.jpg"
                    alt="Préparation des plats"
                    className="rounded-2xl h-48 object-cover w-full"
                  />
                  <img
                    src="/images/concept/kitchen-3.jpg"
                    alt="Wok en action"
                    className="rounded-2xl h-48 object-cover w-full col-span-2"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
                  Notre Cuisine
                </span>
                <h2 className="section-title mb-6">
                  Le Spectacle<br />
                  <span className="text-gradient">du Wok</span>
                </h2>
                
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Chez Thai Land Square, la cuisine est un véritable spectacle. 
                    Nos chefs maîtrisent l'art du wok, cette technique de cuisson 
                    ancestrale qui sublime les saveurs.
                  </p>
                  <p className="leading-relaxed">
                    Chaque plat est préparé minute sous vos yeux : les flammes 
                    qui dansent, les légumes qui crépitent, les arômes qui s'élèvent... 
                    C'est toute la magie de la street food thaïlandaise qui s'invite 
                    à votre table.
                  </p>
                  <p className="leading-relaxed">
                    Nos sauces sont préparées maison selon des recettes transmises 
                    de génération en génération, avec des épices et herbes aromatiques 
                    importées directement de Thaïlande.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/concept/cta.jpg"
              alt="Venez nous découvrir"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-thai-dark/80" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Venez vivre l'expérience<br />
              <span className="text-thai-gold">Thai Land Square</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Rejoignez-nous dans l'un de nos restaurants pour un voyage 
              gustatif inoubliable au cœur de la Thaïlande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-secondary text-lg px-10">
                VOIR LE MENU
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-3 rounded-lg font-semibold transition-all hover:bg-white/20">
                NOS RESTAURANTS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
