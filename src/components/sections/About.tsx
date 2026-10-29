
import { User, Code, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-portfolio-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-portfolio-accent font-medium mb-3">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Full Stack Web Application Developer
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a skilled developer based in Mumbai, India, specializing in building modern, responsive web applications with a focus on performance, scalability, and exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <User className="h-10 w-10 text-portfolio-accent" />,
              title: "Experience",
              description: "Experienced in front-end and back-end development with modern JavaScript frameworks and libraries including React, Next.js, and Node.js."
            },
            {
              icon: <Code className="h-10 w-10 text-portfolio-accent" />,
              title: "Technical Skills",
              description: "Proficient in JavaScript, TypeScript, Python, SQL, and various modern web technologies with a focus on clean, maintainable code."
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-portfolio-accent" />,
              title: "Problem Solver",
              description: "Strong analytical skills with experience in UI/UX design principles, testing, and deployment processes using tools like Jest and Azure DevOps."
            },
            {
              icon: <Users className="h-10 w-10 text-portfolio-accent" />,
              title: "Team Player",
              description: "Collaborative team member with experience in Agile development practices, version control with Git, and cross-functional team integration."
            }
          ].map((item, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 p-3 bg-portfolio-surface rounded-full dark:bg-portfolio-surface">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
