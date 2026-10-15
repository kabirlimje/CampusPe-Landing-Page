import { useEffect } from "react";
import "./App.css";
import AppShowcase from "./components/AppShowcase.jsx";
import AudienceSection from "./components/AudienceSection.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import OpportunityDiscovery from "./components/OpportunityDiscovery.jsx";
import ResumeUpload from "./components/ResumeUpload.jsx";
import { Stats, Partners } from "./components/TrustSections.jsx";
import { IconSprite } from "./components/ui.jsx";
import { collegeFeatures, employerSteps } from "./data.js";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    const header = document.querySelector(".site-header");
    const onScroll = () => header?.classList.toggle("is-stuck", window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <>
    <IconSprite />
    <Header />
    <main id="main">
      <Hero />
      <Stats />
      <Partners />
      <OpportunityDiscovery />
      <ResumeUpload />
      <AudienceSection id="colleges" label="02 · FOR COLLEGES" title="Get Discovered by Students and Recruiters." text="Put your college in front of students searching for the right course and recruiters looking for talent. Build your presence, attract enquiries and connect with opportunities." action="List Your College" features={collegeFeatures} />
      <AudienceSection id="employers" label="03 · FOR EMPLOYERS" title="Stop running campus drives. Start hiring the right people." text="Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. Discover and connect with talent from colleges and beyond." action="Post a Job" features={employerSteps} />
      <AppShowcase />
      <CTA />
    </main>
    <Footer />
  </>;
}
