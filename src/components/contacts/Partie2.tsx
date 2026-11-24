import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Plus } from "lucide-react";
import FacebookIcon from "../../assets/Facebook.png";

// Formulaire de contact + questions fréquentes en accordéon + réseaux sociaux
const sujetsRapides = ["Prise de rendez-vous", "Demande d'information", "Résultats d'examens", "Autre"];

const faq = [
  { q: "Quels sont vos horaires ?", r: "Ouvert 24h/24 et 7j/7." },
  { q: "Prenez-vous les urgences ?", r: "Oui, un service d'urgence est disponible." },
  { q: "Où nous trouver ?", r: "Angré GESTOCI, 300 m après Pharmacie Alliance." },
];

const champ =
  "peer w-full rounded-2xl border border-gray-200 bg-white px-4 pt-6 pb-2.5 text-sm text-gray-950 outline-none transition placeholder-transparent focus:border-[#155DFC] focus:ring-4 focus:ring-[#155DFC]/10";
const etiquette =
  "pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:font-semibold peer-focus:text-[#155DFC]";

// Champ avec étiquette flottante
const Champ = ({ id, label, type = "text", requis, value, onChange }: {
  id: string; label: string; type?: string; requis?: boolean; value?: string; onChange?: (v: string) => void;
}) => (
  <div className="relative">
    <input
      id={id}
      type={type}
      placeholder={label}
      required={requis}
      value={value}
      onChange={onChange ? (e) => onChange(e.target.value) : undefined}
      className={champ}
    />
    <label htmlFor={id} className={etiquette}>
      {label} {requis && <span className="text-red-500">*</span>}
    </label>
  </div>
);

export default function Partie2() {
  const [sujet, setSujet] = useState("");
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6">
        {/* ===== Colonne gauche : FAQ + réseaux ===== */}
        <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-8 md:p-10 text-white flex flex-col">
          <div className="pointer-events-none absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/20 anim-ring" />
          <div className="pointer-events-none absolute -right-8 -top-8 w-44 h-44 rounded-full border border-white/25 anim-ring anim-ring-delay" />

          <h2 className="relative text-3xl md:text-4xl font-bold tracking-tight">Questions fréquentes</h2>
          <p className="relative mt-3 text-white/80">Les réponses aux questions qu'on nous pose le plus souvent.</p>

          <div className="relative mt-8 space-y-3">
            {faq.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
                <button
                  type="button"
                  onClick={() => setOuvert(ouvert === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
                >
                  {f.q}
                  <Plus size={18} className={`shrink-0 transition-transform duration-300 ${ouvert === i ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {ouvert === i && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden px-5 text-white/80"
                    >
                      <span className="block pb-4">{f.r}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Réseaux */}
          <div className="relative mt-auto pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Écrivez-nous aussi sur</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://wa.me/2250554176268"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950 hover:-translate-y-0.5 transition"
              >
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#25D366] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-4 h-4 fill-current">
                    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.738 5.564 2.136 7.98L0 32l8.272-2.124A15.9 15.9 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.09c-2.508 0-4.962-.66-7.116-1.908l-.51-.3-4.914 1.26 1.308-4.788-.33-.522A13.04 13.04 0 0 1 2.91 16C2.91 8.56 8.56 2.91 16 2.91S29.09 8.56 29.09 16 23.44 29.09 16 29.09zm7.452-9.36c-.408-.204-2.418-1.194-2.796-1.332-.378-.138-.654-.204-.93.204-.276.408-1.068 1.332-1.308 1.608-.24.276-.48.312-.888.108-.408-.204-1.722-.636-3.276-2.028-1.212-1.08-2.028-2.418-2.268-2.826-.24-.408-.024-.63.18-.834.18-.18.408-.48.612-.72.204-.24.276-.408.408-.684.138-.276.072-.516-.036-.72-.108-.204-.93-2.238-1.272-3.066-.336-.804-.678-.696-.93-.708h-.792c-.276 0-.72.102-1.098.516-.378.408-1.44 1.404-1.44 3.426s1.476 3.978 1.68 4.254c.204.276 2.904 4.434 7.038 6.216.984.426 1.752.684 2.352.876.99.318 1.89.276 2.604.168.792-.12 2.418-.99 2.76-1.944.342-.954.342-1.77.24-1.944-.102-.174-.378-.276-.786-.48z" />
                  </svg>
                </span>
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/cliniclife8/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white pl-1.5 pr-5 py-1.5 text-sm font-semibold text-gray-950 hover:-translate-y-0.5 transition"
              >
                <span className="grid place-items-center w-8 h-8 rounded-full bg-[#EEF3FF]">
                  <img src={FacebookIcon} alt="" className="w-4 h-4 object-contain" draggable={false} />
                </span>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* ===== Formulaire ===== */}
        <div className="rounded-[32px] bg-[#F7FAFE] p-6 sm:p-10 ring-1 ring-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">Envoyez-nous un message</h2>
          <p className="mt-3 text-gray-500">Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Sujets rapides */}
            <div>
              <p className="mb-3 text-sm font-semibold text-gray-700">Votre demande concerne</p>
              <div className="flex flex-wrap gap-2">
                {sujetsRapides.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSujet(s)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      sujet === s ? "bg-gray-950 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200 hover:ring-[#155DFC]/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Champ id="nom" label="Nom complet" requis />
              <Champ id="email" label="Adresse email" type="email" requis />
              <Champ id="tel" label="Téléphone" type="tel" />
              <Champ id="sujet" label="Sujet" requis value={sujet} onChange={setSujet} />
            </div>

            <div className="relative">
              <textarea id="message" rows={5} placeholder="Votre message" required className={`${champ} resize-none`} />
              <label htmlFor="message" className={etiquette}>
                Votre message <span className="text-red-500">*</span>
              </label>
            </div>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gray-950 py-4 font-semibold text-white hover:bg-black transition"
            >
              Envoyer le message
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-1 group-hover:-rotate-12">
                <Send size={14} />
              </span>
            </button>

            <p className="text-xs text-gray-400 text-center">
              En envoyant ce formulaire, vous acceptez notre politique de confidentialité.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
