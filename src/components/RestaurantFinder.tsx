import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, ExternalLink, Star, ChevronRight, Map } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Thai Land Square Lille Centre",
    address: "8 Rue de Béthune",
    city: "59800 Lille",
    phone: "03 20 12 34 56",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/lille-centre.jpg",
    mapUrl: "https://maps.google.com/?q=8+Rue+de+Bethune+Lille",
    lat: 50.6362,
    lng: 3.0628,
    featured: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Thai Land Square Wazemmes",
    address: "Place de la Nouvelle Aventure",
    city: "59000 Lille",
    phone: "03 20 23 45 67",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/wazemmes.jpg",
    mapUrl: "https://maps.google.com/?q=Place+de+la+Nouvelle+Aventure+Lille",
    lat: 50.6273,
    lng: 3.0476,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Thai Land Square Fives",
    address: "260 Rue Pierre Legrand",
    city: "59800 Lille",
    phone: "03 20 34 56 78",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/lille-fives.jpg",
    mapUrl: "https://maps.google.com/?q=260+Rue+Pierre+Legrand+Lille",
    lat: 50.6281,
    lng: 3.0892,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Thai Land Square Vieux-Lille",
    address: "1 Rue de la Monnaie",
    city: "59800 Lille",
    phone: "03 20 45 67 89",
    hours: "11h30-14h30 / 18h30-22h30",
    image: "/images/locations/vieux-lille.jpg",
    mapUrl: "https://maps.google.com/?q=1+Rue+de+la+Monnaie+Lille",
    lat: 50.6407,
    lng: 3.0622,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Thai Land Square Villeneuve d'Ascq",
    address: "Centre Commercial V2",
    city: "59650 Villeneuve d'Ascq",
    phone: "03 20 56 78 90",
    hours: "10h00-21h00",
    image: "/images/locations/villeneuve-ascq.jpg",
    mapUrl: "https://maps.google.com/?q=Centre+Commercial+V2+Villeneuve+Ascq",
    lat: 50.6170,
    lng: 3.1340,
    rating: 4.8,
  },
];

export default function RestaurantFinder() {
  const [selectedId, setSelectedId] = useState(1);
  const [showMap, setShowMap] = useState(true);
  const selectedRestaurant = restaurants.find((r) => r.id === selectedId) || restaurants[0];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            📍 5 adresses
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">restaurants</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Retrouvez-nous dans 5 restaurants à Lille et sa métropole
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Restaurant List */}
          <div className="lg:col-span-2 space-y-3">
            {restaurants.map((restaurant) => (
              <button
                key={restaurant.id}
                onClick={() => setSelectedId(restaurant.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all ${
                  selectedId === restaurant.id
                    ? "bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl"
                    : "bg-white hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold truncate">{restaurant.name}</h3>
                      {restaurant.featured && (
                        <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          PRINCIPAL
                        </span>
                      )}
                    </div>
                    <p className={`text-sm ${selectedId === restaurant.id ? "text-white/60" : "text-slate-500"}`}>
                      {restaurant.address}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-amber-400 fill-current" />
                      <span className={`text-xs font-medium ${selectedId === restaurant.id ? "text-white" : "text-slate-700"}`}>
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ${selectedId === restaurant.id ? "text-white" : "text-slate-400"}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Selected Restaurant Details with Map */}
          <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden shadow-xl">
            {/* Toggle between Map and Image */}
            <div className="relative">
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => setShowMap(true)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    showMap 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg" 
                      : "bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white"
                  }`}
                >
                  <Map className="w-4 h-4" />
                  Carte
                </button>
                <button
                  onClick={() => setShowMap(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                    !showMap 
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg" 
                      : "bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  Photo
                </button>
              </div>

              {showMap ? (
                <div className="h-80 relative bg-slate-200">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(selectedRestaurant.address + ', ' + selectedRestaurant.city)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${selectedRestaurant.name}`}
                    className="w-full h-full"
                  />
                  {/* Restaurant Name Overlay on Map */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                        <span className="text-white font-bold text-sm">{selectedRestaurant.rating}</span>
                      </div>
                      {selectedRestaurant.featured && (
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                          Restaurant principal
                        </span>
                      )}
                    </div>
                    <h3 className="text-white text-2xl font-bold">
                      {selectedRestaurant.name}
                    </h3>
                  </div>
                </div>
              ) : (
                <div className="h-80 relative">
                  <img
                    src={selectedRestaurant.image}
                    alt={selectedRestaurant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-4 h-4 text-white fill-current" />
                        <span className="text-white font-bold text-sm">{selectedRestaurant.rating}</span>
                      </div>
                      {selectedRestaurant.featured && (
                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                          Restaurant principal
                        </span>
                      )}
                    </div>
                    <h3 className="text-white text-2xl font-bold">
                      {selectedRestaurant.name}
                    </h3>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{selectedRestaurant.address}</p>
                  <p className="text-slate-500">{selectedRestaurant.city}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <p className="text-sm text-slate-600">{selectedRestaurant.hours}</p>
                </div>
                <a href={`tel:${selectedRestaurant.phone}`} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <Phone className="w-5 h-5 text-slate-400" />
                  <p className="text-sm text-slate-600">{selectedRestaurant.phone}</p>
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href={selectedRestaurant.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all"
                >
                  <Navigation className="w-5 h-5" />
                  ITINÉRAIRE
                </a>
                <a
                  href={selectedRestaurant.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-bold px-5 py-4 rounded-xl hover:bg-slate-200 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full Map Section - All Restaurants */}
        <div className="mt-12">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <Map className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Tous nos restaurants</h3>
                    <p className="text-slate-500 text-sm">Voir tous les emplacements sur la carte</p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/search/Thai+Land+Square+Lille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40500!2d3.0573!3d50.6292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579b3c941ab%3A0x40af13e81646360!2sLille!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="All Thai Land Square restaurants in Lille"
                className="w-full h-full"
              />
              {/* Location markers overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {restaurants.map((restaurant) => (
                  <button
                    key={restaurant.id}
                    onClick={() => setSelectedId(restaurant.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedId === restaurant.id
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg"
                        : "bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white shadow"
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    {restaurant.name.replace("Thai Land Square ", "")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
