"use client";

import { useEffect, useRef } from "react";

import BananaLeaf from "./BananaLeaf";
import { initializeSadhyaAnimation } from "./SadhyaAnimation";

export default function SadhyaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    initializeSadhyaAnimation(sectionRef.current);
  }, []);
  return (
    <section className="bg-[#081C15] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-[#F6D365]">
            Onam 2026
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            Experience the traditional Kerala Sadhya,
            one dish at a time.
          </p>

        </div>

        <BananaLeaf />

      </div>

    </section>
  );

}