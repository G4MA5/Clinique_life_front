import React from "react";
import type { LucideIcon } from "lucide-react";

// Cube 3D en CSS (dé blanc) avec une icône sur la face avant et la face droite.
type Props = {
  front: LucideIcon;
  side?: LucideIcon;
  size?: number; // côté en px
  className?: string;
  delay?: string; // décalage de l'animation
};

const Cube3D: React.FC<Props> = ({ front: Front, side: Side, size = 80, className = "", delay = "0s" }) => {
  const half = size / 2;
  const face = "absolute inset-0 rounded-[22%] grid place-items-center text-[#155DFC] [backface-visibility:hidden]";
  const icone = Math.round(size * 0.42);
  return (
    <div className={`cube-float [perspective:600px] ${className}`} style={{ width: size, height: size, animationDelay: delay }}>
      <div className="cube-spin relative w-full h-full [transform-style:preserve-3d]" style={{ animationDelay: delay }}>
        <div className={`${face} bg-white shadow-[inset_0_-6px_12px_rgba(21,93,252,0.08)]`} style={{ transform: `translateZ(${half}px)` }}>
          <Front size={icone} strokeWidth={2.2} />
        </div>
        <div className={`${face} bg-[#E9F0FB]`} style={{ transform: `rotateY(90deg) translateZ(${half}px)` }}>
          {Side && <Side size={icone} strokeWidth={2.2} />}
        </div>
        <div className={`${face} bg-[#F7FAFF]`} style={{ transform: `rotateX(90deg) translateZ(${half}px)` }} />
        <div className={`${face} bg-[#DCE6F7]`} style={{ transform: `rotateY(-90deg) translateZ(${half}px)` }} />
        <div className={`${face} bg-[#D3DFF3]`} style={{ transform: `rotateX(-90deg) translateZ(${half}px)` }} />
        <div className={`${face} bg-[#DCE6F7]`} style={{ transform: `rotateY(180deg) translateZ(${half}px)` }} />
      </div>
    </div>
  );
};

export default Cube3D;
