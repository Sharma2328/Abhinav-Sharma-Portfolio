
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue text-portfolio-text py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Portfolio</h3>
            <p className="text-portfolio-muted mb-4">
              Creating beautiful web experiences with clean code and thoughtful design.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Sharma2328" className="text-portfolio-muted hover:text-portfolio-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhinav-sharma-277972213/" className="text-portfolio-muted hover:text-portfolio-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-portfolio-muted hover:text-portfolio-accent">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" className="text-portfolio-muted hover:text-portfolio-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-portfolio-muted hover:text-portfolio-accent">About</a></li>
              <li><a href="#skills" className="text-portfolio-muted hover:text-portfolio-accent">Skills</a></li>
              <li><a href="#projects" className="text-portfolio-muted hover:text-portfolio-accent">Projects</a></li>
              <li><a href="#contact" className="text-portfolio-muted hover:text-portfolio-accent">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-portfolio-muted">
              Available for freelance projects and full-time opportunities.
            </p>
            <a href="mailto:abhinav2328@gmail.com" className="block mt-2 text-portfolio-accent hover:underline">
              abhinav2328@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-portfolio-muted">
          <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
