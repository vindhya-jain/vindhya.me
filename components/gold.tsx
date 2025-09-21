import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface GoldPriceProps {
  previewUrl: string;
}

const GoldPrice = ({ previewUrl }: GoldPriceProps) => {
  return (
    <div className="relative bg-cardGreen w-full h-full group dark:bg-darkBg">
      {/* Background blob */}
      <div className="absolute -top-40 left-40 bg-cardYellow w-[135%] h-full rounded-full dark:hidden" />

      {/* Rotated image like WebAgent */}
      <div className="absolute top-1/2 -translate-y-1/2 left-24 md:left-32 transform -rotate-[15deg] rounded-2xl w-[80%]">
        <Image
          priority
          alt="Gold Price Prediction Preview"
          className="w-full h-full object-contain rounded-2xl"
          height={800}
          loading="eager"
          quality={75}
          src={previewUrl}
          width={1000}
        />
      </div>

      {/* Overlay text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-2xl">
        <h3 className="text-lg font-bold">Gold Price Prediction</h3>
        <p className="text-sm">
          Analyzed market data to predict gold prices using machine learning and real-time financial insights.
        </p>
      </div>

      {/* Link button */}
      <button className="absolute bg-white dark:bg-darkBg top-2 left-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-[15rem] p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://github.com/vindhya-jain/Financial-Data-Analysis_Gold-Price-Prediction"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Gold Price Prediction
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default GoldPrice;
