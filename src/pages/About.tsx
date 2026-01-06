import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Heart, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const highlights = [
  { icon: Heart, label: "Genuine Care" },
  { icon: Award, label: "Results-Driven" },
  { icon: Users, label: "Collaborative Approach" },
];

const About = () => {
  useEffect(() => {
    document.title = "About | A&J Solano — Thrive & Shine Center";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet Jennifer Solano, the heart behind A&J Solano Services. With a background in behavioral support and client advocacy, Jennifer helps individuals and families move forward with clarity, confidence, and purpose."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Thrive & Shine Center
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Empowering individuals and families to move forward with clarity, confidence, and purpose.
            </p>
          </motion.div>

          {/* Meet Jennifer Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    Meet Jennifer Solano
                  </h2>

                  <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                    <p>
                      Jennifer Solano is the heart behind A&J Solano Services, bringing a unique blend of real-world experience, strategic coaching, and genuine care to every client she works with. With a background in behavioral support, client advocacy, and hands-on business leadership, Jennifer is passionate about helping individuals and families move forward with clarity, confidence, and purpose.
                    </p>
                    <p>
                      Jennifer's coaching style is practical, supportive, and results-driven. She meets people where they are, helps simplify overwhelming situations, and works collaboratively to create realistic goals and actionable plans. Whether supporting personal growth, professional development, or life transitions, her focus is always on empowerment, accountability, and long-term success.
                    </p>
                    <p>
                      At A&J Solano Services, Jennifer believes that progress starts with understanding—and that everyone deserves guidance that is honest, compassionate, and tailored to their journey.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 my-8">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-light text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button variant="hero" asChild>
                      <a href="tel:+12018899167">
                        <Phone className="w-4 h-4" />
                        Call Us
                      </a>
                    </Button>
                    <Button variant="heroSecondary" asChild>
                      <a href="mailto:Ajsolanodeliver@gmail.com">
                        <Mail className="w-4 h-4" />
                        Send a Message
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
