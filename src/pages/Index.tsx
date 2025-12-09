import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuCategories from "@/components/MenuCategories";
import Specialties from "@/components/Specialties";
import Features from "@/components/Features";
import ConceptPreview from "@/components/ConceptPreview";
import RestaurantFinder from "@/components/RestaurantFinder";
import Reviews from "@/components/Reviews";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Index() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Thai Land Square | Restaurant Thaïlandais Authentique à Lille"
        description="Découvrez Thai Land Square, le meilleur restaurant thaïlandais de Lille. Cuisine authentique : Pad Thai, Curry Vert, Tom Yum, Wok. 5 restaurants à Lille Fives, Wazemmes, Vieux-Lille. Commandez en ligne !"
        keywords="restaurant thai lille, restaurant thailandais lille, cuisine thailandaise lille, pad thai lille, curry thai lille, wok lille, thai land square, restaurant asiatique lille, livraison thai lille"
        canonicalUrl="https://thailandsquarelille.com/"
        ogType="restaurant"
      />
      <Header />
      <main>
        <Hero />
        <MenuCategories />
        <Features />
        <Specialties />
        <Reviews />
        <ConceptPreview />
        <RestaurantFinder />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
