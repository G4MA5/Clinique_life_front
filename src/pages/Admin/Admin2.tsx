import React, { useState, useEffect } from "react";
import { LayoutDashboard, FileText, Newspaper, LogOut, Menu, X, Users, Lock, UserPlus, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/life.png";

import VueEnsemble2 from "./VueEnsemble2";
import GestionContenu from "./GestionContenu";
import Newslater from "./Newslater";
import ChangePassword from "./Changepassword";
import BandeauRubrique from "./BandeauRubrique";

/* ---------- MENU ITEM ---------- */
// Même menu que l'admin 1 : icône seule (rail) avec infobulle, ou icône + libellé quand le menu est ouvert
const MenuItem = ({ icon, label, active, onClick, sidebarOpen }: any) => (
  <button
    type="button"
    onClick={onClick}
    title={label}
    className={`group relative w-full flex items-center gap-3 rounded-2xl transition-colors duration-200
      ${sidebarOpen ? "px-4 py-3" : "justify-center p-3"}
      ${active ? "bg-gray-950 text-white shadow-lg shadow-gray-950/20" : "text-gray-400 hover:bg-[#F1F6FB] hover:text-gray-950"}
    `}
  >
    <span className={active ? "text-[#00BBA7]" : ""}>{icon}</span>
    {sidebarOpen && <span className="text-sm font-semibold">{label}</span>}
    {!sidebarOpen && (
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-gray-950 px-2.5 py-1 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100 z-50">
        {label}
      </span>
    )}
  </button>
);

const Admin2: React.FC = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Vue d'ensemble");
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const renderPage = () => {
    switch (activePage) {
      case "Vue d'ensemble":
        return <VueEnsemble2 onNavigate={setActivePage} />;
      case "Newsletter":
        return <Newslater />;
      case "Gestion contenu":
        return <GestionContenu />;
      case "Mot de passe":
        return <ChangePassword />;
      default:
        return <VueEnsemble2 onNavigate={setActivePage} />;
    }
  };

  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Vue d'ensemble" },
    { icon: <Newspaper size={18} />, label: "Newsletter" },
    { icon: <FileText size={18} />, label: "Gestion contenu" },
    { icon: <UserPlus size={18} />, label: "Gestion admins" },
    { icon: <Lock size={18} />, label: "Mot de passe" },
  ];

  return (
    <div className="h-screen bg-[#E9EEF5] p-0 md:p-4 overflow-hidden">
      <div className="relative h-full flex bg-[#F7FAFE] md:rounded-[32px] overflow-hidden md:shadow-[0_30px_80px_-40px_rgba(21,93,252,0.45)]">
        {/* MOBILE OVERLAY */}
        {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* ---------- SIDEBAR ---------- */}
        <aside
          className={`bg-white flex flex-col py-6 transition-all duration-300 fixed inset-y-0 left-0 z-50 h-full md:relative md:translate-x-0 md:border-r md:border-gray-100
            ${sidebarOpen ? "translate-x-0 w-64 px-4" : "-translate-x-full md:w-[84px] md:px-3 w-64 px-4"}
          `}
        >
          <div className="flex-1 flex flex-col min-h-0">
            <div className={`flex items-center mb-8 shrink-0 ${sidebarOpen ? "gap-3 px-2" : "justify-center"}`}>
              <span className="grid place-items-center w-11 h-11 rounded-2xl bg-[#F1F6FB]">
                <img src={logo} alt="Clinique Life" className="w-8 h-8 object-contain" />
              </span>
              {sidebarOpen && (
                <div>
                  <h2 className="font-bold text-gray-950 leading-tight">Clinique Life</h2>
                  <p className="text-xs text-gray-400">Admin niveau 2</p>
                </div>
              )}
            </div>

            <nav className={`flex-1 space-y-1.5 ${sidebarOpen ? "overflow-y-auto" : "overflow-visible"} custom-scrollbar`}>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  {...item}
                  active={activePage === item.label}
                  onClick={() => {
                    setActivePage(item.label);
                    if (window.innerWidth <= 768) setSidebarOpen(false);
                  }}
                  sidebarOpen={sidebarOpen}
                />
              ))}
            </nav>
          </div>

          <button
            onClick={logout}
            title="Déconnexion"
            className={`mt-4 shrink-0 flex items-center gap-3 rounded-2xl text-red-500 hover:bg-red-50 transition ${sidebarOpen ? "px-4 py-3" : "justify-center p-3"}`}
          >
            <LogOut size={18} />
            {sidebarOpen && <span className="text-sm font-semibold">Déconnexion</span>}
          </button>
        </aside>

        {/* ---------- CONTENT ---------- */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          <header className="flex items-center justify-between gap-4 px-4 md:px-8 pt-5 pb-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Menu"
                className="grid place-items-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-600 shadow-sm hover:text-gray-950 transition"
              >
                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
              <div className="min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-gray-950 truncate">Bonjour, Administrateur 2 👋</h1>
                <p className="hidden sm:block text-xs md:text-sm text-gray-400 truncate">
                  {activePage === "Vue d'ensemble" ? "Gestion du contenu et de la communication" : `Vous êtes dans : ${activePage}`}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-950 pl-4 pr-1.5 py-1.5 text-sm font-semibold text-white"
              >
                Voir le site
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white text-gray-950"><ExternalLink size={13} /></span>
              </a>
              <div className="grid place-items-center w-10 h-10 rounded-full bg-[linear-gradient(135deg,#155DFC_0%,#00BBA7_100%)] text-white shadow-sm" title="Administrateur 2">
                <Users size={18} />
              </div>
            </div>
          </header>

          <main className="flex-1 px-4 md:px-8 pb-8 pt-3 overflow-y-auto">
            {activePage !== "Vue d'ensemble" && (
              <BandeauRubrique titre={activePage} icon={menuItems.find((m) => m.label === activePage)?.icon} />
            )}
            <div className={activePage === "Vue d'ensemble" ? "" : "admin-page"}>{renderPage()}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin2;
