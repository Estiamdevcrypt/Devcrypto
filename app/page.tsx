import React from "react";
import Link from "next/link";
import Particles from "./components/particles";
import { Card } from "./components/card";

const navigation = [
  { name: "contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
    
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Devcrypto
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Lien vers la page de contact */}
      <div className="my-16 text-center animate-fade-in">
        <Link href="/contact">
          <Card>
            <div className="p-4 bg-gray-200 rounded-md shadow-md">
              <h2 className="text-lg font-semibold">L'equipe</h2>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}
