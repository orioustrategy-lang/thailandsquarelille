import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "33777714604";
const WHATSAPP_MESSAGE = "Bonjour, je souhaite passer une commande chez Thai Land Square !";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-4 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all hover:scale-110 group"
      aria-label="Commander sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline text-sm">Commander</span>
    </a>
  );
}
