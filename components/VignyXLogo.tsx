export default function VignyXLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="VignyX logo"
    >
      {/* Background rounded square */}
      <rect width="36" height="36" rx="8" fill="#4338ca" />

      {/* V shape */}
      <path
        d="M9 10 L18 24 L27 10"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Circuit line accent — horizontal line from V base with node dots */}
      <line x1="14" y1="24" x2="8" y2="24" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="24" x2="28" y2="24" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="24" r="1.5" fill="#a5b4fc" />
      <circle cx="28" cy="24" r="1.5" fill="#a5b4fc" />

      {/* Small circuit node at V base */}
      <circle cx="18" cy="24" r="2" fill="#a5b4fc" />
    </svg>
  );
}
