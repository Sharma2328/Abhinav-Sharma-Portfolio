
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-portfolio-blue to-portfolio-blue-light text-portfolio-text pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-portfolio-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-portfolio-crimson/25 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <h2 className="text-portfolio-accent font-medium mb-3">Full Stack Web Application Developer</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                Abhinav S. Sharma
              </h1>
            </div>
            
            <p className="text-lg text-portfolio-muted max-w-lg">
              Experienced full-stack developer specializing in React, TypeScript, Node, and AWS. Building responsive interfaces and scalable web applications with a focus on performance and user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2 text-md" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="bg-transparent border border-portfolio-muted text-white hover:bg-white/10 text-md">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="pt-4">
              <p className="text-portfolio-muted mb-3">Tech Stack:</p>
              <div className="flex flex-wrap gap-4">
                {['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-portfolio-accent/20 blur-2xl rounded-full"></div>
              <div className="relative bg-portfolio-blue-light border border-white/10 p-4 rounded-2xl shadow-xl">
                <img
                  src="/abhinav-portrait.png"
                  alt="Abhinav S. Sharma"
                  className="w-full h-auto rounded-lg"
                  width={500}
                  height={625}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
