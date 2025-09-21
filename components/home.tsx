"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { Responsive } from "react-grid-layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import AvatarTransition from "@/components/avatar";
import { DockDemo } from "@/components/dock-demo";
import { ThemeSwitch } from "@/components/theme-switch";
import CardStack from "@/components/card-stack";
import AnimatedEmoji from "@/components/animated-emoji";
import IconCloud from "@/components/icon-cloud";
import MapComponent from "@/components/map";
import WebAgent from "@/components/webagent";
import SpeechEmotion from "@/components/speechemotion";
import Ddd from "@/components/ddd";
import GoldPrice from "@/components/gold";
import TinySwords from "@/components/tinyswords";
import MusicGenre from "@/components/music";
import Hemoglobin from "@/components/haemoglobin";
import CyberSleuth from "@/components/cybersleuth";
import Chatbot from "@/components/chatbot";
import { MiniModel } from "@/components/mini";
import Actions from "@/components/actions";
import { layouts, selectedCard } from "@/config/layout";
import { icons } from "@/config/icons";
import useWindowWidth from "@/hooks/useWindowWidth";
import { fontComicNeue } from "@/config/fonts";

interface HomeProps {
  photos: string[];
  avatarUrl: string;
  dogUrl: string;
  actionImageUrl: string;
  resumeUrl: string;
  webagentUrl: string;
  chatbotUrl: string;
  paperUrl: string;
}

const Home = ({
  photos,
  avatarUrl,
  dogUrl,
  actionImageUrl,
  resumeUrl,
  webagentUrl,
  chatbotUrl,
  paperUrl,
}: HomeProps) => {
  const width = useWindowWidth();
  const [tabSelected, setTabSelected] = useState("all");
  const [animated, setAnimated] = useState(false);
  const router = useRouter();

const photos_mine = Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpeg`);

  if (!width) {
    return null;
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <Tabs
        aria-label="Tabs"
        className="mb-2 md:mb-6 rounded-full"
        classNames={{
          cursor: "shadow-none",
          tabList:
            "bg-[#ece7e7] dark:bg-darkBg border-2 border-transparent dark:border-knight rounded-full",
        }}
        motionProps={{
          initial: { scale: 0.8 },
          animate: { scale: 1 },
          exit: { scale: 0.8 },
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
        radius={"full"}
        onSelectionChange={(selected) => {
          setTabSelected(selected as string);
        }}
      >
        <Tab key="all" title="all" />
        <Tab key="about" title="about" />
        <Tab key="projects" title="projects" />
      </Tabs>

      <Responsive
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="layout w-full h-full"
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 2 }}
        isDraggable={width > 480}
        isResizable={false}
        layouts={layouts[tabSelected]}
        margin={[15, 15]}
        width={width}
      >
        <div
          key="avatar"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
            selectedCard[tabSelected]["avatar"] ? "opacity-100" : "opacity-50"
          )}
        >
          <AvatarTransition avatarUrl="/avatars/1.jpeg"/>
          <p className="text-sm md:text-medium">
            Hey! I’m <span className="font-oleo text-2xl"> Vindhya</span>, a software engineer from IIT Jodhpur.
            I like building software projects, from AI-powered applications 
            to web tools. I enjoy learning new technologies and applying 
            them to create practical, working solutions.
          </p>
          <DockDemo resumeUrl="/resume1.pdf" />
        </div>
        <div
          key="about"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex flex-col justify-between p-5 overflow-hidden z-[1]",
            selectedCard[tabSelected]["about"] ? "opacity-100" : "opacity-50"
          )}
        >
          <p className={`${fontComicNeue.className} text-sm md:text-medium`}>
            When I’m not building software, you’ll probably 
            find me jamming on the piano 🎹, getting lost in a video game 🎮, 
            or seeking out delicious food 🍕
            <br /><br />
            These little joys 
            keep me inspired and energized !!!         
          </p>
        </div>

        <div
          key="themeSwitch"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["themeSwitch"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <ThemeSwitch />
        </div>
        <div
          key="cardStack"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[2]",
            selectedCard[tabSelected]["cardStack"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <CardStack photos={photos_mine} />
        </div>
        {/* <div
          key="mapComponent"
          className={cn(
            "bg-white dark:bg-darkBg cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center z-[1]",
            selectedCard[tabSelected]["mapComponent"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <MapComponent />
        </div> */}
        <div
          key="iconCloud"
          className={cn(
            "bg-white dark:bg-darkBg border-2 border-transparent dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center relative overflow-hidden p-10 md:p-8 z-[1]",
            selectedCard[tabSelected]["iconCloud"]
              ? "opacity-100"
              : "opacity-50"
          )}
        >
          <IconCloud iconSlugs={icons} />
        </div>
        <div
          key="speechEmotion"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["speechEmotion"] ? "opacity-100" : "opacity-50"
          )}
        >
          <SpeechEmotion
            previewUrl="/spectrogram.png"
          />
        </div>        
        <div
          key="driverDrowsiness"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["driverDrowsiness"] ? "opacity-100" : "opacity-50"
          )}
        >
          <Ddd
            previewUrl="/ddd.png"
          />
        </div>        
        <div
          key="goldPrice"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["goldPrice"] ? "opacity-100" : "opacity-50"
          )}
        >
          <GoldPrice
            previewUrl="/gold.png"
          />
        </div>        
        <div
          key="tinySwords"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["tinySwords"] ? "opacity-100" : "opacity-50"
          )}
        >
          <TinySwords
            previewUrl="/tinyswords.png"
          />
        </div>        
        <div
          key="musicGenre"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["musicGenre"] ? "opacity-100" : "opacity-50"
          )}
        >
          <MusicGenre
            previewUrl="/music2.png"
          />
        </div>        
        <div
          key="hemo"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["hemo"] ? "opacity-100" : "opacity-50"
          )}
        >
          <Hemoglobin
            previewUrl="/haemo.png"
          />
        </div>        
        <div
          key="cyberSleuth"
          className={cn(
            "bg-white dark:bg-darkBg dark:border-2 dark:border-knight cursor-grab active:cursor-grabbing rounded-[2rem] flex justify-center items-center overflow-hidden z-[1]",
            selectedCard[tabSelected]["cyberSleuth"] ? "opacity-100" : "opacity-50"
          )}
        >
          <CyberSleuth
            previewUrl=""
          />
        </div>        
      </Responsive>
    </div>
  );
};

export default Home;
