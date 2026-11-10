import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Halls from "@/components/Halls";
import Gallery from "@/components/Gallery";
import Accolades from "@/components/Accolades";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";
import ScrollRefresh from "@/components/ScrollRefresh";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Halls />
        <Gallery />
        <Accolades />
        <Inquiry />
      </main>
      <Footer />
      <ScrollRefresh />
    </>
  );
}
