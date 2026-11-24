import React from "react";
import { Clock, Phone, Mail, Siren, IdCard, ShieldCheck, FileText, Stethoscope } from "lucide-react";

// Section « Patients » : documents à préparer, paiement et contacts utiles
const documents = [
  { icon: IdCard, text: "Un justificatif d'identité valide" },
  { icon: ShieldCheck, text: "Votre carte d'assurance ou bulletin de prise en charge" },
  { icon: FileText, text: "Vos ordonnances et résultats d'examens antérieurs" },
  { icon: Stethoscope, text: "La lettre de votre médecin traitant (si applicable)" },
];

const contacts = [
  { icon: Siren, label: "Urgences", value: "Ouvert 24h/24, 7j/7", href: undefined },
  { icon: Phone, label: "Téléphone", value: "07 01 21 45 80", href: "tel:+2250701214580" },
  { icon: Mail, label: "E-mail", value: "Cliniclife@gmail.com", href: "mailto:Cliniclife@gmail.com" },
];

const InfosPatients: React.FC = () => (
  <section className="py-24 px-4 md:px-8 lg:px-16 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* En-tête */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Tout ce qu'il faut savoir avant votre venue
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
          Quelques conseils simples pour une prise en charge rapide et sans stress.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Préparer la consultation */}
        <div className="lg:col-span-5 rounded-[28px] bg-[#F1F6FB] p-7 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">Préparez votre consultation</h3>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#155DFC] shadow-sm">
              <Clock size={16} /> Arrivez 15 min avant
            </span>
          </div>
          <p className="mt-3 text-gray-600">Pensez à apporter les documents suivants :</p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map(({ icon: Icon, text }, i) => (
              <li key={text} className="rounded-2xl bg-white p-5 flex flex-col gap-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex items-center justify-between">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#155DFC]/10 text-[#155DFC]">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-gray-300">0{i + 1}</span>
                </div>
                <p className="text-gray-800 font-medium leading-snug">{text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts utiles */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-3 rounded-[28px] border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <span className="grid place-items-center w-11 h-11 rounded-full bg-gray-900 text-white shrink-0">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-sm text-gray-500">{label}</span>
                  <span className="block font-semibold text-gray-900">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="flex items-center gap-4 p-6 hover:bg-gray-50 transition first:rounded-t-[28px] md:first:rounded-l-[28px] md:first:rounded-tr-none">
                {content}
              </a>
            ) : (
              <div key={label} className="flex items-center gap-4 p-6">{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default InfosPatients;
