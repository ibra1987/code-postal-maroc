import Link from "next/link";
import { slugify } from "../utils/slugify";

export function AgenceCard({ 
  agence 
}: { 
  agence: { name: string; region: string; province: string; codePostal: number }
}) {
  return (
    <Link
      href={`/agences/${slugify(agence.name)}`}
      className="group block bg-white  border border-gray-200 hover:border-red-600 rounded-lg p-4 transition-all duration-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 group-hover:text-red-600 transition truncate">
            {agence.name}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {agence.province}
          </p>
        </div>
        <div className="shrink-0">
          <div className=" px-3 py-2 text-red-500  transition-colors border rounded-lg border-gray-200 bg-gray-100">
            <p className="text-[10px] uppercase tracking-wide">Code</p>
            <p className="font-mono font-bold text-base">
              {agence.codePostal}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}