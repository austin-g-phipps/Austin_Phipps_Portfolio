import TextType from './TextType';
import GlassSurface from './GlassSurface'
import FadeContent from './FadeContent'
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
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
                        {/* <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span> Austin</span>
                        <span> Phipps</span> */}
                    </h1>

                    
                        {/* Super cool coding shitter that pretends that he knows what he's doing
                        until someone finally tells him to stop and get a real job OR alternatively
                        he gets super rich and has 100 jobs. */}

                        <FadeContent blur={true} duration={1300} initialOpacity={0} delay={3}>
                            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto'>
                                Super cool coding shitter that pretends that he knows what he's doing
                                until someone finally tells him to stop and get a real job OR alternatively
                                he gets super rich and has 100 jobs.
                            </p>
                        </FadeContent>
                    

                    <FadeContent blur={true} duration={1300} initialOpacity={0} delay={4}>
                        <div className='container flex flex-col items-center'>
                            <GlassSurface 
                                height={'wrap'}
                                width={'wrap'}
                                borderRadius={50}
                                children={<a href='#projects' className='glass-button'>View My Work</a>}
                                >
                            </GlassSurface>
                        </div>
                    </FadeContent>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <ArrowDown className='h-5 w-5 text-primary scale-120' />
            </div>

        </section>
    );
}