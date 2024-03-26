"use client";
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { Navigation } from "../components/nav";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

export default function Crypto() {
	return (
    <div className="">
      <Navigation />
      <NoSSR>
        <Layout>
          <div className="py-24 sm:py-32 lg:py-40">
            <div className="mx-auto max-w-7xl px-2 lg:px-4">
              <div className="sm:text-center">
                <h2 className="text-lg font-semibold leading-8 text-indigo-600">
                  Cryptocurrencies
                </h2>
              </div>

              {/* Main content - crypto cards */}
              <Ticker />

              <div className="mt-20 py-4 text-center"> 
                <p className="text-white"> Powered by Binance </p>
                <a href="https://www.binance.com/" className="underline text-indigo-600" target="_blank" rel="noreferrer"> Binance</a>
              </div>
            </div>
          </div>
        </Layout>
      </NoSSR>
    </div>
  );
}