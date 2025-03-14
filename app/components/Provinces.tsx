"use client"
import { useEffect, useState } from "react";
import { MapPinHouse } from "lucide-react";
import Link from "next/link";
import { provinces } from "@/assets/provinces";

const Provinces = () => {
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  useEffect(() => {
    const parentContainers = document.querySelectorAll(".parent-container");

    // Initialize visibility states for all parent containers
    setVisibleStates(new Array(parentContainers.length).fill(false));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(parentContainers).indexOf(entry.target);

            if (index !== -1) {
              setVisibleStates((prevStates) => {
                const newStates = [...prevStates];
                newStates[index] = true; // Mark the specific container as visible
                return newStates;
              });
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    parentContainers.forEach((container) => observer.observe(container));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-8 bg-slate-300/10 border p-3 md:p-10 rounded ">
      <h2 className="w-full text-center  font-black text-3xl m-2 text-gray-700">
        Toutes les provinces postales au Maroc
      </h2>

      {/* Parent containers */}
      {[
        Object.keys(provinces).slice(0, 12),
        Object.keys(provinces).slice(13, 25),
        Object.keys(provinces).slice(26, 38),
        Object.keys(provinces).slice(39, 51),
        Object.keys(provinces).slice(52),
      ].map((provinceGroup, groupIndex) => (
        <div
          key={`province-group-${groupIndex}`}
          className={`parent-container w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-1 text-gray-800 border-b p-6 rounded-md ${
            visibleStates[groupIndex] ? "opacity-0 animate-fadeIn" : "opacity-0"
          }`}
        >
          {provinceGroup.map((province, index) => (
            <div
              key={provinces[province][0].NOUVEAU_CODE_POSTAL + "-" + index}
              className="w-full p-1 flex gap-1 justify-centter bg-gray-200 items-center rounded"
            >
              <div className="p-1 bg-emerald-600 rounded">

              <MapPinHouse className="text-white" size={12} />
              </div>
              <Link
                href={`/provinces/${province
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
                className="hover:underline "
              >
                {province.toLowerCase().charAt(0).toUpperCase() +
                  province.toLowerCase().slice(1)}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Provinces;
