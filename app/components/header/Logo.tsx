import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
      {/* Logo Icon */}
      <svg viewBox="0 0 200 200" className="w-10 h-10">
        {/* Simple square frame */}
        <rect
          x="50"
          y="50"
          width="100"
          height="100"
          fill="none"
          stroke="#C1272D"
          strokeWidth="4"
          rx="8"
        />
        
        {/* Inner lines creating postal stamp effect */}
        <rect
          x="60"
          y="60"
          width="80"
          height="80"
          fill="none"
          stroke="#006233"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        
        {/* CP text */}
        <text
          x="100"
          y="110"
          fontFamily="monospace"
          fontSize="32"
          fontWeight="bold"
          fill="#C1272D"
          textAnchor="middle"
        >
          CP
        </text>
      </svg>

      {/* Logo Text */}
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-base font-bold text-slate-800">
          Code Postal
        </span>
        <span className="text-xs text-green-700 font-medium">
          MAROC
        </span>
      </div>
    </Link>
  )
}

export default Logo