import { ExternalLink, Github } from "lucide-react";
import { HashLink } from 'react-router-hash-link';
import GlassSurface from './GlassSurface'

const projects = [
    {
        id: 1,
        title: "Portfolio",
        description: "Personal portfolio website built with React and Vite to display personal projects and information about myself.",
        image: "projects/portfolio_screenshot.png",
        tags: ["React", "Vite", "TailwindCSS", "Node.js", "Typescript"],
        demoURL: "https://austin-g-phipps.github.io/Austin_Phipps_Portfolio/",
        github: "https://github.com/austin-g-phipps/Austin_Phipps_Portfolio"
    },
    {
        id: 2,
        title: "RendR",
        description: "Letterboxd clone built on Android Studio using the TMBD REST API. Allows users to see popular movies and watchlist movies to their own personal accounts",
        image: "projects/rendrScreenshot.png",
        tags: ["Android Studio", "Java", "REST API", "SQLite", "Room DB", "XML"],
        demoURL: "https://austin-g-phipps.github.io/Austin_Phipps_Portfolio/",
        github: "https://github.com/MovieAppAndroidStudio/RendeR"
    },
    {
        id: 3,
        title: "Campsite Finder",
        description: "Bootstrap Flask Website that lets users find campsites at National Parks using the NPS REST API",
        image: "projects/npsScreenshot.png",
        tags: ["Python", "Flask", "Bootstrap", "Render", "REST API"],
        demoURL: "https://campsite-website-cst205.onrender.com",
        github: "https://github.com/auPhippsCSUMB/Campsite-Website-CST205"
    },
    {
        id: 4,
        title: "Meme Creator",
        description: "Fun side project that lets users AI Generate memes using imgFlip REST API and Gemini API (right now it always uses my friend Kyle's name)",
        image: "projects/memeScreenshot.png",
        tags: ["Python", "Flask", "Bootstrap", "Render", "REST API", "Gemini API"],
        demoURL: "https://meme-generator-1-z0xo.onrender.com",
        github: "https://github.com/auPhippsCSUMB/Meme-Generator"
    },
    {
        id: 5,
        title: "Open Source Contribution | Open Energy Dashboard",
        description: "Fixed out of date testing format on Open Energy Dashboard using Mocha and Chai",
        image: "projects/oedScreenshot.png",
        tags: ["Javascript", "Node.js", "Docker", "Chai"],
        demoURL: "https://openenergydashboard.org/",
        github: "https://github.com/OpenEnergyDashboard/OED"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto, max-w-5xl">
                <div className="py-10"><h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2></div>


                {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some projects I have worked on. I am a god. nobody else could
                    have done this as well as i have. my brain is a bar where the only drink
                    served is genius. a portfolio? yeah bud, that was me.
                </p> */}

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
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                <div className="text-center mt-12">
                    <HashLink to={"https://github.com/austin-g-phipps"} className="glass-button w-fit flex items-center mx-auto gap-2" target="_blank">Check out my GitHub!<ExternalLink size={16} /> </HashLink>
                </div>
            </div>
        </section>
    );
}