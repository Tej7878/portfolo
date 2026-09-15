import { motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#work", label: "Work" },
  { href: "#practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="nav-glass fixed top-0 z-50 flex w-full items-center justify-between px-5 py-3 md:px-10"
    >
      <a href="#top" className="flex items-center" aria-label="velveta.ai home">
        <Logo className="h-11 w-11 md:h-12 md:w-12" wordmark />
      </a>
      <nav className="flex gap-6 text-[12px] tracking-[0.22em] uppercase">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative opacity-80 transition hover:text-gold hover:opacity-100 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-ember after:to-gold after:transition-all hover:after:w-full"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
