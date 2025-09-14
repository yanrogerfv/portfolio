import { ExternalLink, Github, Server, LibraryBig, KeyboardMusic } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform for Quality Grill",
      description: "A scalable microservices architecture powering an e-commerce platform with order management, payment processing, dashboard " +
      "analytics and inventory tracking, aswell as integrations with third-party delivery softwares.",
      technologies: ["Java", "Spring", "Node.js", "React", "PostgreSQL", "Redis", "Docker", "Clean Arch"],
      features: ["High availability", "Auto-scaling", "Microservices", "API Gateway"],
      icon: Server,
      github: "https://github.com/yanrogerfv/api-quality-grill",
      demo: "https://quality-grill.vercel.app"
    },
    // {
    //   title: "Real-time Analytics Dashboard API",
    //   description: "High-performance API serving real-time analytics data to web and mobile dashboards with sub-second response times.",
    //   technologies: ["Python", "FastAPI", "MongoDB", "Redis", "WebSocket", "Elasticsearch"],
    //   features: ["Real-time data processing", "WebSocket connections", "Advanced caching", "Search optimization"],
    //   icon: Database,
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "Cloud Infrastructure Automation",
    //   description: "Infrastructure as Code solution for automated deployment and scaling of multi-environment applications on OCI.",
    //   technologies: ["Terraform", "OCI", "Docker", "Jenkins", "Python", "CloudFormation"],
    //   features: ["Multi-environment deployment", "Auto-scaling", "Monitoring & alerting", "Disaster recovery"],
    //   icon: Cloud,
    //   github: "#",
    //   demo: "#"
    // },
    {
      title: "Levite Scheduler Eclesia Software",
      description: "End to end application to create and manage schedules of musicians in a dynamic yet effective way for both leaders and "+
      "users.",
      technologies: ["Java", "Spring", "Node.js", "React", "PostgreSQL", "Scheduling", "Cron Job", "Layered Arch"],
      features: ["Modular permissioning", "Automatic filtering", "Optimized queries", "Secure user management"],
      icon: KeyboardMusic,
      github: "https://github.com/yanrogerfv/eclesia-back",
      demo: "https://eclesia-dev.vercel.app"
    },
    {
      title: "Library of Alexandria (WIP)",
      description: "Complete library management system, with a robust backend book processing with Java and Spring, a book generator made in Python" +
      " using generative AI, NoSQL database for storing books and its contents and an event manager in Go, to orchestrate all the services in an "+
      " event-driven architecture.",
      technologies: ["Java", "Spring", "MongoDB", "Redis", "Python", "FastAPI", "Go Lang", "Kafka", "ElasticSearch", "Hexagonal Arch"],
      features: ["Real-time data processing", "Event-driven architecture", "Advanced caching", "Search optimization"],
      icon: LibraryBig,
      github: "#",
      demo: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcase of software projects and infrastructure solutions that demonstrate scalability, performance, and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 overflow-hidden group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg">
                      <project.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-emerald-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    <a href={project.github} target='_blank'>
                      <Button variant="outline" size="sm" className="border-slate-600 hover:cursor-pointer hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-white">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo} target='_blank'>
                      <Button variant="outline" size="sm" className="border-slate-600 hover:cursor-pointer hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-emerald-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-emerald-400/10 hover:text-emerald-300 hover:cursor-default transition-colors duration-200">
                        {tech}
                      </Badge>
                    ))}
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

export default Projects;