import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface DddProps {
  previewUrl: string;
}

const Ddd = ({ previewUrl }: DddProps) => {
  return (
    <div className="relative bg-cardBlue w-full h-full group dark:bg-darkBg">
      <div className="absolute -bottom-32 md:-bottom-52 left-1/2 -translate-x-1/2 bg-cardPink w-64 h-56 md:w-96 md:h-96 rounded-full dark:hidden" />

      {/* Rotated image like WebAgent */}
      <div className="absolute top-1/2 -translate-y-1/2 left-24 md:left-32 transform -rotate-[15deg] rounded-2xl w-[80%]">
        <Image
          priority
          alt="Driver Drowsiness Detection Preview"
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
        <h3 className="text-lg font-bold">Driver Drowsiness Detection</h3>
        <p className="text-sm">
          Detecting driver fatigue in real-time using facial landmarks and deep learning.
        </p>
      </div>

      {/* Link button */}
      <button className="absolute bg-white dark:bg-darkBg top-2 right-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-[17rem] p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://github.com/vindhya-jain/ZzzSafe"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Driver Drowsiness Detection
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default Ddd;
