import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface CyberSleuthProps {
  previewUrl: string;
}

const CyberSleuth = ({ previewUrl }: CyberSleuthProps) => {
  return (
    <div className="relative bg-cardYellow w-full h-full group dark:bg-darkBg">
      {/* Background blob */}
      <div className="absolute -top-40 left-40 bg-cardPink w-[135%] h-full rounded-full dark:hidden" />

      {/* Rotated preview image */}
      {/* <div className="absolute top-16 md:top-1/2 -translate-y-1/2 left-12 md:left-16 rounded-2xl -rotate-[20deg] w-full">
        <Image
          priority
          alt="CyberSleuth Preview"
          className="h-full w-full rounded-2xl object-contain"
          height={1000}
          quality={75}
          src={previewUrl}
          width={1400}
        />
      </div> */}

      {/* Overlay text at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-2xl">
        <h3 className="text-lg font-bold">Cyber Sleuth</h3>
        <p className="text-sm">
          Ethical hacking and penetration testing on virtual machines using Kali Linux and Hydra to explore network vulnerabilities.
        </p>
      </div>


      {/* Link button */}
      <button className="absolute bg-white dark:bg-darkBg top-2 right-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-[14rem] p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://github.com/vindhya-jain/CyberSleuth-ExploringNetworkThreats"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              CyberSleuth
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default CyberSleuth;
