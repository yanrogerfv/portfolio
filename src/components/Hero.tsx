import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20" />

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-8 animate-fade-in">
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold h-12 sm:h-36 md:h-24 bg-gradient-to-br from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                            Yan Roger Fogaça Vieira
                        </h1>
                        <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8">
                            <span className="inline-block">Software Engineer</span>
                            <span className="mx-4 text-emerald-400">•</span>
                            <span className="inline-block">Backend Developer</span>
                        </div>
                    </div>

                    <p className="text-lg sm:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
                        Crafting robust and scalable solutions with passion for <br /> clean code,
                        system design, and cutting-edge technologies. <br />Building the invisible infrastructure
                        that powers exceptional user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16 animate-fade-in-delay-2">
                        <Button
                            onClick={scrollToAbout}
                            size="lg"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            Explore My Work
                        </Button>

                        <div className="flex space-x-4">
                            <Button variant="default" size="icon" className="border-slate-600 hover:bg-slate-400/40 hover:border-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                                <a target='_blank' href="https://github.com/yanrogerfv/">
                                    <Github className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="default" size="icon" className="border-slate-600 hover:bg-slate-400/40 hover:border-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                                <a target='_blank' href="https://www.linkedin.com/in/yanrogerfv/">
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </Button>
                            <Button variant="default" size="icon" className="border-slate-600 hover:bg-slate-400/40 hover:border-emerald-400 transition-all duration-300 hover:scale-110 cursor-pointer">
                                <a target='_blank' href="mailto:yanrogerfv@gmail.com">
                                    <Mail className="h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    <Button
                        variant="default"
                        onClick={scrollToAbout}
                        className="group animate-bounce transition-all duration-300 bg-transparent hover:bg-emerald-100/20 cursor-pointer"
                    >
                        <ArrowDown className="h-6 w-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;