import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Heart, Award, Users } from "lucide-react";
import { motion } from "framer-motion";
import jenniferPhoto from "@/assets/jennifer-solano.jpg";

const highlights = [
  { icon: Heart, label: "Dedicated to Every Child" },
  { icon: Award, label: "Experienced Specialist" },
  { icon: Users, label: "Family-Centered Approach" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Jennifer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The heart and soul behind A&J Solano — Thrive & Shine Center.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Photo */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-2 relative"
                >
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                    <img
                      src={jenniferPhoto}
                      alt="Jennifer Solano - Founder of A&J Solano Thrive & Shine Center"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent lg:bg-gradient-to-r" />
                </motion.div>

                {/* Bio Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Jennifer Solano
                    </h3>
                    <p className="text-primary font-semibold">
                      Founder & Child Development Specialist
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>
                      With over 15 years of experience working with children on the autism 
                      spectrum and neurotypical children alike, Jennifer founded A&J Solano 
                      with a simple belief: every child deserves to feel confident, capable, 
                      and celebrated for who they are.
                    </p>
                    <p>
                      Her approach combines evidence-based practices with warmth and creativity, 
                      creating programs that feel less like therapy and more like play. Jennifer 
                      works closely with families, schools, and community organizations throughout 
                      New Jersey and New York City to build bridges of understanding and support.
                    </p>
                    <p className="text-foreground font-medium italic">
                      "I believe that when we meet children where they are and celebrate their 
                      unique strengths, incredible growth happens naturally."
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {highlights.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-light text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="hero" asChild>
                      <a href="tel:+12018899167">
                        <Phone className="w-4 h-4" />
                        Call Jennifer
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
