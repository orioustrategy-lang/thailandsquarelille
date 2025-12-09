import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Lille Fives",
    address: "260 Rue Pierre Legrand",
    city: "59800 Lille",
    phone: "03 20 12 34 56",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/lille-fives.jpg",
    featured: true,
    mapLink: "https://maps.google.com/?q=260+Rue+Pierre+Legrand+59800+Lille",
  },
  {
    id: 2,
    name: "Lille Centre",
    address: "20 Rue Pierre Mauroy",
    city: "59800 Lille",
    phone: "03 20 12 34 57",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/lille-centre.jpg",
    featured: false,
    mapLink: "https://maps.google.com/?q=20+Rue+Pierre+Mauroy+59800+Lille",
  },
  {
    id: 3,
    name: "Wazemmes",
    address: "258 Rue des Postes",
    city: "59000 Lille",
    phone: "03 20 12 34 58",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/wazemmes.jpg",
    featured: false,
    mapLink: "https://maps.google.com/?q=258+Rue+des+Postes+59000+Lille",
  },
  {
    id: 4,
    name: "Vieux-Lille",
    address: "36 Rue Saint-Sébastien",
    city: "59800 Lille",
    phone: "03 20 12 34 59",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/vieux-lille.jpg",
    featured: false,
    mapLink: "https://maps.google.com/?q=36+Rue+Saint-Sébastien+59800+Lille",
  },
  {
    id: 5,
    name: "Villeneuve-d'Ascq",
    address: "25 Rue de la Vague",
    city: "59650 Villeneuve-d'Ascq",
    phone: "03 20 12 34 60",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/villeneuve-ascq.jpg",
    featured: false,
    mapLink: "https://maps.google.com/?q=25+Rue+de+la+Vague+59650+Villeneuve-d'Ascq",
  },
];

export default function LocationsPreview() {
  const featuredLocation = locations.find((l) => l.featured);
  const otherLocations = locations.filter((l) => !l.featured);

  return (
    <section className="py-20 lg:py-28 bg-thai-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-thai-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            Nos Restaurants
          </span>
          <h2 className="section-title mb-4">
            Trouvez votre <span className="text-gradient">Thai Land Square</span>
          </h2>
          <p className="section-subtitle mx-auto">
            5 restaurants dans la métropole lilloise pour savourer 
            la cuisine thaïlandaise authentique près de chez vous.
          </p>
        </div>

        {/* Featured Location - Lille Fives */}
        {featuredLocation && (
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto min-h-[300px]">
                <img
                  src={featuredLocation.image}
                  alt={`Thai Land Square ${featuredLocation.name}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-thai-gold text-white px-4 py-2 rounded-full font-semibold text-sm">
                  ⭐ Restaurant Principal
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="font-heading text-3xl font-bold text-thai-dark mb-4">
                  Thai Land Square {featuredLocation.name}
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-thai-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-700">{featuredLocation.address}</p>
                      <p className="text-gray-500">{featuredLocation.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-thai-gold flex-shrink-0" />
                    <a href={`tel:${featuredLocation.phone}`} className="text-gray-700 hover:text-thai-gold transition-colors">
                      {featuredLocation.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-thai-gold flex-shrink-0" />
                    <span className="text-gray-700">{featuredLocation.hours}</span>
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
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-200"
                  >
                    ITINÉRAIRE
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              <div className="relative h-40">
                <img
                  src={location.image}
                  alt={`Thai Land Square ${location.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-bold text-lg text-thai-dark mb-2">
                  {location.name}
                </h4>
                <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                <p className="text-gray-400 text-xs mb-4">{location.city}</p>
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            VOIR TOUS NOS RESTAURANTS
          </Link>
        </div>
      </div>
    </section>
  );
}
