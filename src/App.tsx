import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Concept from "./pages/Concept";
import Contact from "./pages/Contact";
import Fidelite from "./pages/Fidelite";
import Product from "./pages/Product";
import Restaurants from "./pages/Restaurants";
import Actualites from "./pages/Actualites";
import Article from "./pages/Article";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/concept" element={<Concept />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/fidelite" element={<Fidelite />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
