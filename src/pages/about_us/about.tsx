import Aboutone from "@/component/common/aboutone";
import AboutTwo from "@/component/common/abouttwo";
import App_layout from "@/component/layout/app_layout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Software | About Us",
  description: "Learn more about our AI software company and capabilities",
};

export default function About() {
  const logos = [
    { name: "petronas", image: "/about/petronas-colour-2.png" },
    { name: "sunway", image: "/about/sunway-colour.png" },
    { name: "fpt", image: "/about/fpt-colour.png" },
    { name: "scs", image: "/about/scs-colour.png" },
    { name: "rce", image: "/about/rce-colour.png" },
    { name: "metahub", image: "/about/metahub-colour.png" },
  ];

  return (
    <App_layout>
      <Aboutone />
      <AboutTwo />

      <div className="bg-gray-100 py-10 overflow-hidden">
        <h2 className="text-4xl font-bold text-center mb-8">
          Our Major <span className="text-orange-500">Capabilities</span>
        </h2>

        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set */}
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-36 w-[200px] h-[200px]"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Second set (loop) */}
            {logos.map((logo, index) => (
              <div
                key={`repeat-${index}`}
                className="flex-shrink-0 mx-36 w-[200px] h-[200px]"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Page-level CSS ONLY */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}</style>
      </div>
    </App_layout>
  );
}
