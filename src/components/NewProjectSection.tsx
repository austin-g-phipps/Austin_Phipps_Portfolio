import { ArrowDown, ExternalLink, Github } from "lucide-react";
import { HashLink } from 'react-router-hash-link';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "You're literally looking at it",
        image: "projects/portfolio_screenshot.png",
        tags: ["React", "Vite", "TailwindCSS"],
        demoURL: "https://austin-g-phipps.github.io/Austin_Phipps_Portfolio/",
        github: "https://github.com/austin-g-phipps/Austin_Phipps_Portfolio"
    },
    {
        id: 2,
        title: "Hamburger",
        description: "Buns tomatoes lettuce cheese put the patty in between its burger yeah yeah",
        image: "projects/bruger.png",
        tags: ["Buns", "Tomato", "Patty", "Cheese"],
        demoURL: "https://austin-g-phipps.github.io/Austin_Phipps_Portfolio/",
        github: "https://github.com/austin-g-phipps/Austin_Phipps_Portfolio"
    },
    {
        id: 3,
        title: "Hot Dog",
        description: "Meat????????? Questionable",
        image: "projects/hot dog.png",
        tags: ["Bun", "Ketchup", "Mustard", "Dog"],
        demoURL: "https://austin-g-phipps.github.io/Austin_Phipps_Portfolio/",
        github: "https://github.com/austin-g-phipps/Austin_Phipps_Portfolio"
    }
]

export const NewProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto, max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>


                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some projects I have worked on. I am a god. nobody else could
                    have done this as well as i have. my brain is a bar where the only drink
                    served is genius. a portfolio? yeah bud, that was me.
                </p>

                <div className="relative h-96 w-full mx-auto">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2">
                        <h1 className="text-center text-6xl font-bold">My Projects</h1>
                    </div>
                    <ScrollStack className="no-scrollbar my-auto z-20" stackPosition="0%">
                        {projects.map((project, key) => (
                            <ScrollStackItem itemClassName="bg-primary/10">
                                <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            </ScrollStackItem>
                        ))}
                    </ScrollStack>
                </div>
                <div className="text-center mt-12">
                    <HashLink to={"https://github.com/austin-g-phipps"} className="glass-button w-fit flex items-center mx-auto gap-2" target="_blank">Check out my GitHub!<ExternalLink size={16} /> </HashLink>
                </div>
            </div>
        </section>
    );
}