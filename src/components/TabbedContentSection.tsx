import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  BookOpen,
  Users,
  Shield,
  Brain,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const programs = [
  { icon: Users, title: "Social Development & Social Skills" },
  { icon: Shield, title: "Bullying Awareness & Confidence Building" },
  { icon: Brain, title: "Peer Pressure & Decision-Making Skills" },
  { icon: Heart, title: "Child Development Support (Spectrum & Non-Spectrum)" },
  { icon: GraduationCap, title: "Spectrum Seminars for Schools & Community Programs" },
];

export const TabbedContentSection = () => {
  return (
    <section id="programs" className="py-20 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our mission, programs, and resources for families and schools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="mission" className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span className="hidden sm:inline">Mission Statement</span>
                <span className="sm:hidden">Mission</span>
              </TabsTrigger>
              <TabsTrigger value="programs" className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4" />
                <span className="hidden sm:inline">Programs & Services</span>
                <span className="sm:hidden">Programs</span>
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Parents, Schools & Resources</span>
                <span className="sm:hidden">Resources</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="mission">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        Our Mission
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        At A&J Solano, we support children on the autism spectrum and neurotypical 
                        children through fun, engaging, and meaningful skill-building. Our goal is 
                        to help every child feel confident, included, and capable in everyday life.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="programs">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Our Programs & Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programs.map((program) => (
                      <div
                        key={program.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                          <program.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-foreground font-medium leading-snug">
                          {program.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">
                        For Parents, Schools & Organizations
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                        We offer supportive parent classes, school-based seminars, and practical 
                        resources to help adults better support children's growth. Our services 
                        are designed for families, educators, and organizations seeking guidance, 
                        understanding, and collaboration.
                      </p>
                      <p className="text-primary font-medium text-lg">
                        A&J Solano is committed to creating inclusive, welcoming spaces where 
                        every child can thrive.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
