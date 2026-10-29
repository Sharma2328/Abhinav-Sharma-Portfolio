
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Project categories
const categories = ["All", "Desktop App", "Backend", "Web App", "Full Stack", "UI/UX"];

// Project data
const projects = [
  {
    id: 4,
    title: "Offline AI Assistant",
    category: "Desktop App",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2032&auto=format&fit=crop",
    description: "A privacy-first macOS (Apple Silicon) desktop app for local chat, document Q&A, and repeatable model benchmarks. Runs entirely offline with a bundled llama.cpp runtime — no cloud inference and no model downloads at runtime.",
    technologies: ["Tauri 2", "Rust", "React", "TypeScript", "SQLite", "llama.cpp"],
    github: "https://github.com/Sharma2328/offline-ai-assistant",
    liveDemo: "https://github.com/Sharma2328/offline-ai-assistant",
    date: "Sep 2026"
  },
  {
    id: 5,
    title: "Slack PR Tracker",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2089&auto=format&fit=crop",
    description: "An event-driven service that records PR workflow submissions from Slack into a private, threaded tracker. Maintains monthly pages, PR detail/history, and revisions in SQLite — with zero runtime npm dependencies.",
    technologies: ["Node.js 24", "TypeScript", "SQLite", "Slack API", "Docker"],
    github: "https://github.com/Sharma2328/slack-pr-tracker",
    liveDemo: "https://github.com/Sharma2328/slack-pr-tracker",
    date: "June 2026"
  },
  {
    id: 1,
    title: "Square & Circle (Interior Design)",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2080&auto=format&fit=crop",
    description: "A static web application showcasing interior design services, with a gallery of design projects, service descriptions, and client testimonials.",
    technologies: ["M.E.R.N", "Tailwind CSS", "TypeScript", "Redux Tool-kit", "AWS", "Docker"],
    github: "https://github.com/Sharma2328/square-circle",
    liveDemo: "https://square-circle.vercel.app/",
    date: "Mar 2024"
  },
  {
    id: 2,
    title: "Real Estate Full-Stack Network Platform",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    description: "A real estate listing website allowing users to browse, filter, and search for properties with responsive design across various devices.",
    technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Firebase", "Google Maps API"],
    github: "#",
    liveDemo: "#",
    date: "Nov 2024"
  },
  {
    id: 3,
    title: "Todo List App",
    category: "UI/UX",
    image: "/todo.jpg",
    description: "A todo list app with a clean and modern design, allowing users to add, edit, and delete tasks with ease.",
    technologies: ["React.js", "JavaScript", "Figma", "Tailwind CSS"],
    github: "https://github.com/Sharma2328/todo-app",
    liveDemo: "https://todo-app-one-chi-63.vercel.app/",
    date: "May 2025"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-portfolio-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-portfolio-crimson font-medium mb-3">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Featured Projects
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects that showcase my skills and expertise in
            web application development.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "bg-portfolio-crimson hover:bg-portfolio-crimson-hover text-white" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover">
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-xl font-bold">{project.title}</h4>
                  <div className="flex flex-col items-end">
                    <span className="text-xs bg-gray-100 dark:bg-portfolio-blue-light px-2 py-1 rounded mb-1">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.date}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-portfolio-blue-light rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                  <a
                    href={project.liveDemo}
                    className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 hover:text-portfolio-accent"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
