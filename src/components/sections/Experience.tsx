import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer Internship",
    company: "Fynd Shopsense Retail, Mumbai",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Developed and maintained front-end components using React and Vite, ensuring high performance and seamless user experience.",
      "Collaborated with cross-functional teams for component integration and designed reusable, scalable components using Storybook for UI development and testing.",
      "Wrote unit and integration tests using Vitest and Jest, ensuring robust code quality and high test coverage.",
      "Utilized Git for version control, collaborating effectively within a team and following best practices for code branching, merging, and resolving conflicts.",
      "Actively participated in Agile development practices using Jira, managing tasks, tickets, and sprint deliverables efficiently.",
      "Integrated project workflows with Azure DevOps for CI/CD and cloud-based deployment processes.",
      "Gained hands-on experience with front-end testing, debugging, and UI/UX design principles, ensuring alignment with design specifications."
    ]
  },
  {
    title: "System Administrator Intern",
    company: "Incinc Media, Mumbai",
    period: "Mar 2023 - Sep 2023",
    responsibilities: [
      "Assisted in system administration tasks, including managing and maintaining internal servers and network infrastructure to ensure seamless operation.",
      "Conducted and coordinated online exams, managing the setup, execution, and troubleshooting of exam platforms.",
      "Ensured that all exam software and systems were functioning properly and that users had access to required resources and support during exams.",
      "Monitored exam environments for any technical issues or disruptions, providing timely resolutions to ensure smooth operations.",
      "Collaborated with other team members to ensure data security and confidentiality during the exam process."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-portfolio-accent font-medium mb-3">My Experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Professional Journey
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My career path and professional experiences that have shaped my skills and expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="card-hover">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h4 className="text-xl font-bold">{experience.title}</h4>
                      <h5 className="text-portfolio-accent">{experience.company}</h5>
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className="flex items-center gap-2 mt-2 md:mt-0"
                    >
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{experience.period}</span>
                    </motion.div>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
