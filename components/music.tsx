import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface MusicGenreProps {
  previewUrl: string;
}

const MusicGenre = ({ previewUrl }: MusicGenreProps) => {
  return (
    <div className="relative bg-cardGreen w-full h-full group dark:bg-darkBg">
      {/* Background blob */}
      <div className="absolute -bottom-96 left-16 bg-cardPink w-[145%] h-full rounded-full dark:hidden" />

      <div className="absolute w-full h-full overflow-hidden">
        <Image
          priority
          alt="Music Genre Classification Preview"
          className="w-full h-full object-cover object-right rounded-2xl"
          height={800}
          loading="eager"
          quality={75}
          src={previewUrl}
          width={1000}
        />
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-2xl">
        <h3 className="text-lg font-bold">Music Genre Classification</h3>
        <p className="text-sm">
          Identifying music genres from audio signals using patterns and features extracted from tracks to automatically classify them.
        </p>
      </div>

      {/* Link button */}
      <button className="absolute bg-white dark:bg-darkBg top-2 right-2 transition-all w-10 h-10 md:w-[3rem] md:h-[3rem] duration-500 ease-in-out group-hover:w-[13rem] p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://rudri1202.github.io/music_genre_webpage/"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Music Genre Classification
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default MusicGenre;
