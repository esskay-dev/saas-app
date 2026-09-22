import ArrowRight from "@/assets/arrow-right.svg";
import Spring from "@/assets/spring.png";
import Star from "@/assets/star.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={Star}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={Spring}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px] md:"
          />
          <div className="flex justify-center gap-2 mt-10 ">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowRight className="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
