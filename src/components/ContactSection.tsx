import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In<span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Please reach out to me with any job/internship prospects, suggestions for this website 
                    or any of my other projects, questions in general, or even just to say hi!
                </p>

                <div className="grid grid-cols-1">
                    <div className="mx-auto space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="grid grid-cols-2">
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="grid grid-rows-2">
                                        <div className="pb-5">
                                            <div className="p-3 rounded-full bg-primary/10">
                                                <MapPin className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="p-3 rounded-full bg-primary/10">
                                                <Mail className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="grid grid-rows-2">
                                        <div className="pb-5">
                                            <div>
                                                <HashLink to={"mailto:austin.g.phipps@gmail.com"} className="text-muted-foreground hover:text-primary transition-colors">
                                                    <h4 className="font-medium">Email</h4>
                                                    austin.g.phipps@gmail.com
                                                </HashLink>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <p className="text-muted-foreground ml-4.5">
                                                    <h4 className="font-medium">Location</h4>
                                                    Monterey, CA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <HashLink to={"https://www.linkedin.com/in/austin-phipps-557064388/"} target="_blank" className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="text-primary"/>
                                </HashLink>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="Austin Phipps..." 
                                />

                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                    placeholder="youremail@example.com" 
                                />

                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                    placeholder="Please leave your message here..." 
                                />
                            </div>

                            <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={cn(
                                "cool-button w-full flex items-center justify-center gap-2",
                                
                            )}>
                                {isSubmitting ? "Sending Airstrike..." : "Send Message"} <Send size={16}/>
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    );
}