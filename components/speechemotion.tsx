import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

interface SpeechEmotionProps {
  previewUrl: string;
}

const SpeechEmotion = ({ previewUrl }: SpeechEmotionProps) => {
  return (
    <div className="relative bg-cardGreen w-full h-full group dark:bg-darkBg">
      <div className="absolute -bottom-96 left-16 bg-cardPink w-[145%] h-full rounded-full dark:hidden" />

      <div className="relative w-full h-full">
        <Image
          priority
          alt="Speech Emotion Recognition Preview"
          className="w-full h-full object-cover rounded-2xl"
          height={800}
          loading="eager"
          quality={75}
          src={previewUrl}
          width={1000}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-2xl">
            <h3 className="text-lg font-bold">Speech Emotion Recognition</h3>
            <p className="text-sm">
            Classifying emotions from speech by analyzing audio signals using a mix of traditional and deep learning approaches.
            </p>
        </div>
      </div>
      <button className="absolute bg-white dark:bg-darkBg top-2 right-2 transition-all w-10 h-10 md:w-[2.75rem] md:h-[2.75rem] duration-500 ease-in-out group-hover:w-60 p-2 rounded-full hover:bg-default-100 border-2 border-transparent dark:border-knight">
        <div className="flex justify-center items-center">
          <Link
            isExternal
            color="foreground"
            href="https://github.com/vindhya-jain/Speech-Emotion-Recognition-Methods"
          >
            <span className="text-sm md:text-medium text-nowrap hidden group-hover:block invisible group-hover:visible mr-1 animate-fade">
              Speech Emotion Recognition
            </span>
          </Link>
          <GoArrowUpRight />
        </div>
      </button>
    </div>
  );
};

export default SpeechEmotion;
