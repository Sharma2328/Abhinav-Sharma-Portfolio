import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_8vwtvvl',
        'template_q9s2pef',
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        '_eM2PCQjeTGXzhigp' // You'll need to replace this with your actual public key
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-portfolio-blue">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-portfolio-accent font-medium mb-3">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">
            Let's Work Together
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Information</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Feel free to contact me via email or phone, or fill out the contact form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-portfolio-blue-light rounded-full shadow-md">
                  <Mail className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div>
                  <h5 className="font-medium">Email</h5>
                  <a href="mailto:abhinav2328@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-accent">
                    abhinav2328@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-portfolio-blue-light rounded-full shadow-md">
                  <Phone className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div>
                  <h5 className="font-medium">Phone</h5>
                  <a href="tel:+918879251184" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-accent">
                    +91-8879251184
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white dark:bg-portfolio-blue-light rounded-full shadow-md">
                  <MapPin className="h-6 w-6 text-portfolio-accent" />
                </div>
                <div>
                  <h5 className="font-medium">Location</h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mumbai-102, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white dark:bg-portfolio-blue-light rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">Sending... <span className="ml-2 animate-spin">◌</span></span>
                ) : (
                  <span className="flex items-center">Send Message <Send className="ml-2 w-4 h-4" /></span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
