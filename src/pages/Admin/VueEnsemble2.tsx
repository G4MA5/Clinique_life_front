import { Mail, TrendingUp, FileText, Newspaper, ArrowRight, Lock } from "lucide-react";
import HeroImg from "../../assets/plateau/neonat-pano.jpg";

// Vue d'ensemble de l'admin niveau 2 (contenu & communication), même style bento que l'admin 1.
// Chiffres de démonstration repris de l'ancienne version (1247 abonnés, 42 % d'ouverture, 15 campagnes, +5 ce mois).
type Props = { onNavigate?: (page: string) => void };

const tauxOuverture = 42;
const campagnesParMois = [2, 1, 3, 2, 4, 3]; // hauteur des barres (démonstration)

export default function VueEnsemble2({ onNavigate }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
      {/* ===== Carte d'accueil avec photo ===== */}
      <div className="relative lg:col-span-7 min-h-[260px] overflow-hidden rounded-[28px]">
        <img src={HeroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#155DFC]/85 via-[#155DFC]/40 to-transparent" />
        <div className="relative h-full p-6 md:p-8 flex flex-col text-white">
          <h2 className="max-w-sm text-3xl md:text-4xl font-semibold tracking-tight leading-tight">Contenu & communication</h2>
          <p className="mt-2 max-w-sm text-white/80">Publiez vos articles, mettez à jour vos services et gardez le lien avec vos patients.</p>
          <div className="mt-auto pt-8">
            <button
              type="button"
              onClick={() => onNavigate?.("Gestion contenu")}
              className="group inline-flex items-center gap-3 rounded-full bg-gray-950 pl-5 pr-1.5 py-1.5 text-sm font-semibold"
            >
              Gérer le contenu
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950 transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={15} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== Abonnés newsletter (carte dégradé) ===== */}
      <div className="lg:col-span-5 rounded-[28px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-6 md:p-7 text-white flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-semibold">Abonnés newsletter</p>
            <p className="mt-1 text-xs text-white/75">Taux d'ouverture des dernières campagnes.</p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-950">+15 % ce mois</span>
          </div>
          {/* Jauge circulaire du taux d'ouverture */}
          <div className="relative w-24 h-24 shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="white" strokeOpacity="0.25" strokeWidth="3.5" />
              <circle cx="18" cy="18" r="15.5" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={`${(tauxOuverture / 100) * 97.4} 97.4`} />
            </svg>
            <span className="absolute inset-0 grid place-items-center text-lg font-semibold">{tauxOuverture}%</span>
          </div>
        </div>
        <div className="mt-auto pt-8 flex items-end justify-between">
          <span className="grid place-items-center w-11 h-11 rounded-full bg-white/20"><Mail size={18} /></span>
          <p className="text-right leading-none">
            <span className="text-5xl md:text-6xl font-light tracking-tight">1 247</span>
            <span className="block mt-1 text-sm text-white/80">abonnés</span>
          </p>
        </div>
      </div>

      {/* ===== Campagnes ===== */}
      <div className="lg:col-span-4 rounded-[28px] bg-white p-6 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-lg font-semibold text-gray-950">
            <span className="grid place-items-center w-8 h-8 rounded-full bg-[#F1F6FB] text-[#155DFC]"><TrendingUp size={15} /></span>
            Campagnes
          </p>
          <p className="text-sm font-semibold text-[#00968a]">+5 ce mois</p>
        </div>
        <p className="mt-6 text-5xl font-light tracking-tight text-gray-950">15<span className="text-base text-gray-400"> envoyées</span></p>
        <div className="mt-6 flex items-end gap-2 h-20">
          {campagnesParMois.map((v, i) => (
            <span
              key={i}
              className={`flex-1 rounded-xl ${i === campagnesParMois.length - 1 ? "bg-[linear-gradient(180deg,#155DFC_0%,#00BBA7_100%)]" : "bg-[#F1F6FB]"}`}
              style={{ height: `${(v / 4) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* ===== Raccourcis ===== */}
      {[
        { icon: Newspaper, titre: "Newsletter", texte: "Rédigez et envoyez une campagne à vos abonnés.", page: "Newsletter" },
        { icon: FileText, titre: "Gestion contenu", texte: "Services, articles du blog et pages du site.", page: "Gestion contenu" },
      ].map(({ icon: Icon, titre, texte, page }) => (
        <button
          key={page}
          type="button"
          onClick={() => onNavigate?.(page)}
          className="group lg:col-span-4 rounded-[28px] bg-white p-6 text-left flex flex-col transition hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-30px_rgba(21,93,252,0.5)]"
        >
          <span className="grid place-items-center w-12 h-12 rounded-2xl bg-[#155DFC]/10 text-[#155DFC] transition-colors group-hover:bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] group-hover:text-white">
            <Icon size={22} />
          </span>
          <p className="mt-6 text-xl font-semibold text-gray-950">{titre}</p>
          <p className="mt-1 text-sm text-gray-500">{texte}</p>
          <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-950">
            Ouvrir <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      ))}

      {/* ===== Sécurité ===== */}
      <div className="lg:col-span-12 rounded-[28px] bg-gray-950 p-6 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid place-items-center w-11 h-11 rounded-2xl bg-white/10 text-[#00BBA7]"><Lock size={18} /></span>
          <div>
            <p className="font-semibold">Sécurité du compte</p>
            <p className="text-sm text-white/60">Pensez à changer régulièrement votre mot de passe.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onNavigate?.("Mot de passe")}
          className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-950"
        >
          Changer le mot de passe <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
