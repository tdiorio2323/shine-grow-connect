import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "Trusted by families across NJ & NYC",
  "Partnered with schools & organizations",
  "15+ years of dedicated service",
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-peach/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Families & Partners Share
          </h2>

          <Card className="border-0 shadow-card bg-card/90 backdrop-blur-sm relative overflow-hidden">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 text-primary/10">
              <Quote className="w-16 h-16" />
            </div>
            <CardContent className="p-8 md:p-10 relative">
              <p className="text-foreground text-xl md:text-2xl leading-relaxed font-medium mb-6">
                "We're grateful for the many families, schools, and community partners who
                have trusted us on their journey. Their stories inspire everything we do."
              </p>
              <p className="text-primary font-semibold mb-8">
                — Jennifer Solano, Founder
              </p>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-3 pt-6 border-t border-border">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Star className="w-4 h-4 text-peach fill-peach" />
                    {highlight}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Full testimonials available upon request.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
