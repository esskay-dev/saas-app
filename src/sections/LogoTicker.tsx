"use client";

import logoAcme from "@/assets/logo-acme.png";
import logoQuantum from "@/assets/logo-quantum.png";
import echoValley from "@/assets/logo-echo.png";
import celestial from "@/assets/logo-celestial.png";
import pulse from "@/assets/logo-pulse.png";
import logoApex from "@/assets/logo-apex.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={logoAcme}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={logoQuantum}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoValley}
              alt="Valley Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestial}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image src={pulse} alt="Pulse Logo" className="logo-ticker-image" />
            <Image
              src={logoApex}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            {/* Second set of logos animaion */}
            <Image
              src={logoAcme}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={logoQuantum}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoValley}
              alt="Valley Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestial}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image src={pulse} alt="Pulse Logo" className="logo-ticker-image" />
            <Image
              src={logoApex}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
