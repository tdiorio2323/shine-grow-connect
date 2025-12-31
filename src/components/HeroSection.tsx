import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Heart, Users, School } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Heart,
    title: "Inclusive Support",
    description: "Welcoming every child with warmth and understanding",
  },
  {
    icon: Users,
    title: "Skill-Building Programs",
    description: "Fun, engaging activities that build confidence",
  },
  {
    icon: School,
    title: "Schools + Families Partnerships",
    description: "Collaborative support for lasting growth",
  },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen gradient-hero pt-24 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-peach/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              A&J Solano — 
              <span className="text-primary"> Thrive & Shine Center</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Warm, supportive programs helping children grow with confidence, connection, and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="tel:+12018899167">
                <Phone className="w-5 h-5" />
                Call Jennifer
              </a>
            </Button>
            <Button variant="heroSecondary" size="xl" asChild>
              <a href="mailto:Ajsolanodeliver@gmail.com">
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {highlights.map((item, index) => (
            <Card
              key={item.title}
              className="gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
