import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(Boolean(el.closest("a, button, [data-cursor='hover']")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[90] hidden mix-blend-difference md:block"
      animate={{
        x: pos.x - (hovering ? 28 : 8),
        y: pos.y - (hovering ? 28 : 8),
        width: hovering ? 56 : 16,
        height: hovering ? 56 : 16,
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.4 }}
    >
      <div className="h-full w-full rounded-full bg-paper shadow-[0_0_24px_rgba(246,201,90,0.4)]" />
    </motion.div>
  );
}
