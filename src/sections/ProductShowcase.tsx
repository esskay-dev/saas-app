"use client";

import productShowcase from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title  mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsivel,
            SaaS website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <Image src={productShowcase} alt="Product Image" className="mt-10" />

          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Imade"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={262}
            width={262}
            className="absolute -left-36 bottom-24 hidden md:block"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
