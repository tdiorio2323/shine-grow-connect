import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Heart, Users, School } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

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
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Warm, welcoming therapy environment" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-[1]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-peach/15 rounded-full blur-3xl z-[1]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="A&J Solano - Thrive & Shine Center" 
              className="h-28 md:h-36 lg:h-44 w-auto mx-auto drop-shadow-lg"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
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
                Call Us
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
              className="bg-card/95 backdrop-blur-sm border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
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
