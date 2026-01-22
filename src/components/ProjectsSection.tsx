import { ExternalLink, Github } from "lucide-react";
import { HashLink } from 'react-router-hash-link';
import GlassSurface from './GlassSurface'

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

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto, max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
            

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some projects I have worked on. I am a god. nobody else could
                    have done this as well as i have. my brain is a bar where the only drink
                    served is genius. a portfolio? yeah bud, that was me.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <GlassSurface 
                        width={"100%"} 
                        height={"105%"} 
                        borderRadius={30} 
                        backgroundOpacity={.05}
                        displace={1.2}
                        borderWidth={.03}
                        className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                        <div key={key} className="group rounded-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                            </div>
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-muted-foreground text-sm pr-4 pl-4">
                                {project.description}
                            </p>
                            <div className="pb-6 pl-6 pr-6 pt-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs rounded-full border bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-6">
                                <div className="flex space-x-3">
                                    <HashLink to={project.demoURL} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <ExternalLink />
                                    </HashLink>
                                    <HashLink to={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github />
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        </GlassSurface>
                    ))}
                </div>
                    <div className="flex flex-row justify-center text-center">
                    <GlassSurface 
                        width={'wrap%'}
                        height={"wrap"}
                        borderRadius={50}
                        backgroundOpacity={.05}
                        displace={1.2}
                        borderWidth={.03}
                        className='mt-12 transition duration-300 hover:bg-primary/10 hover:scale-105'
                    >
                        <HashLink to={"https://github.com/austin-g-phipps"} className="glass-button flex flex-row items-center gap-2 hover:text-primary" target="_blank">Check out my GitHub!<ExternalLink size={16}/> </HashLink>
                    </GlassSurface>
                    </div>
            </div>
        </section>
    );
}