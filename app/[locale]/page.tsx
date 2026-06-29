import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import Contact  from "@/components/Contact";
import About  from "@/components/About";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";




export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Timeline />
      <Skills />
      <Certifications />
      <About  />
      <Contact />
      <Footer />
    </div>
  );
}
