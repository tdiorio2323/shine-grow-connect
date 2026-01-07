import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, GraduationCap, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Book {
  title: string;
  gradeBand: string;
  focus: string;
  cover: string;
  downloadUrl?: string;
}

const books: Book[] = [
  {
    title: "Viral for the Wrong Reasons",
    gradeBand: "Grades 5–8",
    focus: "Focuses on social media pressure, cyberbullying, reputation, accountability, and online decision-making.",
    cover: "/images/viral-for-the-wrong-reasons.JPG",
  },
  {
    title: "The Group Chat",
    gradeBand: "Grades 6–9",
    focus: "Focuses on peer pressure, loyalty vs. honesty, rumors, screenshots, and speaking up.",
    cover: "/images/the-group-chat.JPG",
  },
  {
    title: "Fast Money, Slow Consequences",
    gradeBand: "Grades 8–12",
    focus: "Focuses on gang pressure, fast money, drug exposure, consent, and long-term consequences.",
    cover: "/images/fast-money-slow-consequences.JPG",
  },
];

const BookBundle = () => {
  useEffect(() => {
    document.title = "Digital Age Diaries Bundle | A&J Solano — Thrive & Shine Center";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "The Digital Age Diaries Book 1–3 Curriculum Bundle is a culturally responsive literature series for middle and high school students navigating real-world pressures in today's urban communities."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      {/* Hero Section with Book Covers */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,66,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(30,64,175,0.2),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Covers Display */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center h-[400px] md:h-[500px]"
            >
              {/* Left Book - Viral for the Wrong Reasons */}
              <motion.div
                initial={{ opacity: 0, rotate: -15, x: -30 }}
                animate={{ opacity: 1, rotate: -12, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-[5%] md:left-[10%] z-10"
              >
                <motion.img
                  src="/images/viral-for-the-wrong-reasons.JPG"
                  alt="Viral for the Wrong Reasons book cover"
                  className="w-32 md:w-44 lg:w-52 rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Center Book - The Group Chat */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-20"
              >
                <motion.img
                  src="/images/the-group-chat.JPG"
                  alt="The Group Chat book cover"
                  className="w-40 md:w-52 lg:w-64 rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Right Book - Fast Money Slow Consequences */}
              <motion.div
                initial={{ opacity: 0, rotate: 15, x: 30 }}
                animate={{ opacity: 1, rotate: 12, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute right-[5%] md:right-[10%] z-10"
              >
                <motion.img
                  src="/images/fast-money-slow-consequences.JPG"
                  alt="Fast Money Slow Consequences book cover"
                  className="w-32 md:w-44 lg:w-52 rounded-lg shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
            
            {/* Hero Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-white/90 uppercase tracking-wide">
                  New Curriculum Bundle
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                The Digital Age Diaries
              </h1>
              
              <p className="text-xl md:text-2xl text-orange-400 font-semibold mb-4">
                Book 1–3 Curriculum Bundle
              </p>
              
              <p className="text-white/70 text-lg mb-3">
                By A&J Solano Services
              </p>
              
              <p className="text-white/90 font-medium text-lg md:text-xl max-w-xl">
                Three powerful novels. Three critical conversations. One complete prevention & SEL solution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="container mx-auto px-4">

          {/* Bundle Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="border-0 shadow-card">
              <CardContent className="p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Bundle Overview
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        The Digital Age Diaries Book 1–3 Curriculum Bundle is a culturally responsive, curriculum-safe literature series created for middle and high school students navigating real-world pressures in today's urban communities.
                      </p>
                      <p>
                        Each book builds intentionally on the last, guiding students through modern challenges including social media influence, peer pressure, fast money, gangs, substance exposure, relationships, and decision-making — all without glorifying harmful behavior.
                      </p>
                      <p className="text-primary font-medium">
                        This bundle supports instruction across ELA, Health, SEL, Advisory, and Prevention Programs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* What's Included - Book Cards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {books.map((book, index) => (
                <motion.div
                  key={book.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-card h-full overflow-hidden group hover:shadow-glow transition-shadow duration-300">
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Book Cover */}
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={book.cover}
                          alt={`${book.title} book cover`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Book Info */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          {book.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {book.gradeBand}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                          {book.focus}
                        </p>
                        {/* eBook Download Button */}
                        <div className="mt-4 pt-4 border-t border-border">
                          {book.downloadUrl ? (
                            <Button variant="heroSecondary" className="w-full" asChild>
                              <a href={book.downloadUrl} download>
                                <Download className="w-4 h-4" />
                                Download eBook
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" className="w-full" disabled>
                              <Download className="w-4 h-4" />
                              eBook coming soon
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Learning Outcomes */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <Card className="border-0 shadow-card bg-primary-light">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
                  Key Learning Outcomes
                </h2>
                <p className="text-foreground leading-relaxed text-center text-lg">
                  Students will recognize peer pressure, understand consequences, develop critical thinking skills, and build confidence in choosing themselves.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Final Message Callout */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="border-0 shadow-card bg-secondary/30">
              <CardContent className="p-10 md:p-12">
                <Quote className="w-10 h-10 text-primary mx-auto mb-6" />
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  One book starts a conversation.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-primary leading-relaxed">
                  A series changes behavior.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookBundle;
