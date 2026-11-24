import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock, Lightbulb, Share2, Phone } from "lucide-react";
import { articles } from "../../data/blogArticles";
import Logo from "../../assets/life.png";
import ImageBilan from "../../assets/bilan.jpg";
import ImageExamens from "../../assets/doc5.png";

// Page de lecture d'un article (contenu repris des anciennes sections Partie2_lire_article_blog 1 à 6)
const ease = [0.22, 1, 0.36, 1] as const;
const article = articles[0];
const similaires = articles.filter((a) => a.id !== article.id);

const sections = [
  { id: "pourquoi", titre: "Pourquoi réaliser un bilan de santé ?" },
  { id: "examens", titre: "Quels examens selon votre âge ?" },
  { id: "deroulement", titre: "Comment se déroule un bilan à la Clinique Life ?" },
  { id: "conclusion", titre: "En conclusion" },
];

const LectureArticle: React.FC = () => {
  // Barre de progression de lecture
  const { scrollYProgress } = useScroll();
  const progression = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Section en cours de lecture (pour le sommaire)
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const url = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";

  return (
    <article className="relative w-full bg-white">
      <motion.div style={{ scaleX: progression }} className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-[linear-gradient(90deg,#155DFC_0%,#00BBA7_100%)]" />

      {/* ===== En-tête ===== */}
      <header className="relative overflow-hidden bg-[#F7FAFE] px-4 md:px-8 pt-8 pb-0">
        <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#155DFC14_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-gray-950 transition">
            <ArrowLeft size={16} /> Retour au blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="mt-10 text-center">
            <span className="inline-block rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] px-4 py-1 text-xs font-semibold text-white">{article.categorie}</span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-gray-950">{article.titre}</h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-[#155DFC]/10 text-xs font-bold text-[#155DFC]">KM</span>
                <b className="text-gray-950 font-semibold">{article.auteur}</b>
              </span>
              <span className="flex items-center gap-1.5"><CalendarDays size={15} /> {article.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} /> {article.lecture} de lecture</span>
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            src={article.image}
            alt={article.titre}
            className="relative mt-12 w-full aspect-[16/8] object-cover rounded-t-[36px]"
          />
        </div>
      </header>

      {/* ===== Corps : sommaire collant + texte ===== */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-8">
            <nav>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Sommaire</p>
              <ol className="mt-4 space-y-1 border-l border-gray-200">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`-ml-px block border-l-2 pl-4 py-1.5 text-sm transition ${active === s.id ? "border-[#155DFC] text-gray-950 font-semibold" : "border-transparent text-gray-400 hover:text-gray-700"}`}
                    >
                      {s.titre}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2"><Share2 size={13} /> Partager</p>
              <div className="mt-4 flex gap-2">
                {[
                  ["Facebook", `https://www.facebook.com/sharer/sharer.php?u=${url}`],
                  ["X", `https://twitter.com/intent/tweet?url=${url}`],
                  ["LinkedIn", `https://www.linkedin.com/sharing/share-offsite/?url=${url}`],
                ].map(([nom, lien]) => (
                  <a key={nom} href={lien} target="_blank" rel="noreferrer" className="rounded-full bg-[#F1F6FB] px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-950 hover:text-white transition">
                    {nom}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="max-w-3xl text-[17px] leading-[1.85] text-gray-600">
          {/* Chapô */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-950 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.85] first-letter:text-[#155DFC]">
            La prévention est la meilleure stratégie pour préserver votre santé sur le long terme. Un bilan de santé régulier
            permet de détecter précocement d'éventuelles anomalies et d'adopter rapidement les mesures appropriées. À la
            Clinique Life, nous recommandons à tous nos patients de réaliser un bilan annuel adapté à leur âge et à leurs
            antécédents médicaux.
          </p>

          <h2 id="pourquoi" className="scroll-mt-28 mt-14 text-3xl font-bold tracking-tight text-gray-950">Pourquoi réaliser un bilan de santé ?</h2>
          <p className="mt-5">
            Un bilan de santé complet est essentiel pour plusieurs raisons. Il permet tout d'abord de détecter des maladies
            silencieuses qui ne présentent pas encore de symptômes visibles. De nombreuses pathologies comme le diabète,
            l'hypertension ou certains cancers peuvent évoluer pendant des années sans signes apparents.
          </p>
          <figure className="my-10">
            <img src={ImageBilan} alt="Consultation médicale" className="w-full aspect-[16/9] object-cover rounded-[28px]" />
          </figure>
          <p>
            De plus, un bilan régulier permet d'évaluer vos facteurs de risque personnels et d'adapter votre mode de vie en
            conséquence. C'est également l'occasion de faire le point avec votre médecin sur vos habitudes alimentaires, votre
            activité physique et votre gestion du stress.
          </p>

          <h2 id="examens" className="scroll-mt-28 mt-14 text-3xl font-bold tracking-tight text-gray-950">Quels examens selon votre âge ?</h2>
          <div className="mt-6 grid gap-4">
            {[
              ["20 – 40 ans", "Pour les adultes de 20 à 40 ans, nous recommandons une prise de sang complète comprenant le bilan lipidique, la glycémie et les fonctions rénale et hépatique. Un contrôle de la tension artérielle est également important."],
              ["40 ans et +", "À partir de 40 ans, il convient d'ajouter des examens plus spécifiques : dépistage du diabète de type 2, contrôle cardiovasculaire approfondi et pour les femmes, mammographie et frottis cervico-utérin. Les hommes devraient également envisager un dépistage du cancer de la prostate."],
              ["50 ans et +", "Après 50 ans, la fréquence et l'étendue des examens augmentent. Le dépistage du cancer colorectal devient essentiel, ainsi qu'une surveillance accrue des fonctions cardiaques et rénales."],
            ].map(([age, texte]) => (
              <div key={age} className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-3 rounded-[24px] bg-[#F7FAFE] p-5">
                <span className="self-start rounded-full bg-gray-950 px-3 py-1 text-center text-sm font-semibold text-white">{age}</span>
                <p className="text-[16px] leading-relaxed">{texte}</p>
              </div>
            ))}
          </div>
          <figure className="my-10">
            <img src={ImageExamens} alt="Examens médicaux" className="w-full aspect-[16/9] object-cover rounded-[28px]" />
          </figure>

          <h2 id="deroulement" className="scroll-mt-28 mt-14 text-3xl font-bold tracking-tight text-gray-950">Comment se déroule un bilan à la Clinique Life ?</h2>
          <ol className="mt-6 space-y-6">
            <li className="grid grid-cols-[auto_1fr] gap-5">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-[#155DFC] text-white font-bold">1</span>
              <p>
                À la Clinique Life, nous avons conçu un parcours de bilan de santé complet et personnalisé. Vous commencez par un
                entretien approfondi avec l'un de nos médecins qui évalue vos antécédents médicaux et familiaux.
              </p>
            </li>
            <li className="grid grid-cols-[auto_1fr] gap-5">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-[#00BBA7] text-white font-bold">2</span>
              <p>
                Ensuite, vous réalisez les examens nécessaires dans nos laboratoires équipés de technologies de pointe. Tous les
                résultats sont centralisés et analysés par votre médecin référent qui vous reçoit pour un compte-rendu détaillé et
                des recommandations personnalisées.
              </p>
            </li>
          </ol>

          {/* Conclusion en encadré */}
          <aside id="conclusion" className="scroll-mt-28 relative mt-14 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] p-8 md:p-10 text-white">
            <span className="pointer-events-none absolute -right-12 -top-12 w-48 h-48 rounded-full border border-white/20 anim-ring" />
            <span className="relative grid place-items-center w-12 h-12 rounded-2xl bg-white text-[#155DFC]"><Lightbulb size={22} /></span>
            <h3 className="relative mt-5 text-2xl font-bold">En conclusion</h3>
            <p className="relative mt-3 text-white/90 leading-relaxed">
              Prendre soin de sa santé est un investissement sur le long terme. N'attendez pas l'apparition de symptômes pour
              consulter. Un bilan régulier vous permet de rester acteur de votre santé et de bénéficier d'une prise en charge
              précoce en cas de besoin.
            </p>
          </aside>

          {/* Mots-clés + signature */}
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-gray-100 pt-8">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span key={t} className="rounded-full bg-[#F1F6FB] px-3 py-1 text-sm font-medium text-gray-700">#{t}</span>
              ))}
            </div>
            <span className="flex items-center gap-3 text-sm text-gray-500">
              <img src={Logo} alt="Clinique Life" className="w-9 h-9 object-contain" /> Rédigé par l'équipe de la Clinique Life
            </span>
          </div>
        </div>
      </div>

      {/* ===== Articles similaires ===== */}
      <section className="bg-[#F7FAFE] px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-950">
            À lire <span className="italic font-serif font-normal text-gray-400">aussi</span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {similaires.map((a) => (
              <Link key={a.id} to="/blog" className="group grid grid-cols-[140px_1fr] sm:grid-cols-[200px_1fr] overflow-hidden rounded-[28px] bg-white">
                <img src={a.image} alt={a.titre} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="p-5 flex flex-col">
                  <span className="self-start rounded-full bg-[#155DFC]/10 px-3 py-1 text-xs font-semibold text-[#155DFC]">{a.categorie}</span>
                  <h3 className="mt-3 font-semibold leading-snug text-gray-950">{a.titre}</h3>
                  <p className="mt-auto pt-3 text-xs text-gray-400">{a.date} · {a.lecture}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Appel à l'action ===== */}
      <section className="relative overflow-hidden bg-gray-950 px-4 md:px-8 py-20 text-white text-center">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#155DFC]/30 blur-[120px]" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Besoin de plus d'informations ?</h2>
          <p className="mt-4 text-white/70">Notre équipe médicale est à votre disposition pour répondre à toutes vos questions.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/rdv" className="group inline-flex items-center gap-3 rounded-full bg-white pl-6 pr-1.5 py-1.5 font-semibold text-gray-950">
              Prendre rendez-vous
              <span className="grid place-items-center w-9 h-9 rounded-full bg-gray-950 text-white transition-transform group-hover:rotate-45"><ArrowUpRight size={16} /></span>
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold ring-1 ring-white/30 hover:bg-white/10 transition">
              <Phone size={16} /> Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
};

export default LectureArticle;
