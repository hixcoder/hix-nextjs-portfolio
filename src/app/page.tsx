import Image from "next/image";
import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/header/NavBar";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/project/ProjectsSection";
import EmailSection from "./components/email/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
