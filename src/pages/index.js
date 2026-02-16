import HomePageComponent from "@/components/homePage";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/about";
import Footer from "@/components/Footer";
import SkillSection from "@/components/skills";
import EducationSection from "@/components/education";
import ExperienceSection from "@/components/experience";
import ProjectSection from "@/components/projects";
import ContactForm from "@/components/contactForm";
import ResearchSection from "@/components/research";
import { useState, useEffect } from "react";
// import LoaderComponent from "@/components/loader"; // Commented out for now

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <LoaderComponent />;
  // }

  return (
    <div className="w-full">
      <Head>
        <title>Soham Raut | Personal Website</title>
        <meta name="description" content="Soham Raut - 5th year BS/MS Computer Science student at University of Washington. Passionate about data visualization teaching, systems engineering, machine learning, and software engineering." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <main>
        <HomePageComponent width={windowSize.width} />
        <AboutSection />
        <ResearchSection />
        <SkillSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}