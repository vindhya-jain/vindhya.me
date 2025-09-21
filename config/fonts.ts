import { Ubuntu, Oleo_Script, Comic_Neue } from "next/font/google";

export const fontUbuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const fontOleoScript = Oleo_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-oleo",
});

export const fontComicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue", 
});