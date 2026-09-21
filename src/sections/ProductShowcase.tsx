import productShowcase from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[55px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center ext-[22px] leading-[25px] tracking-tight text-[0110D3E] mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="relative">
          <Image src={productShowcase} alt="Product Image" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Pyramid Imade"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={262}
            width={262}
            className="absolute -left-36 bottom-24 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
