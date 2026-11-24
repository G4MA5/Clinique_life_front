import React, { useState } from "react";
import { Stethoscope, HeartPulse, BriefcaseMedical } from "lucide-react";

const Partie6_apropos: React.FC = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [posteSelected, setPosteSelected] = useState<string>("");
  const [openPosteDropdown, setOpenPosteDropdown] = useState(false);

  // Liste des postes disponibles
  const postesDisponibles = [
    "Médecin Généraliste",
    "Médecin Gynécologue",
    "Médecin Pédiatre",
    "Médecin Cardiologue",
    "Médecin Neurologue",
    "Médecin Ophtalmologue",
    "Médecin Dermatologue",
    "Chirurgien",
    "Anesthésiste",
    "Radiologue",
    "Infirmier(ère)",
    "Sage-femme",
    "Aide-soignant(e)",
    "Pharmacien(ne)",
    "Technicien de laboratoire",
    "Manipulateur radio",
    "Kinésithérapeute",
    "Psychologue",
    "Nutritionniste",
    "Secrétaire médicale",
    "Autre",
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Format invalide. Veuillez uploader un fichier PDF, DOC ou DOCX.");
      setCvFile(null);
      return;
    }

    setError("");
    setCvFile(file);
  };

  return (
    <section className="relative w-full overflow-hidden py-24 px-4 md:px-8 bg-[#EEF3F9]">
      <div className="relative max-w-6xl mx-auto">

        {/* CARTE NÉOMORPHIQUE */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] rounded-[40px] bg-[#EEF3F9] neu-raised overflow-hidden">

        <div className="p-6 sm:p-10 lg:p-14">
        {/* TITRE */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Rejoignez notre équipe
        </h2>
        <p className="mt-4 mb-10 text-gray-500 text-lg">
          Vous êtes un professionnel de santé passionné ? Envoyez-nous votre candidature.
        </p>

        {/* FORMULAIRE */}
        <form className="text-left">

          {/* GRID INPUTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="pl-2 text-sm font-medium text-gray-600">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Votre nom complet"
                className="mt-2 w-full rounded-2xl bg-[#EEF3F9] neu-inset px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#155DFC]/40"
              />
            </div>

            <div>
              <label className="pl-2 text-sm font-medium text-gray-600">
                Adresse email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                className="mt-2 w-full rounded-2xl bg-[#EEF3F9] neu-inset px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#155DFC]/40"
              />
            </div>

            <div>
              <label className="pl-2 text-sm font-medium text-gray-600">
                Téléphone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="+225 XX XX XX XX XX"
                className="mt-2 w-full rounded-2xl bg-[#EEF3F9] neu-inset px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#155DFC]/40"
              />
            </div>

            <div className="relative">
              <label className="pl-2 text-sm font-medium text-gray-600">
                Poste souhaité <span className="text-red-500">*</span>
              </label>
              <button
                type="button"
                onClick={() => setOpenPosteDropdown(!openPosteDropdown)}
                className="mt-2 w-full text-left rounded-2xl bg-[#EEF3F9] neu-inset px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#155DFC]/40 flex justify-between items-center"
              >
                <span className={posteSelected ? "text-gray-900" : "text-gray-400"}>
                  {posteSelected || "Sélectionnez un poste"}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform text-gray-500 ${
                    openPosteDropdown ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* DROPDOWN */}
              {openPosteDropdown && (
                <div className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="max-h-60 overflow-y-auto">
                    {postesDisponibles.map((poste) => (
                      <button
                        key={poste}
                        type="button"
                        onClick={() => {
                          setPosteSelected(poste);
                          setOpenPosteDropdown(false);
                        }}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-[#F1F6FB] transition text-gray-700 font-medium"
                      >
                        {poste}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* UPLOAD CV */}
          <div className="mb-5">
            <label className="block pl-2 text-sm font-medium text-gray-600">
              CV (PDF, DOC, DOCX) <span className="text-red-500">*</span>
            </label>

            <label className="mt-2 flex flex-col items-center justify-center w-full rounded-2xl bg-[#EEF3F9] neu-inset px-4 py-8 cursor-pointer ring-2 ring-dashed ring-transparent hover:ring-[#155DFC]/30 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 p-1.5 rounded-full bg-[#EEF3F9] neu-raised-sm text-[#155DFC] mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5v-9m0 0L8.25 11.25M12 7.5l3.75 3.75M6 16.5a4.5 4.5 0 01-.75-8.94A5.25 5.25 0 0115.75 6a4.5 4.5 0 01.75 8.94"
                />
              </svg>

              {/* TEXTE DYNAMIQUE */}
              <span className="text-sm text-gray-600">
                {cvFile ? cvFile.name : "Cliquez pour uploader votre CV"}
              </span>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {/* ERREUR */}
            {error && (
              <p className="text-red-500 text-xs mt-2">
                {error}
              </p>
            )}
          </div>

          {/* MOTIVATION */}
          <div className="mb-6">
            <label className="block pl-2 text-sm font-medium text-gray-600">
              Lettre de motivation <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Expliquez-nous pourquoi vous souhaitez rejoindre la Clinique Life..."
              className="mt-2 w-full rounded-2xl bg-[#EEF3F9] neu-inset px-5 py-3.5 text-sm outline-none transition focus:ring-2 focus:ring-[#155DFC]/40 resize-none"
            />
          </div>

          {/* BOUTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gray-950 text-white font-semibold neu-btn transition active:scale-[0.99]"
          >
            Envoyer ma candidature
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            Nous étudions toutes les candidatures avec attention et revenons vers vous sous 2 semaines.
          </p>
        </form>
        </div>

        {/* DÉCOR « PAPIER DÉCOUPÉ » */}
        <div className="relative hidden lg:block min-h-[640px]">
          <svg viewBox="0 0 500 800" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="vague" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#155DFC" />
                <stop offset="100%" stopColor="#00BBA7" />
              </linearGradient>
              <filter id="relief" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="-10" dy="8" stdDeviation="10" floodColor="#0B2A6B" floodOpacity="0.28" />
              </filter>
            </defs>
            <path filter="url(#relief)" fill="#DDE7F4" d="M120 0 C 40 120, 190 200, 90 320 C 0 430, 170 520, 70 640 C 20 700, 90 760, 60 800 L500 800 L500 0 Z" />
            <path filter="url(#relief)" fill="#C9D9F2" d="M170 0 C 90 120, 240 210, 140 330 C 60 440, 210 520, 120 650 C 80 710, 140 760, 110 800 L500 800 L500 0 Z" />
            <path filter="url(#relief)" fill="#8FB2F5" d="M220 0 C 150 130, 290 220, 200 340 C 120 450, 260 530, 180 660 C 140 720, 200 770, 170 800 L500 800 L500 0 Z" />
            <path filter="url(#relief)" fill="url(#vague)" d="M270 0 C 210 140, 340 230, 260 350 C 190 460, 310 540, 240 670 C 205 730, 260 775, 235 800 L500 800 L500 0 Z" />
          </svg>
          {/* Icônes santé en filigrane sur la vague */}
          <div className="absolute inset-y-0 right-0 w-[48%] flex flex-col items-center justify-center gap-10 text-white">
            <Stethoscope size={64} strokeWidth={1.4} className="opacity-90 icon-drift" />
            <HeartPulse size={48} strokeWidth={1.4} className="opacity-70 icon-drift" style={{ animationDelay: "-2s" }} />
            <BriefcaseMedical size={56} strokeWidth={1.4} className="opacity-80 icon-drift" style={{ animationDelay: "-4s" }} />
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Partie6_apropos;