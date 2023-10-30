import { Poppins, Luckiest_Guy, Source_Code_Pro } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const luckiest = Luckiest_Guy({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-luckiest",
});

const sourceCode = Source_Code_Pro({
  weight: ["400", "800", "900"],
  subsets: ["latin"],
  variable: "--font-source-code",
});

export const fonts = `${poppins.variable} ${luckiest.variable} ${sourceCode.variable}`;
