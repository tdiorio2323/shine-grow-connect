import { Phone, Mail, MapPin, Heart, ArrowUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", href: "/about", isRoute: true },
    { label: "Programs & Services", href: "/#programs", isRoute: false },
    { label: "Book Bundle", href: "/book-bundle", isRoute: true },
    { label: "FAQ", href: "/#faq", isRoute: false },
    { label: "Contact", href: "/#contact", isRoute: false },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-foreground to-foreground/95 overflow-hidden">
      {/* Decorative curved top edge */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute -top-1 w-full h-20 text-background"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,50 1200,60 L1200,0 L0,0 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 group"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-primary-foreground group-hover:-translate-y-0.5 transition-transform" />
      </motion.button>

      <div className="container mx-auto px-4 pt-24 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="inline-block mb-5">
              <img
                src={logo}
                alt="A&J Solano - Thrive & Shine Center"
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-4">
              Empowering individuals and families to move forward with clarity, confidence, and purpose.
            </p>
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0 text-primary" />
              <span>Serving New Jersey & New York City</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-background mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-primary hover:translate-x-1 inline-flex transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-primary hover:translate-x-1 inline-flex transition-all duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-background mb-4 text-lg">Get in Touch</h3>
            <div className="space-y-4">
              <a
                href="tel:+12018899167"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-all duration-300 text-sm group"
              >
                <span className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span>(201) 889-9167</span>
              </a>
              <a
                href="mailto:Ajsolanodeliver@gmail.com"
                className="flex items-center gap-3 text-background/60 hover:text-primary transition-all duration-300 text-sm group"
              >
                <span className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="break-all">Ajsolanodeliver@gmail.com</span>
              </a>
            </div>
          </motion.div>

          {/* Newsletter / Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-background mb-4 text-lg">Our Mission</h3>
            <p className="text-background/60 text-sm leading-relaxed mb-5">
              Creating inclusive, welcoming spaces where every child can thrive and every family feels supported.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-background/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-background/50 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <span>for families</span>
            </div>
            <p className="text-background/40 text-sm">
              © {currentYear} A&J Solano — Thrive & Shine Center. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};