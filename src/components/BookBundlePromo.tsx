import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export const BookBundlePromo = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Book Covers */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative p-8 bg-gradient-to-br from-primary-light to-accent/30 flex items-center justify-center"
                >
                  <div className="flex gap-4 items-end">
                    <motion.img
                      src="/images/viral-for-the-wrong-reasons.JPG"
                      alt="Viral for the Wrong Reasons book cover"
                      className="w-28 md:w-36 rounded-lg shadow-card transform -rotate-6 hover:rotate-0 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    <motion.img
                      src="/images/the-group-chat.JPG"
                      alt="The Group Chat book cover"
                      className="w-32 md:w-40 rounded-lg shadow-card z-10 hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.08 }}
                    />
                    <motion.img
                      src="/images/fast-money-slow-consequences.JPG"
                      alt="Fast Money Slow Consequences book cover"
                      className="w-28 md:w-36 rounded-lg shadow-card transform rotate-6 hover:rotate-0 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="p-8 md:p-12 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-wide">
                      New Curriculum Bundle
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    The Digital Age Diaries
                  </h2>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Book 1–3 Curriculum Bundle
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A culturally responsive literature series created for middle and high school students navigating real-world pressures — social media influence, peer pressure, and decision-making — all without glorifying harmful behavior.
                  </p>
                  <div>
                    <Button variant="hero" asChild>
                      <Link to="/book-bundle">
                        View Bundle
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
