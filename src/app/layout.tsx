import "../styles/globals.css";
import type { Metadata } from "next";
import { fonts } from "@/utils/fonts";
import Footer from "./components/common/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export const metadata: Metadata = {
  title: "cartwise",
  description:
    "Save Time, Money, and Eat Healthy with cartwise",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`relative ${fonts}`}>
        <div className='bg-brand-primary text-center py-2.5 xl:py-3'>
          <p className='text-white text-xs xl:text-lg xl:tracking-tighter'>
            First <b>1000</b> users to sign up <b>get lifetime free access</b>
          </p>
        </div>
        <main className='relative overflow-hidden '>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
