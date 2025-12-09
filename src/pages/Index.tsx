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

export default function Index() {
  return (
    <div className="min-h-screen">
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
