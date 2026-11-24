import { MapPin, Navigation } from "lucide-react";
import Logo from "../../assets/life.png";

// Plan d'accès : carte Google Maps intégrée + carte d'adresse posée par-dessus
const ITINERAIRE =
  "https://www.google.com/maps/place/CLINIQUE+M%C3%89DICALE+LIFE/@5.4114731,-3.9716629,17z/data=!3m1!4b1!4m6!3m5!1s0xfc193799b22a97b:0x5a22fb6fb3abb026!8m2!3d5.4114731!4d-3.969088!16s%2Fg%2F11t6qw58ym?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D";
const CARTE = "https://www.google.com/maps?q=5.4114731,-3.969088&z=16&output=embed";

export default function Partie3() {
  return (
    <section className="w-full bg-white pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Venez nous voir</h2>
          <p className="mt-5 text-lg text-gray-500">
            Nous sommes facilement accessibles en transport en commun et disposons d'un parking.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[36px] ring-1 ring-gray-100 shadow-[0_40px_80px_-40px_rgba(21,93,252,0.45)]">
          <iframe
            title="Plan d'accès à la Clinique Life"
            src={CARTE}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full h-[460px] md:h-[520px] grayscale-[35%] contrast-[1.05]"
          />

          {/* Carte d'adresse */}
          <div className="md:absolute md:left-8 md:bottom-8 md:max-w-sm m-4 md:m-0 rounded-[28px] bg-white/95 backdrop-blur p-6 shadow-2xl ring-1 ring-white">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-12 h-12 rounded-2xl bg-white shadow ring-1 ring-gray-100">
                <img src={Logo} alt="Clinique Life" className="w-8 h-8 object-contain" />
              </span>
              <div>
                <p className="font-bold text-gray-950">Clinique Life</p>
                <p className="text-xs text-[#00968a] font-semibold">Ouvert 24h/24 · 7j/7</p>
              </div>
            </div>
            <p className="mt-5 flex items-start gap-2 text-gray-600">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#155DFC]" />
              <span>
                Angré GESTOCI
                <br />
                <span className="text-sm text-gray-500">100 m après CHINA MALL</span>
              </span>
            </p>
            <a
              href={ITINERAIRE}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gray-950 pl-5 pr-1.5 py-1.5 text-sm font-semibold text-white"
            >
              Obtenir l'itinéraire
              <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-gray-950 transition-transform group-hover:rotate-12">
                <Navigation size={14} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
