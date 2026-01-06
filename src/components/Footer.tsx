import { Phone, Mail, MapPin, Heart, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-12 relative">
      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground" />
      </motion.button>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <img
                  src={logo}
                  alt="A&J Solano - Thrive & Shine Center"
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <div className="flex items-center gap-2 text-background/70 text-sm mb-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Serving New Jersey & New York City</span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="md:text-center"
            >
              <p className="font-semibold text-background mb-3">Quick Links</p>
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block text-background/70 hover:text-primary transition-all duration-300 text-sm"
                >
                  About
                </Link>
                <a
                  href="/#programs"
                  className="block text-background/70 hover:text-primary transition-all duration-300 text-sm"
                >
                  Programs & Services
                </a>
                <a
                  href="/#contact"
                  className="block text-background/70 hover:text-primary transition-all duration-300 text-sm"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:text-right"
            >
              <p className="font-semibold text-background mb-3">Get in Touch</p>
              <div className="space-y-2">
                <a
                  href="tel:+12018899167"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-all duration-300 md:justify-end text-sm group"
                >
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  (201) 889-9167
                </a>
                <a
                  href="mailto:Ajsolanodeliver@gmail.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-all duration-300 md:justify-end text-sm group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Ajsolanodeliver@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-t border-background/10 pt-8"
          >
            {/* Mission Statement */}
            <div className="flex items-center justify-center gap-2 text-background/60 text-sm mb-4">
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-center">
                Creating inclusive, welcoming spaces where every child can thrive.
              </span>
            </div>

            {/* Copyright */}
            <p className="text-center text-background/40 text-sm">
              © {currentYear} A&J Solano — Thrive & Shine Center. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
