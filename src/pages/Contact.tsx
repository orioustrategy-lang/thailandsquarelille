import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { MapPin, Phone, Clock, ExternalLink, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  {
    id: 1,
    name: "Lille Fives",
    address: "260 Rue Pierre Legrand",
    city: "59800 Lille",
    phone: "03 20 12 34 56",
    email: "fives@thailandsquare.fr",
    hours: {
      weekdays: "11h30-14h30 / 18h30-22h30",
      weekend: "11h30-14h30 / 18h30-23h00",
    },
    image: "/images/locations/lille-fives.jpg",
    featured: true,
    rating: 4.6,
    reviews: 328,
    mapLink: "https://maps.google.com/?q=260+Rue+Pierre+Legrand+59800+Lille",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.1234567890!2d3.0893!3d50.6361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDM4JzEwLjAiTiAzwrAwNScyMS40IkU!5e0!3m2!1sfr!2sfr!4v1234567890123",
  },
  {
    id: 2,
    name: "Lille Centre",
    address: "20 Rue Pierre Mauroy",
    city: "59800 Lille",
    phone: "03 20 12 34 57",
    email: "centre@thailandsquare.fr",
    hours: {
      weekdays: "11h30-14h30 / 18h30-22h30",
      weekend: "11h30-14h30 / 18h30-23h00",
    },
    image: "/images/locations/lille-centre.jpg",
    featured: false,
    rating: 4.5,
    reviews: 256,
    mapLink: "https://maps.google.com/?q=20+Rue+Pierre+Mauroy+59800+Lille",
  },
  {
    id: 3,
    name: "Wazemmes",
    address: "258 Rue des Postes",
    city: "59000 Lille",
    phone: "03 20 12 34 58",
    email: "wazemmes@thailandsquare.fr",
    hours: {
      weekdays: "11h30-14h30 / 18h30-22h30",
      weekend: "11h30-14h30 / 18h30-23h00",
    },
    image: "/images/locations/wazemmes.jpg",
    featured: false,
    rating: 4.4,
    reviews: 189,
    mapLink: "https://maps.google.com/?q=258+Rue+des+Postes+59000+Lille",
  },
  {
    id: 4,
    name: "Vieux-Lille",
    address: "36 Rue Saint-Sébastien",
    city: "59800 Lille",
    phone: "03 20 12 34 59",
    email: "vieuxlille@thailandsquare.fr",
    hours: {
      weekdays: "11h30-14h30 / 18h30-22h30",
      weekend: "11h30-14h30 / 18h30-23h00",
    },
    image: "/images/locations/vieux-lille.jpg",
    featured: false,
    rating: 4.7,
    reviews: 412,
    mapLink: "https://maps.google.com/?q=36+Rue+Saint-Sébastien+59800+Lille",
  },
  {
    id: 5,
    name: "Villeneuve-d'Ascq",
    address: "25 Rue de la Vague",
    city: "59650 Villeneuve-d'Ascq",
    phone: "03 20 12 34 60",
    email: "villeneuvedascq@thailandsquare.fr",
    hours: {
      weekdays: "11h30-14h30 / 18h30-22h30",
      weekend: "11h30-14h30 / 18h30-23h00",
    },
    image: "/images/locations/villeneuve-ascq.jpg",
    featured: false,
    rating: 4.5,
    reviews: 203,
    mapLink: "https://maps.google.com/?q=25+Rue+de+la+Vague+59650+Villeneuve-d'Ascq",
  },
];

export default function Contact() {
  const featuredLocation = locations.find((l) => l.featured);
  const otherLocations = locations.filter((l) => !l.featured);

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact | Thai Land Square - Contactez-nous à Lille"
        description="Contactez Thai Land Square. Réservations, commandes et informations. Téléphone : +33 7 77 71 46 04. 5 restaurants à Lille et sa métropole."
        keywords="contact thai land square, réservation restaurant thai lille, téléphone restaurant thai, commander thai lille, adresse thai land square"
        canonicalUrl="https://thailandsquarelille.com/contact"
        ogImage="/images/locations-hero.jpg"
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 bg-thai-dark overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <img
              src="/images/locations-hero.jpg"
              alt="Nos Restaurants"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-thai-dark/80 to-thai-dark" />
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <span className="text-thai-gold font-semibold text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              Nos Adresses
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              Nos Restaurants
            </h1>
            <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto px-2">
              Retrouvez Thai Land Square dans 5 adresses à Lille 
              et dans la métropole lilloise.
            </p>
          </div>
        </section>

        {/* Featured Location - Lille Fives */}
        {featuredLocation && (
          <section className="py-10 sm:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8 sm:mb-12">
                <span className="inline-flex items-center gap-2 bg-thai-gold/10 text-thai-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                  <Star className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  Restaurant Principal - Lille Fives
                </span>
              </div>

              <div className="bg-thai-cream rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[250px] sm:min-h-[400px]">
                    <img
                      src={featuredLocation.image}
                      alt={`Thai Land Square ${featuredLocation.name}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="font-heading text-3xl lg:text-4xl font-bold text-thai-dark mb-6">
                      Thai Land Square<br />
                      <span className="text-gradient">{featuredLocation.name}</span>
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="flex items-center gap-1 text-thai-gold">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-lg">{featuredLocation.rating}</span>
                      </div>
                      <span className="text-gray-500">({featuredLocation.reviews} avis Google)</span>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-thai-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-thai-gold" />
                        </div>
                        <div>
                          <p className="font-medium text-thai-dark">{featuredLocation.address}</p>
                          <p className="text-gray-500">{featuredLocation.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-thai-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-thai-gold" />
                        </div>
                        <a href={`tel:${featuredLocation.phone}`} className="font-medium text-thai-dark hover:text-thai-gold transition-colors">
                          {featuredLocation.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-thai-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-thai-gold" />
                        </div>
                        <a href={`mailto:${featuredLocation.email}`} className="font-medium text-thai-dark hover:text-thai-gold transition-colors">
                          {featuredLocation.email}
                        </a>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-thai-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-thai-gold" />
                        </div>
                        <div>
                          <p className="font-medium text-thai-dark">Lun-Ven: {featuredLocation.hours.weekdays}</p>
                          <p className="text-gray-500">Sam-Dim: {featuredLocation.hours.weekend}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link to="/menu" className="btn-secondary">
                        COMMANDER
                      </Link>
                      <a
                        href={featuredLocation.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-200"
                      >
                        ITINÉRAIRE
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Locations */}
        <section className="py-16 bg-thai-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">
                Nos Autres <span className="text-gradient">Adresses</span>
              </h2>
              <p className="section-subtitle mx-auto">
                Retrouvez-nous également dans ces restaurants de la métropole lilloise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherLocations.map((location) => (
                <div
                  key={location.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="grid sm:grid-cols-5">
                    <div className="relative h-48 sm:h-auto sm:col-span-2">
                      <img
                        src={location.image}
                        alt={`Thai Land Square ${location.name}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 sm:col-span-3">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-heading text-xl font-bold text-thai-dark">
                          {location.name}
                        </h3>
                        <div className="flex items-center gap-1 text-thai-gold text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-medium">{location.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-thai-gold" />
                          <span>{location.address}, {location.city}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="w-4 h-4 text-thai-gold" />
                          <a href={`tel:${location.phone}`} className="hover:text-thai-gold transition-colors">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-thai-gold" />
                          <span>{location.hours.weekdays}</span>
                        </div>
                      </div>

                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-thai-gold font-semibold text-sm hover:underline"
                      >
                        Voir sur la carte
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title mb-4">
                  Contactez-<span className="text-gradient">nous</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Une question ? Une suggestion ? N'hésitez pas à nous contacter.
                </p>
              </div>

              <div className="bg-thai-cream rounded-2xl p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-thai-gold focus:ring-2 focus:ring-thai-gold/20 outline-none transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-thai-gold focus:ring-2 focus:ring-thai-gold/20 outline-none transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700 mb-2">
                      Restaurant concerné
                    </label>
                    <select
                      id="restaurant"
                      name="restaurant"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-thai-gold focus:ring-2 focus:ring-thai-gold/20 outline-none transition-all"
                    >
                      <option value="">Sélectionnez un restaurant</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.name}>
                          Thai Land Square {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-thai-gold focus:ring-2 focus:ring-thai-gold/20 outline-none transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-thai-gold focus:ring-2 focus:ring-thai-gold/20 outline-none transition-all resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button type="submit" className="btn-secondary w-full">
                    ENVOYER LE MESSAGE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
