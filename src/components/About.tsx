import { Server, Database, Code2, BrainCircuit } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
    const highlights = [
        {
            icon: Server,
            title: "Backend Architecture",
            description: "Designing scalable microservices and distributed systems"
        },
        {
            icon: Database,
            title: "Database Design",
            description: "Optimizing data structures and query performance"
        },
        {
            icon: BrainCircuit,
            title: "Technologies",
            description: "Proficient in Spring, React, Git, Docker, and more"
            // description: "Deploying and managing applications in cloud environments"
        },
        {
            icon: Code2,
            title: "Clean Code",
            description: "Writing maintainable, testable, and efficient code"
        }
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                            Building the Digital Backbone
                        </h3>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            As a passionate backend developer, I specialize in creating robust, scalable solutions
                            that power modern applications. With expertise in system architecture, database optimization,
                            and cloud technologies, I transform complex business requirements into efficient,
                            maintainable code.
                        </p>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            My approach combines technical elegance with practical problem-solving, ensuring that
                            every system I build is not just functional, but optimized for performance, security,
                            and future growth. I believe in the power of clean, well-documented code and the
                            importance of continuous learning in our ever-evolving field.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            {['Java', 'Spring', 'PostgreSQL', 'Node.js', 'React', 'TypeScript', 'MongoDB', 'GitHub', 'Docker', 'Kafka', 'Microservices', 'API'].map((tech) => (
                                <span key={tech} className="px-3 py-1 border transition-all duration-300 border-emerald-200/50 hover:bg-slate-800 text-emerald-300 rounded-full text-sm font-medium cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105">
                                <CardContent className="p-6 text-center">
                                    <item.icon className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                    <p className="text-slate-400 text-sm">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;