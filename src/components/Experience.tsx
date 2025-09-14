import { Calendar, Building2, Beef } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      icon: <Building2 className="h-4 w-4 text-emerald-400"/>,
      company: "IDG Engenharia e Consultoria",
      period: "2023 - Today",
      responsibilities: [
        "Development and implementation of RESTful APIs in a microservices enviroment",
        "DevOps organization and configuration of pipelines for automated deployment in cloud",
        "Collaborated with front-end teams to deliver seamless user experiences",
        "Services include: commercial proposal flow, contracts, projects and document management"
      ],
      technologies: ["Java", "Spring", "PostgreSQL", "Microservices", "Docker", "Github Actions", "Kubernetes", "AWS"]
    },
    {
      title: "FullStack Web Developer",
      icon: <Beef className="h-4 w-4 text-emerald-400"/>,
      company: "Quality Grill",
      period: "2025 - Today",
      responsibilities: [
        "Development of an e-commerce system for product management with interactive dashboards",
        "Order handling and processing using Kafka for stream’s security and integrity of data",
        "Integrated third-party payment gateways, financial banking and delivery softwares",
        "Metrics analysis and technical code monitoring using Prometheus and Grafana.",
      ],
      technologies: ["Java", "Spring", "Node.js", "React", "Git", "Kafka", "Prometheus", "Docker", "Redis", "OCI"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Professional Experiences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A journey of continuous growth and meaningful contributions to impactful projects
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 w-full hover:border-emerald-400/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-slate-400">
                      <div className="flex items-center space-x-2">
                        {experience.icon}
                        <span className="font-medium">{experience.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{experience.period}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-300 leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-emerald-400 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;