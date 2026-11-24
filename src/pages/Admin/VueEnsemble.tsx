import React, { useState } from "react";
import { Calendar, MessageSquare, Briefcase, ArrowRight, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import HeroImg from "../../assets/plateau/echographe.jpg";
import { initialAdminTeam } from "../../data/teamData";

// Vue d'ensemble de l'admin : bento inspiré des tableaux de bord modernes.
// Les chiffres et listes sont les mêmes données de démonstration qu'avant (pas encore reliées à une API).
type Props = { onNavigate?: (page: string) => void };

const rdvs = [
  { nom: "Kouassi Marie", service: "Gynécologie", date: "2024-12-20", statut: "En attente" },
  { nom: "Diabaté Jean", service: "Pédiatrie", date: "2024-12-21", statut: "Confirmé" },
  { nom: "Koné Fatou", service: "Cardiologie", date: "2024-12-22", statut: "En attente" },
];

const messages = [
  { nom: "Touré Amadou", message: "Demande d'information", temps: "Il y a 2h", nonLu: true },
  { nom: "Bamba Sarah", message: "Question sur les tarifs", temps: "Il y a 5h", nonLu: true },
  { nom: "Yao Patrick", message: "Remerciements", temps: "Hier", nonLu: false },
];

const initiales = (nom: string) => nom.split(" ").map((m) => m[0]).join("").slice(0, 2);

// Créneaux de la journée : true = réservé
const creneaux = [true, true, false, true, true, true, false, true, true, true, true, false, true, false, true, true, false, false];

const VueEnsemble: React.FC<Props> = ({ onNavigate }) => {
  const [periode, setPeriode] = useState<"J" | "S" | "M">("S");
  const [indexRdv, setIndexRdv] = useState(0);
  const reserves = creneaux.filter(Boolean).length;
  const rdv = rdvs[indexRdv];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* ===== Carte d'accueil avec photo ===== */}
      <div className="relative lg:col-span-7 min-h-[260px] overflow-hidden rounded-[28px]">
        <img src={HeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#155DFC]/85 via-[#155DFC]/40 to-transparent" />
        <div className="relative h-full p-6 md:p-8 flex flex-col text-white">
          <h2 className="max-w-sm text-3xl md:text-4xl font-semibold tracking-tight leading-tight">Votre clinique, en un coup d'œil</h2>
          <div className="mt-auto pt-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs text-white/80">Équipe administrative</p>
              <div className="mt-2 flex items-center">
                {initialAdminTeam.slice(0, 4).map((m) => (
                  <img key={m.id} src={m.image} alt={m.name} className="w-9 h-9 -ml-2 first:ml-0 rounded-full object-cover object-top ring-2 ring-white" />
                ))}
                <span className="ml-3 text-sm font-semibold">{initialAdminTeam.length} membres</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate?.("Rendez-vous")}
              className="group inline-flex items-center gap-3 rounded-full bg-gray-950 pl-5 pr-1.5 py-1.5 text-sm font-semibold"
            >
              Gérer les rendez-vous
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Créneaux du jour (carte bleue) ===== */}
      <div className="lg:col-span-5 rounded-[28px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-6 md:p-7 text-white flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold">Créneaux du jour</p>
            <p className="mt-1 max-w-[180px] text-xs text-white/75">Rendez-vous réservés sur les créneaux disponibles.</p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-950">
              {reserves}/{creneaux.length} réservés
            </span>
          </div>
          <div className="grid grid-cols-6 gap-1.5">
            {creneaux.map((r, i) => (
              <span key={i} className={`w-5 h-6 rounded-md ${r ? "bg-white" : "bg-white/25"}`} />
            ))}
          </div>
        </div>
        <div className="mt-auto pt-8 flex items-end justify-between">
          <div className="flex gap-2">
            {(["J", "S", "M"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPeriode(p)}
                className={`grid place-items-center w-10 h-10 rounded-full text-sm font-semibold transition ${periode === p ? "bg-white text-gray-950" : "bg-white/20 hover:bg-white/30"}`}
              >
                {p}
              </button>
            ))}
          </div>
          <p className="text-right leading-none">
            <span className="text-5xl md:text-6xl font-light tracking-tight">45</span>
            <span className="block mt-1 text-sm text-white/80">rendez-vous</span>
          </p>
        </div>
      </div>

      {/* ===== Prochain rendez-vous (carrousel) ===== */}
      <div className="lg:col-span-4 rounded-[28px] bg-white p-6 flex flex-col">
        <div className="flex items-center gap-2">
          {rdvs.map((r) => (
            <span key={r.nom} className="grid place-items-center w-8 h-8 -ml-2 first:ml-0 rounded-full bg-[#F1F6FB] ring-2 ring-white text-[11px] font-bold text-[#155DFC]">{initiales(r.nom)}</span>
          ))}
        </div>
        <p className="mt-5 text-lg font-semibold text-gray-950 leading-snug">Derniers rendez-vous</p>
        <div className="mt-4 rounded-2xl bg-[#F7FAFE] p-4">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${rdv.statut === "Confirmé" ? "bg-[#00BBA7]/15 text-[#00968a]" : "bg-gray-950 text-white"}`}>{rdv.statut}</span>
          <p className="mt-3 font-semibold text-gray-950">{rdv.nom}</p>
          <p className="text-sm text-gray-500">{rdv.service} · {rdv.date}</p>
        </div>
        <div className="mt-auto pt-5 flex items-center justify-between">
          <p className="text-2xl font-semibold text-gray-950">{indexRdv + 1}<span className="text-sm text-gray-400">/{rdvs.length}</span></p>
          <div className="flex gap-2">
            <button type="button" aria-label="Précédent" onClick={() => setIndexRdv((indexRdv - 1 + rdvs.length) % rdvs.length)} className="grid place-items-center w-9 h-9 rounded-full ring-1 ring-gray-200 hover:bg-gray-950 hover:text-white hover:ring-gray-950 transition"><ChevronLeft size={16} /></button>
            <button type="button" aria-label="Suivant" onClick={() => setIndexRdv((indexRdv + 1) % rdvs.length)} className="grid place-items-center w-9 h-9 rounded-full ring-1 ring-gray-200 hover:bg-gray-950 hover:text-white hover:ring-gray-950 transition"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* ===== Candidatures : jauge segmentée ===== */}
      <div className="lg:col-span-4 rounded-[28px] bg-white p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-semibold text-gray-950">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F1F6FB] text-[#155DFC]"><Briefcase size={15} /></span>
            Candidatures
          </p>
          <p className="text-lg font-semibold text-gray-950">18 <span className="text-xs font-normal text-gray-400">reçues</span></p>
        </div>
        <p className="mt-6 text-5xl font-light tracking-tight text-gray-950">7<span className="text-base text-gray-400"> /à traiter</span></p>
        <div className="mt-5 flex gap-[3px] h-10 items-end">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`flex-1 rounded-sm ${i < 11 ? "h-full bg-[linear-gradient(180deg,#155DFC_0%,#00BBA7_100%)]" : "h-full bg-[#F1F6FB]"}`} />
          ))}
        </div>
        <div className="mt-auto pt-5 grid grid-cols-3 gap-2 text-sm">
          <p><b className="block text-gray-950 text-lg font-semibold">11</b><span className="text-xs text-gray-400">traitées</span></p>
          <p><b className="block text-gray-950 text-lg font-semibold">7</b><span className="text-xs text-gray-400">en attente</span></p>
          <p><b className="block text-gray-950 text-lg font-semibold">+3%</b><span className="text-xs text-gray-400">ce mois</span></p>
        </div>
      </div>

      {/* ===== Tendance des rendez-vous ===== */}
      <div className="lg:col-span-4 rounded-[28px] bg-white p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-semibold text-gray-950">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F1F6FB] text-[#155DFC]"><TrendingUp size={15} /></span>
            Tendance
          </p>
          <p className="text-xs text-gray-400">Rendez-vous</p>
        </div>
        <svg viewBox="0 0 300 110" className="mt-4 w-full h-28" aria-hidden="true">
          <defs>
            <linearGradient id="tendance" x1="0" x2="1"><stop offset="0%" stopColor="#155DFC" /><stop offset="100%" stopColor="#00BBA7" /></linearGradient>
          </defs>
          <path d="M0 80 C 40 20, 80 100, 120 60 S 200 10, 240 50 S 290 70, 300 40" fill="none" stroke="#155DFC" strokeOpacity="0.15" strokeWidth="14" strokeLinecap="round" />
          <path d="M0 80 C 40 20, 80 100, 120 60 S 200 10, 240 50 S 290 70, 300 40" fill="none" stroke="url(#tendance)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="120" cy="60" r="6" fill="white" stroke="#155DFC" strokeWidth="3" />
        </svg>
        <div className="mt-auto pt-3 flex items-end justify-between">
          <p className="text-5xl font-light tracking-tight text-gray-950">+12<span className="text-xl">%</span></p>
          <p className="text-right text-xs text-gray-400">par rapport au<br />mois dernier</p>
        </div>
      </div>

      {/* ===== Derniers messages ===== */}
      <div className="lg:col-span-8 rounded-[28px] bg-white p-6">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-semibold text-gray-950">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F1F6FB] text-[#155DFC]"><MessageSquare size={15} /></span>
            Derniers messages
            <span className="rounded-full bg-gray-950 px-2 py-0.5 text-xs text-white">8 non lus</span>
          </p>
          <button type="button" onClick={() => onNavigate?.("Messages")} className="text-sm font-semibold text-[#155DFC] hover:underline">Tout voir</button>
        </div>
        <ul className="mt-4 divide-y divide-gray-100">
          {messages.map((m) => (
            <li key={m.nom} className="flex items-center gap-4 py-3">
              <span className="grid place-items-center w-10 h-10 shrink-0 rounded-full bg-[#F1F6FB] text-xs font-bold text-[#155DFC]">{initiales(m.nom)}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-950 flex items-center gap-2">{m.nom}{m.nonLu && <span className="w-2 h-2 rounded-full bg-[#00BBA7]" />}</p>
                <p className="text-sm text-gray-500 truncate">{m.message}</p>
              </div>
              <span className="text-xs text-gray-400 shrink-0">{m.temps}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Actions rapides ===== */}
      <div className="lg:col-span-4 rounded-[28px] bg-gray-950 p-6 text-white flex flex-col">
        <p className="text-lg font-semibold">Actions rapides</p>
        <div className="mt-5 grid gap-3">
          {[
            { icon: Calendar, label: "Rendez-vous", page: "Rendez-vous" },
            { icon: MessageSquare, label: "Messages", page: "Messages" },
            { icon: Briefcase, label: "Recrutement", page: "Recrutement" },
          ].map(({ icon: Icon, label, page }) => (
            <button
              key={page}
              type="button"
              onClick={() => onNavigate?.(page)}
              className="group flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left font-semibold hover:bg-white/15 transition"
            >
              <span className="flex items-center gap-3"><Icon size={18} className="text-[#00BBA7]" /> {label}</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VueEnsemble;
