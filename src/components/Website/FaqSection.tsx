import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Comment fonctionne Katalo ?",
    answer: "Katalo vous permet de créer, gérer et partager facilement vos catalogues produits en ligne, sans compétences techniques.",
  },
  {
    question: "Puis-je essayer Katalo gratuitement ?",
    answer: "Oui, une démo gratuite est disponible pour découvrir toutes les fonctionnalités avant de vous abonner.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Oui, toutes vos données sont stockées de façon sécurisée et ne sont jamais partagées sans votre consentement.",
  },
  {
    question: "Comment contacter le support ?",
    answer: "Vous pouvez contacter notre support via le formulaire de contact ou par email à support@katalo.com.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="FAQ" className="max-w-3xl mx-auto pt-10 pb-35 px-4">
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded-xl bg-white/80 shadow">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-2xl text-orange-400">
                {open === idx ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-700">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}