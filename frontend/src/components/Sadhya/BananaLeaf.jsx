"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";


import leaf from "@/assets/images/banana-leaf.png";

import dishes from "@/data/sadhya";
import Dish from "./Dish";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BananaLeaf() {
  const leafRef = useRef(null);

  useEffect(() => {

    gsap.fromTo(

        "#dish-1",

        {
            opacity:0,
            y:-400,
            rotate:-20,
            scale:.5
        },

        {
            opacity:1,
            y:0,
            rotate:0,
            scale:1,

            duration:1,

            ease:"bounce.out",

            scrollTrigger:{
                trigger:leafRef.current,

                start:"top 1%",

                toggleActions:"play none none none"
            }

        }

    )

  },[])

  return (
    <section
      ref={leafRef}
      className="relative flex justify-center min-h-screen"
    >
      <div className="relative w-full max-w-6xl">

        <Image
          src={leaf}
          alt="Banana Leaf"
          priority
          className="w-full h-auto"
        />

        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            dish={dish}
          />
        ))}

      </div>
    </section>
  );
}