import { Code, HamburgerIcon, User } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="items-center">
                    {/* Left Section of About Me */}
                    <div className="space-y-6 px-15">
                        <h3 className="text-2xl font-semibold">Software Engineering Student</h3>

                        <p className="text-muted-foreground text-sm md:text-xl text-muted-foreground max-2-2xl">
                            Hi, I'm Austin Phipps! I'm currently at CSUMB in the computer science department, focusing on Software Engineering.
                            Although I love most coding, I find the most fulfillment from full-stack development.
                            I strive to make the projects I develop have a professional design, while remaining
                            clean and easy to use. 
                            <br></br>
                            <br></br>
                            In the five years I've been learning programming, I have worked mainly in Java. Recently though, I've been
                            trying to expand my domain with Python, Javascript, SQL, and branches of those languages
                            (Postgresql, Android Studio, Node.js, TypeScript, etc.). My favorite aspect of learning code in University
                            has been the rapid expansion of my skillset, and a newfound confidence in my ability to learn
                            anything short amount of time. This is especially easy with access to resources like LLM models, free YouTube 
                            tutorials, and online certifications!
                            <br></br>
                            <br></br>
                            While I made this website mainly to show off the skills I've been working on recently, it's
                            also had the benefit of teaching me about the real-life process of starting a full-stack project and sticking
                            through with it all the way until the end. I honestly could have (and maybe should have) made this website in a few hours with Claude
                            like many of peers so I could pump out applications faster, but I found myself enjoying tinkering with React so much that I 
                            spent much longer than I intended on creating this. 
                            In developing this project, I've followed the same philosophy I had with my other projects (listed below),
                            where I largely either lead a group of students in a project (reflected by the GitHub commits) or worked solo on coming up with a project,
                            followed through with it, made it look professional, and made it easy to use. 
                            <br></br>
                            <br></br>
                            I am looking for internships this 
                            summer (or whenever to be honest!) to further expand the experience I have in the field. My current works are: Interviewing for a TA position in an internet programming course,
                            and a couple of personal projects (they will be updated below). Please reach out to me, even if just to say hi!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <HashLink to={"#contact"} className="cool-button">
                                Get In Touch
                            </HashLink>
                            <HashLink to={"#contact"} className="cool-button">
                                Resume
                            </HashLink>
                        </div>
                    </div>

                    {/* Right Section of About me ; grid of cards*/}
                    {/* <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Coding Prowess</h4>
                                    <p className="text-muted-foreground">
                                        I made Minecraft 2. That's right. Im gonna be rich
                                    </p>
                                </div>
                            </div>
                        </div>
                        </GlassSurface>

                        <GlassSurface 
                        width={"100%"} 
                        height={"100%"} 
                        borderRadius={30} 
                        backgroundOpacity={.05}
                        displace={1.2}
                        borderWidth={.03}
                        className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                        <div className="mr-auto">
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Human Attributes</h4>
                                    <p className="text-muted-foreground">
                                        2 arms, 3 legs, and a heart of gold
                                    </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </GlassSurface>

                        <GlassSurface 
                        width={"100%"} 
                        height={"100%"} 
                        borderRadius={30} 
                        backgroundOpacity={.05}
                        displace={1.2}
                        borderWidth={.03}
                        className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                        <div className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <HamburgerIcon className="h-6 w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Hamburger Section</h4>
                                    <p className="text-muted-foreground">
                                        This is the section where I type about hamburger
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>
            </div>
        </section>
    );
}