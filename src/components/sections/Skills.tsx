import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: "JavaScript", percentage: 90 },
  { name: "TypeScript", percentage: 85 },
  { name: "React", percentage: 92 },
  { name: "Node.js", percentage: 85 },
  { name: "HTML/CSS", percentage: 90 },
  { name: "Tailwind CSS", percentage: 88 },
  { name: "MongoDB", percentage: 80 },
  { name: "SQL", percentage: 75 },
];

export default function Skills() {
  const [progressValues, setProgressValues] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValues(skills.map(skill => skill.percentage));
    }, 500); // Start animation after 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-portfolio-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-portfolio-crimson font-medium mb-3">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Technical Expertise & Proficiency
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With expertise in multiple technologies, I continuously expand my knowledge and stay up-to-date with the latest developments in web application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="space-y-2 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-lg">{skill.name}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{progressValues[index]}%</span>
              </div>
              <Progress
                value={progressValues[index]}
                className="h-2 transition-all duration-1000 ease-out [&>div]:bg-portfolio-crimson"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold font-serif mb-8 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React", "TypeScript", "Python", "SQL", "Next.js", "Node.js", "Express", "MongoDB", 
              "PostgreSQL", "Redux", "AWS", "Git", "Jest", "Vitest", "Tailwind CSS", "Storybook", "Docker", 
              "Azure DevOps", "HTML", "CSS", "Sass"
            ].map((tool, index) => (
              <div 
                key={index} 
                className="px-5 py-3 bg-white dark:bg-portfolio-blue-light rounded-lg shadow-md text-center transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                <span className="font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
