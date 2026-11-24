import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, BookOpen, Mail, Calendar, Heart, ChevronDown, Stethoscope, Users, Menu, Phone, ArrowRight } from "lucide-react";
import logo from "/src/assets/life.png";

const links = [
  { label: "Accueil", path: "/", icon: Home },
  { label: "À propos", path: "/a-propos", icon: Info },
  { 
    label: "Nos ressources", 
    path: "/services", 
    icon: Briefcase,
    subMenu: [
      { label: "Nos services", path: "/services", icon: Stethoscope },
    { label: "Nos spécialistes", path: "/Specialiste", icon: Users },
    ]
  },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "Contact", path: "/contact", icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Empêcher le défilement de l'arrière-plan quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Nettoyage en cas de démontage
    };
  }, [isOpen]);

  // Transparente sur le hero de l'accueil, pleine dès qu'on défile
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const clair = pathname === "/" && !scrolled; // texte blanc sur la vidéo

  const lien = (actif: boolean) =>
    `relative px-1 py-2 font-medium transition-colors ${
      clair ? (actif ? "text-white" : "text-white/75 hover:text-white") : actif ? "text-gray-950" : "text-gray-500 hover:text-gray-950"
    }`;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          clair ? "bg-transparent" : "bg-white/85 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          {/* MOBILE & TABLET (< lg) : burger à gauche, logo seul au centre */}
          <div className="relative flex lg:hidden items-center w-full h-full">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Ouvrir le menu"
              className="grid place-items-center w-10 h-10 rounded-full bg-white/80 backdrop-blur text-slate-900 shadow-sm"
            >
              <Menu className="w-5 h-5" />
            </button>
            <NavLink to="/" aria-label="Accueil" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Clinique Life" className="w-11 h-11 object-contain drop-shadow" />
            </NavLink>
          </div>

          {/* DESKTOP (≥ lg) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <NavLink to="/" className="flex items-center gap-2.5 flex-1">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-white shadow-sm">
                <img src={logo} alt="" className="w-8 h-8 object-contain" />
              </span>
              <span className={`font-bold text-lg tracking-tight transition-colors ${clair ? "text-white" : "text-gray-950"}`}>
                Clinique Life
              </span>
            </NavLink>

            <ul className="flex items-center gap-8">
              {links.map(({ label, path, subMenu }) => (
                <li
                  key={label}
                  className="relative"
                  onMouseEnter={() => subMenu && setDropdownOpen(true)}
                  onMouseLeave={() => subMenu && setDropdownOpen(false)}
                >
                  {subMenu ? (
                    <>
                      <button className={`${lien(subMenu.some((m) => m.path === pathname))} flex items-center gap-1`}>
                        {label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                          >
                            <div className="w-60 rounded-2xl bg-white p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                              {subMenu.map((item) => (
                                <NavLink
                                  key={item.path}
                                  to={item.path}
                                  className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                                      isActive ? "bg-[#F1F6FB] text-[#155DFC]" : "text-gray-700 hover:bg-[#F1F6FB]"
                                    }`
                                  }
                                >
                                  <span className="grid place-items-center w-8 h-8 rounded-lg bg-[#155DFC]/10 text-[#155DFC]">
                                    <item.icon className="w-4 h-4" />
                                  </span>
                                  {item.label}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink to={path} end={path === "/"} className={({ isActive }) => lien(isActive)}>
                      {({ isActive }) => (
                        <>
                          {label}
                          <span
                            className={`absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#00BBA7] transition-all duration-300 ${
                              isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
                            }`}
                          />
                        </>
                      )}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-5 flex-1">
              <a
                href="tel:+2250701214580"
                className={`hidden xl:flex items-center gap-2 text-sm font-medium transition-colors ${clair ? "text-white/85 hover:text-white" : "text-gray-600 hover:text-gray-950"}`}
              >
                <Phone className="w-4 h-4" /> 07 01 21 45 80
              </a>
              <NavLink
                to="/rdv"
                className={`group inline-flex items-center gap-2 pl-5 pr-1.5 py-1.5 rounded-full font-semibold text-sm transition-colors ${
                  clair ? "bg-white text-gray-950" : "bg-gray-950 text-white"
                }`}
              >
                Rendez-vous
                <span
                  className={`grid place-items-center w-8 h-8 rounded-full transition-transform group-hover:translate-x-0.5 ${
                    clair ? "bg-gray-950 text-white" : "bg-white text-gray-950"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu latéral */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 230, damping: 25 }}
              className="
                fixed top-0 left-0 
                h-full 
                w-[280px] sm:w-[300px] md:w-[320px]
                bg-white
                backdrop-blur-xl
                z-[70] 
                pt-6 sm:pt-8
                px-6 sm:px-8 
                shadow-2xl
                overflow-y-auto
              "
            >
              {/* Décorations */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>

              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="
                  absolute 
                  top-6 
                  right-6 
                  p-3
                  text-slate-800
                  hover:text-slate-500
                  transition-colors
                  z-50
                "
              >
                ✕
              </button>

              {/* Logo dans le menu */}
              <div className="relative flex items-center gap-4 mb-10 sm:mb-12 mt-16 px-2">
                <img src={logo} alt="Logo" className="w-12 sm:w-14 h-12 sm:h-14 object-contain" />
                <div>
                  <span className="block font-bold text-[#134774] text-xl sm:text-2xl whitespace-nowrap">
                    Clinique Life
                  </span>
                  <span className="block text-sm text-slate-500 whitespace-nowrap">Votre santé, notre priorité</span>
                </div>
              </div>

              {/* Navigation avec icônes */}
              <nav className="relative flex flex-col gap-3 sm:gap-4 text-base sm:text-lg">
                {links.map(({ label, path, icon: Icon, subMenu }) => (
                  <div key={label}>
                    {subMenu ? (
                      // Menu avec sous-éléments
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full relative px-4 py-3 rounded-xl font-poppins font-semibold transition-all flex items-center justify-between gap-4 group text-slate-600 hover:bg-slate-50 hover:text-[#007E7B]"
                        >
                          <div className="flex items-center gap-4">
                            <Icon className="w-5 h-5 text-slate-400 group-hover:text-[#00BBA7] transition-colors" />
                            <span className="whitespace-nowrap">{label}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 transition-transform text-slate-400 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Sous-menu Mobile */}
                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0, y: -10 }}
                              animate={{ height: "auto", opacity: 1, y: 0 }}
                              exit={{ height: 0, opacity: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden ml-4 mt-2 mb-2 space-y-1.5 border-l-2 border-slate-100 pl-3"
                            >
                              {subMenu.map((item) => (
                                <NavLink
                                  key={item.path}
                                  to={item.path}
                                  onClick={() => setIsOpen(false)}
                                  className={({ isActive }) =>
                                    `relative px-4 py-3 rounded-xl font-poppins font-semibold transition-all duration-300 flex items-center gap-4 group
                                    ${isActive 
                                      ? "text-[#007E7B] bg-teal-50/50" 
                                      : "text-slate-500 hover:bg-slate-50 hover:text-[#007E7B]"}`
                                  }
                                >
                                  {({ isActive }) => (
                                    <>
                                      {/* Barre verticale pour l'élément actif */}
                                      {isActive && (
                                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#007E7B] rounded-r-full shadow-[0_0_8px_rgba(0,126,123,0.4)]" />
                                      )}
                                      
                                      <item.icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#007E7B]' : 'text-slate-400 group-hover:text-[#00BBA7]'}`} />
                                      <span className="whitespace-nowrap text-sm">{item.label}</span>
                                    </>
                                  )}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      // Lien normal
                      <NavLink
                        to={path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `relative px-4 py-3 rounded-xl font-poppins font-semibold transition-all flex items-center gap-4 group
                          ${isActive 
                            ? "text-[#007E7B] bg-teal-50/50" 
                            : "text-slate-500 hover:bg-slate-50 hover:text-[#007E7B]"}`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {/* Barre verticale pour l'élément actif */}
                            {isActive && (
                              <div className="absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#007E7B] rounded-r-full shadow-[0_0_8px_rgba(0,126,123,0.4)]" />
                            )}
                            
                            <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-[#007E7B] drop-shadow-sm' : 'text-slate-400 group-hover:text-[#00BBA7]'}`} />
                            <span className="whitespace-nowrap">{label}</span>
                          </>
                        )}
                      </NavLink>
                    )}
                  </div>
                ))}

                {/* Séparateur décoratif */}
                <div className="flex items-center gap-2 my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  <Heart className="w-4 h-4 text-red-400" fill="currentColor" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>

                {/* Bouton RDV dans menu - STYLE SPECIAL */}
                <NavLink
                  to="/rdv"
                  onClick={() => setIsOpen(false)}
                  className="
                    relative
                    bg-gradient-to-r from-[#155DFC] to-[#00BBA7]
                    text-white 
                    px-6 py-4
                    rounded-2xl
                    font-bold
                    text-center
                    shadow-xl
                    hover:shadow-2xl
                    hover:scale-105
                    transition-all
                    flex items-center justify-center gap-3
                    overflow-hidden
                    group
                  "
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10 whitespace-nowrap">Prendre Rendez-vous</span>
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;