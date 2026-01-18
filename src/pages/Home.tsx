import { ThemeToggle } from "../components/ThemeToggle";
import PixelSnow from "../components/PixelSnow"
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import Aurora from '../components/Aurora';
import { AboutSection } from "../components/AboutSection";
// import { SkillsSection } from "@/components/SkillsSection";


export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        {/* <ThemeToggle /> */}
        {/* Background */}
        {/* <PixelSnow
            pixelResolution={500}
            speed={0.3}
            density={0.1}
        /> */}

        <div className="absolute size-full">
            {/* TODO: Change ts to have prettier colors when light mode is enabled */}
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={3.0}
                speed={0.5}
            />
        </div>

        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            {/* <SkillsSection /> */}
        </main>

        {/* Footer */}
    </div>;
};