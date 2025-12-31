import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Families & Partners Share
          </h2>
          
          <Card className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                "We're grateful for the many families, schools, and community partners who 
                have trusted us on their journey. Their stories inspire everything we do."
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Testimonials available upon request.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
