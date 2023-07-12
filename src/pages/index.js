import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Head from "next/head";

const font = localFont({ src: "../../public/font/EuropaGroteskSH-Ex.otf" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Launch Levels</title>
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="The #1 website design + development, content creation + video editing, and social media marketing and advertising agency in Tracy, California."
        ></meta>
        <meta
          name="keywords"
          content="The #1 website design + development, content creation + video editing, and social media marketing and advertising agency in Tracy, California."
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
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
    </>
  );
}
