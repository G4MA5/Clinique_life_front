import React from "react";
import LectureArticle from "../components/articles/LectureArticle";

// Page de lecture d'un article. Les anciennes sections (Partie2_lire_article_blog 1 à 6)
// sont regroupées dans LectureArticle ; leurs fichiers sont conservés mais ne sont plus affichés.
const LireArticle: React.FC = () => {
  return (
    <main className="min-h-screen bg-white pt-[80px] overflow-x-clip">
      <LectureArticle />
    </main>
  );
};

export default LireArticle;
