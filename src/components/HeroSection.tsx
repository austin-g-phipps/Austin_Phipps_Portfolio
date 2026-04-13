import TextType from './TextType';
import FadeContent from './FadeContent'
import { ArrowDown } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import React from 'react';

export const HeroSection = React.memo(() => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">


                        <TextType 
                            text={"Hi, I'm Austin Phipps"}
                            typingSpeed={120}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                            loop={false}
                        />
                    </h1>

                        <FadeContent blur={true} duration={1300} initialOpacity={0} delay={3}>
                            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto'>
                                I'm a third-year computer science student interested in full-stack development.
                                I'm great with React, Node.js, TailwindCSS, Java, Python, and REST-APIs.
                                I believe in clean front-ends and efficient back-ends (brave stance, I know).
                                Please feel free to reach out and talk to me!
                            </p>
                        </FadeContent>
                    

                    <FadeContent blur={true} duration={1300} initialOpacity={0} delay={4}>
                        <div className='container flex flex-col items-center'>
<<<<<<< HEAD
                            <HashLink to={"#projects"}><a className='glass-button'>View My Work</a></HashLink>
=======
                            <GlassSurface 
                                height={'wrap'}
                                width={'wrap'}
                                borderRadius={50}
                                backgroundOpacity={.05}
                                displace={1.2}
                                borderWidth={.03}
                                className='transition duration-300 hover:bg-primary/10 hover:scale-105'
                                children={<HashLink to={"#projects"}><a className='glass-button'>View My Work</a></HashLink>}
                                >
                            </GlassSurface>
>>>>>>> af93c7b2c6e733a5e80845a0cb08321523a3121b
                        </div>
                    </FadeContent>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <ArrowDown className='h-5 w-5 text-primary scale-120' />
            </div>

        </section>
    );
});