import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const font = localFont({ src: "../../public/font/EuropaGroteskSH-Ex.otf" });

export default function Home() {
  return (
    <main
      className={`${font.className} text-xl h-full bg-[#e2e2e2] text-[#2e2e2e] antialiased`}
    >
      <Hero />
      <Services />
      <Work />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}
