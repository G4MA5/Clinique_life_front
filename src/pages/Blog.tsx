import React from "react";
import Partie1_blog from "../components/blogs/Partie1_blog";
import Partie2_blog from "../components/blogs/Partie2_blog";
import Partie4_blog from "../components/blogs/Partie4_blog";
import FadeIn from "../components/animations/FadeIn";

// Page Blog : en-tête magazine, à la une + articles, citation + newsletter
// (Partie3_blog n'est plus affichée : ses articles sont repris dans data/blogArticles.ts)
const Blog: React.FC = () => {
  return (
    <main className="min-h-screen bg-white overflow-x-clip">
      <Partie1_blog />
      <Partie2_blog />
      <FadeIn duration={0.8} direction="up">
        <Partie4_blog />
      </FadeIn>
    </main>
  );
};

export default Blog; // ✅ OBLIGATOIRE
