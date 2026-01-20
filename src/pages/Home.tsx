import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import Aurora from '../components/Aurora';
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
// import { SkillsSection } from "@/components/SkillsSection";


export const Home = () => {

    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check initial theme
        const hasLightClass = document.documentElement.classList.contains("light");
        setIsDark(!hasLightClass);

        // Set up a MutationObserver to watch for theme changes
        const observer = new MutationObserver(() => {
            const hasLightClass = document.documentElement.classList.contains("light");
            setIsDark(!hasLightClass);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background */}

        <div className="absolute size-full">
            {/* TODO: Change ts to have prettier colors when light mode is enabled */}
            {/* {isSubmitting ? "Sending Airstrike..." : "Send Message"} */}
            { 
                isDark ? 
                    <Aurora
                        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                        blend={0.5}
                        amplitude={3.0}
                        speed={0.5}
                    /> : 
                    <AuroraBackground>
                        <div className="bg-background"></div>
                    </AuroraBackground>
            }
            {/* <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={3.0}
                speed={0.5}
            /> */}
        </div>
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            {/* <SkillsSection /> */}
            <ProjectsSection />
            <ContactSection />
        </main>
        

        {/* Footer */}
        <Footer/>
    </div>;
};