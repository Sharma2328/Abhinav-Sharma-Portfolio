
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educations = [
  {
    institution: "Thakur Institute (TIMSCDR)",
    degree: "M.C.A. - 7.25 GPA",
    period: "2023 - 2025"
  },
  {
    institution: "Patkar Varde College, Mumbai",
    degree: "BSC (Computer Science) - 8.88 GPA",
    period: "2019 - 2022"
  }
];

const certifications = [
  { name: "Certified in Java Training (IIT Bombay)", score: "82.50%" },
  { name: "Certified in PHP and MySQL (IIT Bombay)", score: "70.83%" },
  { name: "Certified in RDBMS PostgreSQL Training", score: "69.96%" }
];

const awards = [
  { name: "Participant of Future Tech State Hackathon", year: "2021" },
  { name: "Participant of Digital Solution State Challenge", year: "2020" }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-portfolio-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-portfolio-accent font-medium mb-3">My Education</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Academic Background & Certifications
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My educational qualifications, certifications, and achievements that have contributed to my professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h4 className="text-2xl font-bold font-serif mb-6 text-center">Education</h4>
            <div className="space-y-6">
              {educations.map((education, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-full dark:bg-portfolio-blue-light">
                        <GraduationCap className="h-6 w-6 text-portfolio-accent" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold">{education.institution}</h5>
                        <p className="text-portfolio-accent">{education.degree}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{education.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-12">
              <h4 className="text-2xl font-bold font-serif mb-6 text-center">Certifications</h4>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{cert.name}</span>
                          <span className="text-sm text-portfolio-accent">{cert.score}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-2xl font-bold font-serif mb-6 text-center">Honors & Awards</h4>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    {awards.map((award, index) => (
                      <li key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{award.name}</span>
                          <span className="text-sm text-gray-500">{award.year}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
