import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Gift, Bell, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Fidelite() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Programme Fidélité | Thai Land Square - Gagnez des Récompenses"
        description="Rejoignez le programme de fidélité Thai Land Square et gagnez des points à chaque commande. Plats gratuits, offres exclusives et surprises vous attendent. Inscription gratuite !"
        keywords="fidélité thai land square, programme récompenses restaurant, points fidélité lille, offres exclusives restaurant thai, carte fidélité thai"
        canonicalUrl="https://thailandsquarelille.com/fidelite"
        ogImage="/images/hero-bg.jpg"
      />
      <Header />
      <main className="pt-16">
        <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Animated Icon */}
            <div className="relative mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Gift className="w-16 h-16 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
                <Bell className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
              COMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">SOON</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 mb-4">
              Programme Fidélité Thai Land Square
            </p>

            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Bientôt, gagnez des points à chaque commande et profitez de récompenses exclusives, 
              réductions et plats offerts !
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">1€</div>
                <div className="text-xs text-white/60">= 10 points</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">500</div>
                <div className="text-xs text-white/60">points = -5€</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold text-amber-400 mb-1">VIP</div>
                <div className="text-xs text-white/60">Accès exclusif</div>
              </div>
            </div>

            {/* Email Signup */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <p className="text-white/80 text-sm mb-4">
                  Soyez informé du lancement :
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">M'INSCRIRE</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-green-400 font-semibold">
                  ✓ Merci ! Vous serez notifié du lancement.
                </p>
              </div>
            )}

            {/* Countdown placeholder */}
            <div className="mt-12 text-white/40 text-sm">
              Lancement prévu : Janvier 2025
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
