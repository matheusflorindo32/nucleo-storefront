function LogoNTS({ className = "logo-svg", titulo = "Núcleo TADS Store" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 360 96"
      role="img"
      aria-label={titulo}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ntsHexFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0A2342" />
          <stop offset="100%" stopColor="#1E5AA8" />
        </linearGradient>
        <linearGradient id="ntsHexStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#C8A24A" />
        </linearGradient>
        <linearGradient id="ntsWord" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A2342" />
          <stop offset="100%" stopColor="#1E5AA8" />
        </linearGradient>
      </defs>

      {/* Hexágono */}
      <g transform="translate(8 8)">
        <polygon
          points="40,2 76,22 76,62 40,82 4,62 4,22"
          fill="url(#ntsHexFill)"
          stroke="url(#ntsHexStroke)"
          strokeWidth="2.5"
        />
        {/* Circuitos decorativos */}
        <g stroke="#14B8A6" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M14 30 H26 V40 H36" />
          <path d="M66 30 H54 V40 H44" />
          <path d="M14 56 H30 V46" />
          <path d="M66 56 H50 V46" />
        </g>
        <g fill="#C8A24A">
          <circle cx="14" cy="30" r="1.8" />
          <circle cx="66" cy="30" r="1.8" />
          <circle cx="14" cy="56" r="1.8" />
          <circle cx="66" cy="56" r="1.8" />
        </g>
        {/* Letra N central */}
        <text
          x="40"
          y="55"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fontWeight="800"
          fontSize="34"
          fill="#FFFFFF"
        >
          N
        </text>
      </g>

      {/* Wordmark */}
      <g transform="translate(108 0)">
        <text
          x="0"
          y="56"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="2"
          fill="url(#ntsWord)"
        >
          NTS
        </text>
        <text
          x="2"
          y="80"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fontWeight="600"
          fontSize="11"
          letterSpacing="3.5"
          fill="#14B8A6"
        >
          NÚCLEO
        </text>
        <text
          x="72"
          y="80"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fontWeight="800"
          fontSize="11"
          letterSpacing="3.5"
          fill="#0A2342"
        >
          TADS
        </text>
        <text
          x="118"
          y="80"
          fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
          fontWeight="600"
          fontSize="11"
          letterSpacing="3.5"
          fill="#C8A24A"
        >
          STORE
        </text>
      </g>
    </svg>
  );
}

export default LogoNTS;
