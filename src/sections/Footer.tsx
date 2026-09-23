"use client";

import logoSaas from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYouTube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:buttom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={logoSaas}
            alt="SaaS Logo"
            height={40}
            className="relative"
          />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialX />
          <SocialYouTube />
        </div>
        <p className="mt-6">
          &copy; 2026 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
