import React from "react";
import { Users, Stethoscope, Award, Activity } from "lucide-react";

// Section « Nos réalisations » : chiffres clés
const stats = [
  { icon: Users, value: "25 000+", label: "Patients traités" },
  { icon: Stethoscope, value: "50 000+", label: "Consultations" },
  { icon: Award, value: "15+", label: "Années d'expérience" },
  { icon: Activity, value: "98%", label: "Taux de satisfaction" },
];

const Partie5_apropos: React.FC = () => (
  <section className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] py-20 px-4 md:px-8 text-white">
    <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/15 blur-3xl" />
    <div className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-white/20 anim-ring" />
    <div className="pointer-events-none absolute -right-6 -bottom-6 w-48 h-48 rounded-full border border-white/25 anim-ring anim-ring-delay" />

    <div className="relative max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-bold">Nos réalisations</h2>
        <p className="mt-5 text-lg text-white/80">Des chiffres qui témoignent de notre engagement et de votre confiance</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[32px] bg-white/10 backdrop-blur-md ring-1 ring-white/20 divide-x divide-y lg:divide-y-0 divide-white/15 overflow-hidden">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="p-6 md:p-10 flex flex-col items-center text-center">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white text-[#155DFC]">
              <Icon size={22} />
            </span>
            <p className="mt-5 text-3xl md:text-5xl font-bold tracking-tight">{value}</p>
            <p className="mt-2 text-sm md:text-base text-white/80">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partie5_apropos;
