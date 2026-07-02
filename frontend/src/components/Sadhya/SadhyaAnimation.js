import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dishes from "@/data/sadhya";
gsap.registerPlugin(ScrollTrigger);

export function initializeSadhyaAnimation(section) {

    const scrollDistance = dishes.length * 350;

    ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: `+=${scrollDistance}`,
    pin: true,
    scrub: true,
    });

}