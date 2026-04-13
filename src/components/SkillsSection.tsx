import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import CircularGallery from './CircularGallery'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



export const SkillsSection = () => {
    const skillItems = [
        {
            quote: 'React',
            name: "",
            title: ""
        },
        {
            quote: 'TypeScript',
            name: "",
            title: ""
        },
        {
            quote: 'Node.js',
            name: "",
            title: ""
        },
        {
            quote: 'Python',
            name: "",
            title: ""
        },
        {
            quote: 'Java',
            name: "",
            title: ""
        },
        {
            quote: 'JavaScript',
            name: "",
            title: ""
        },
        {
            quote: 'SQL',
            name: "",
            title: ""
        },
        {
            quote: 'OOP',
            name: "",
            title: ""
        },
        {
            quote: 'Data Structures',
            name: "",
            title: ""
        },
        {
            quote: 'Algorithms',
            name: "",
            title: ""
        },
        {
            quote: 'HTML/CSS',
            name: "",
            title: ""
        },
        {
            quote: 'Vite',
            name: "",
            title: ""
        },
        {
            quote: 'Android Studio',
            name: "",
            title: ""
        },
        {
            quote: 'Docker',
            name: "",
            title: ""
        },
        {
            quote: 'Git',
            name: "",
            title: ""
        },
        {
            quote: 'This scrolling bar is pretty cool huh?',
            name: "",
            title: ""
        },
    ];


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="h-fit w-fit mx-auto justify-center">
                <InfiniteMovingCards
                    items={skillItems}
                    direction="left"
                    speed="slow"
                    pauseOnHover={false}
                />
            </div>
        </section>
    );
}