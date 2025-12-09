import { useState, useEffect } from "react";
import { MapPin, Clock, Phone, Navigation, LocateFixed } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

// Fix for default marker icons in Leaflet with Vite
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom orange marker for selected restaurant
const selectedIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="30" height="45">
      <path fill="#f59e0b" stroke="#ffffff" stroke-width="2" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"/>
      <circle fill="#ffffff" cx="12" cy="12" r="5"/>
    </svg>
  `),
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -45],
});

// Orange marker for all restaurants
const orangeIcon = L.icon({
  iconUrl: "data:image/svg+xml;base64," + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="25" height="38">
      <path fill="#ea580c" stroke="#ffffff" stroke-width="1.5" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"/>
      <circle fill="#ffffff" cx="12" cy="12" r="4"/>
    </svg>
  `),
  iconSize: [25, 38],
  iconAnchor: [12, 38],
  popupAnchor: [0, -38],
});

L.Marker.prototype.options.icon = defaultIcon;

// Component to recenter map when selection changes
function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom, { animate: true });
  }, [center, zoom, map]);
  return null;
}

const restaurants = [
  {
    id: 1,
    name: "THAI LAND SQUARE - LILLE CENTRE",
    address: "8 Rue de Béthune",
    city: "59800 Lille",
    phone: "03 20 12 34 56",
    status: "Pré-commande",
    openTime: "Ouvre à 11:30",
    distance: "0 Km",
    // Exact coordinates for 8 Rue de Béthune, Lille Centre
    lat: 50.6362,
    lng: 3.0628,
  },
  {
    id: 2,
    name: "THAI LAND SQUARE - WAZEMMES",
    address: "Place de la Nouvelle Aventure",
    city: "59000 Lille",
    phone: "03 20 23 45 67",
    status: "Pré-commande",
    openTime: "Ouvre à 11:30",
    distance: "0 Km",
    // Exact coordinates for Place de la Nouvelle Aventure (near Postes/Wazemmes)
    lat: 50.6273,
    lng: 3.0476,
  },
  {
    id: 3,
    name: "THAI LAND SQUARE - FIVES",
    address: "260 Rue Pierre Legrand",
    city: "59800 Lille",
    phone: "03 20 34 56 78",
    status: "Pré-commande",
    openTime: "Ouvre à 11:30",
    distance: "0 Km",
    // Exact coordinates for 260 Rue Pierre Legrand, Lille Fives
    lat: 50.6281,
    lng: 3.0892,
  },
  {
    id: 4,
    name: "THAI LAND SQUARE - VIEUX-LILLE",
    address: "1 Rue de la Monnaie",
    city: "59800 Lille",
    phone: "03 20 45 67 89",
    status: "Pré-commande",
    openTime: "Ouvre à 11:30",
    distance: "0 Km",
    // Exact coordinates for Rue de la Monnaie, Vieux-Lille
    lat: 50.6407,
    lng: 3.0622,
  },
  {
    id: 5,
    name: "THAI LAND SQUARE - VILLENEUVE D'ASCQ",
    address: "Centre Commercial V2",
    city: "59650 Villeneuve d'Ascq",
    phone: "03 20 56 78 90",
    status: "Pré-commande",
    openTime: "Ouvre à 10:00",
    distance: "0 Km",
    // Exact coordinates for Centre Commercial V2, Villeneuve d'Ascq
    lat: 50.6170,
    lng: 3.1340,
  },
];

export default function Restaurants() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapType, setMapType] = useState<"plan" | "satellite">("plan");

  const selectedRestaurant = restaurants.find((r) => r.id === selectedId);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Nos Restaurants | Thai Land Square - 5 Adresses à Lille"
        description="Trouvez le Thai Land Square le plus proche. 5 restaurants à Lille : Fives, Wazemmes, Vieux-Lille, Centre et Villeneuve d'Ascq. Horaires, adresses et itinéraires."
        keywords="restaurant thai lille fives, restaurant thai wazemmes, restaurant thai vieux lille, restaurant thai villeneuve ascq, thai land square adresse, restaurant thailandais proche de moi"
        canonicalUrl="https://thailandsquarelille.com/restaurants"
        ogImage="/images/locations-hero.jpg"
      />
      <Header />
      
      <main className="flex-1 flex flex-col lg:flex-row pt-[120px]">
        {/* Left Side - Restaurant List */}
        <div className="w-full lg:w-[420px] bg-white flex flex-col border-r border-gray-200">
          {/* Title */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">
              Nos Restaurants
            </h1>
          </div>

          {/* Search Section */}
          <div className="p-4 border-b border-gray-100">
            <p className="text-sm text-slate-600 mb-3">
              Recherchez le Thai Land Square le plus proche
            </p>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Entrez une adresse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <button className="mt-3 text-amber-600 hover:text-amber-700 text-sm font-semibold flex items-center gap-2 hover:underline">
              <LocateFixed className="w-4 h-4" />
              Localisez-moi
            </button>
          </div>

          {/* Restaurant List - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => setSelectedId(restaurant.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-all hover:bg-amber-50 ${
                  selectedId === restaurant.id ? "bg-amber-50 border-l-4 border-l-amber-500" : ""
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 text-sm uppercase">
                    {restaurant.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block">{restaurant.status}</span>
                    <span className="text-sm font-semibold text-amber-600">{restaurant.openTime}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600">{restaurant.address}</p>
                <p className="text-sm text-slate-600">{restaurant.city}</p>
                <p className="text-xs text-slate-400 mt-1">{restaurant.distance}</p>
              </div>
            ))}
          </div>

          {/* Assistance Button */}
          <div className="p-4 border-t border-gray-100">
            <button className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-full transition-colors">
              <Phone className="w-4 h-4" />
              Assistance
            </button>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="flex-1 relative bg-slate-100 min-h-[500px] lg:min-h-0">
          {/* Map Type Toggle */}
          <div className="absolute top-4 left-4 z-[1000] bg-white rounded-lg shadow-md overflow-hidden flex">
            <button
              onClick={() => setMapType("plan")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mapType === "plan"
                  ? "bg-white text-slate-900"
                  : "bg-slate-100 text-slate-500 hover:text-slate-700"
              }`}
            >
              Plan
            </button>
            <button
              onClick={() => setMapType("satellite")}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                mapType === "satellite"
                  ? "bg-white text-slate-900"
                  : "bg-slate-100 text-slate-500 hover:text-slate-700"
              }`}
            >
              Satellite
            </button>
          </div>

          {/* Leaflet Map */}
          <MapContainer
            center={[50.6292, 3.0573]}
            zoom={12}
            className="absolute inset-0 w-full h-full z-0"
            zoomControl={false}
          >
            <MapController 
              center={selectedRestaurant ? [selectedRestaurant.lat, selectedRestaurant.lng] : [50.6292, 3.0573]} 
              zoom={selectedRestaurant ? 15 : 12} 
            />
            {mapType === "plan" ? (
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            ) : (
              <TileLayer
                attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            )}
            {restaurants.map((restaurant) => (
              <Marker
                key={restaurant.id}
                position={[restaurant.lat, restaurant.lng]}
                icon={selectedId === restaurant.id ? selectedIcon : orangeIcon}
                eventHandlers={{
                  click: () => setSelectedId(restaurant.id),
                }}
              >
                <Popup>
                  <div className="p-1">
                    <h3 className="font-bold text-sm mb-1">{restaurant.name}</h3>
                    <p className="text-xs text-slate-600">{restaurant.address}</p>
                    <p className="text-xs text-slate-600">{restaurant.city}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Selected Restaurant Info Card */}
          {selectedRestaurant && (
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-80 bg-white rounded-xl shadow-xl p-4 z-[1000]">
              <h3 className="font-bold text-slate-900 mb-2">{selectedRestaurant.name}</h3>
              <p className="text-sm text-slate-600 mb-1">{selectedRestaurant.address}</p>
              <p className="text-sm text-slate-600 mb-3">{selectedRestaurant.city}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                <Clock className="w-4 h-4" />
                <span>{selectedRestaurant.openTime}</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedRestaurant.address + ', ' + selectedRestaurant.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Itinéraire
                </a>
                <a
                  href={`tel:${selectedRestaurant.phone}`}
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
