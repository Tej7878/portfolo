import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col items-start gap-4 border-t border-paper/10 bg-gradient-to-r from-ember/10 via-ink to-blush/10 px-5 py-8 text-[11px] tracking-[0.22em] uppercase text-mist md:flex-row md:items-center md:justify-between md:px-10">
      <a href="#top" className="inline-flex items-center" aria-label="Back to top">
        <Logo className="h-9 w-9" wordmark />
      </a>
      <span>© {new Date().getFullYear()} velveta.ai</span>
      <span>Video · Garments · Ads</span>
    </footer>
  );
}
