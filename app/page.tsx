import React from "react";
import Link from "next/link";
import Particles from "./components/particles";
import { Card } from "./components/card";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/80 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Devcrypto
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      {/* Carte */}
      <div className="my-16 text-center animate-fade-in" id="boxes">
        <div className="flex justify-center">  <div id="column1">
            <Link href="/contact">
              <div className="relative">
                <Card>
                  <div className="p-4 bg-transparent rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-white">L'équipe</h2>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
          <div id="column2">
            <Link href="/crypto">
              <div className="relative">
                <Card>
                  <div className="p-4 bg-transparent rounded-md shadow-md">
                    <h2 className="text-lg font-semibold text-white">Cryptocurrencies</h2>
                  </div>
                </Card>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
