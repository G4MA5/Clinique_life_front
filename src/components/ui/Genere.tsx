import React from "react";

// Marque le contenu GÉNÉRÉ (absent du site d'origine) pour qu'il soit relu.
// Passer AFFICHER_MARQUES à false pour masquer toutes les marques d'un coup.
export const AFFICHER_MARQUES = true;

type Props = { children: React.ReactNode; dark?: boolean };

const Genere: React.FC<Props> = ({ children, dark }) => {
  if (!AFFICHER_MARQUES) return <>{children}</>;
  return (
    <span
      title="Contenu généré — à valider"
      className={`relative decoration-dashed underline underline-offset-4 ${
        dark ? "decoration-amber-300" : "decoration-amber-500"
      }`}
    >
      {children}
      <sup
        className={`ml-1 select-none rounded px-1 text-[10px] font-bold no-underline ${
          dark ? "bg-amber-300 text-amber-950" : "bg-amber-100 text-amber-700"
        }`}
      >
        ✎ à valider
      </sup>
    </span>
  );
};

export default Genere;
