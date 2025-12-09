import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  informations: [
    { name: "Nos restaurants", href: "/contact" },
    { name: "Notre concept", href: "/concept" },
    { name: "Recrutement", href: "#" },
    { name: "Franchise", href: "#" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "CGV", href: "#" },
    { name: "Confidentialité", href: "#" },
    { name: "Cookies", href: "#" },
  ],
  commander: [
    { name: "Voir le menu", href: "/menu" },
    { name: "Click & Collect", href: "/menu" },
    { name: "Livraison", href: "/menu" },
    { name: "Programme fidélité", href: "/fidelite" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-1">Restez informé</h3>
              <p className="text-white/60">Recevez nos offres exclusives et nouveautés</p>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 lg:w-80 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center gap-2">
                S'INSCRIRE
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="block mb-4">
              <img 
                src="/images/logo.png" 
                alt="Thai Land Square" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Cuisine thaïlandaise authentique depuis 2018. 
              5 restaurants à Lille et sa métropole.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Commander */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-400">COMMANDER</h4>
            <ul className="space-y-3">
              {footerLinks.commander.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-400">INFORMATIONS</h4>
            <ul className="space-y-3">
              {footerLinks.informations.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-400">LÉGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-amber-400">CONTACT</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+33320123456" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  03 20 12 34 56
                </a>
              </li>
              <li>
                <a href="mailto:contact@thailandsquare.fr" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  contact@thailandsquare.fr
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Nos 5 restaurants
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-sm">
              © 2024 Thai Land Square. Tous droits réservés.
            </p>
            <p className="text-white/40 text-sm flex items-center gap-2">
              Fait avec <span className="text-red-500">❤️</span> à Lille 🇫🇷
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
