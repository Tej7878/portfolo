type LogoProps = {
  className?: string;
  wordmark?: boolean;
};

export function Logo({ className = "h-10 w-10", wordmark = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src="/logo.png"
        alt=""
        className={`${className} object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(232,74,200,0.45)]`}
      />
      {wordmark && (
        <span className="text-[13px] font-semibold tracking-[0.22em] uppercase">velveta.ai</span>
      )}
    </span>
  );
}
