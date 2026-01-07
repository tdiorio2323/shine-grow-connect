import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import logoWhite from "@/assets/logo-white.png";

const navItems = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "About", href: "/about", isRoute: true },
  { label: "Programs & Services", href: "#programs", isRoute: false },
  { label: "Book Bundle", href: "/book-bundle", isRoute: true },
  { label: "Service Area", href: "#service-area", isRoute: false },
  { label: "FAQ", href: "#faq", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const location = useLocation();

  // Pages with dark hero sections that need light text when not scrolled
  const darkHeroPages = ["/book-bundle"];
  const hasDarkHero = darkHeroPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only track sections on the home page
      if (location.pathname !== "/") return;

      // Find active section based on scroll position
      const sections = navItems.filter(item => !item.isRoute).map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    if (isRoute) return; // Route navigation handled by Link

    if (location.pathname !== "/") {
      // If not on home page, navigate to home then scroll
      window.location.href = "/" + href;
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text color classes based on scroll state and hero type
  const navTextClass = !isScrolled && hasDarkHero 
    ? "text-white hover:text-white/80 hover:bg-white/10" 
    : "";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center"
          >
            <img
              src={!isScrolled && hasDarkHero ? logoWhite : logo}
              alt="A&J Solano - Thrive & Shine Center"
              className="h-10 sm:h-12 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Button
                  key={item.href}
                  variant="nav"
                  size="sm"
                  asChild
                  className={`${navTextClass} ${location.pathname === item.href ? "bg-primary/10 text-primary" : ""}`}
                >
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button
                  key={item.href}
                  variant="nav"
                  size="sm"
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className={`${navTextClass} ${location.pathname === "/" && activeSection === item.href ? "bg-primary/10 text-primary" : ""}`}
                >
                  {item.label}
                </Button>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="soft"
              size="sm"
              asChild
            >
              <a href="tel:+12018899167">
                <Phone className="w-4 h-4" />
                Call
              </a>
            </Button>
            <Button
              variant="hero"
              size="sm"
              asChild
            >
              <a href="mailto:Ajsolanodeliver@gmail.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${!isScrolled && hasDarkHero ? "text-white hover:bg-white/10" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={`justify-start ${location.pathname === item.href ? "bg-primary/10 text-primary" : ""}`}
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                ) : (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={`justify-start ${location.pathname === "/" && activeSection === item.href ? "bg-primary/10 text-primary" : ""}`}
                    onClick={() => handleNavClick(item.href, item.isRoute)}
                  >
                    {item.label}
                  </Button>
                )
              ))}
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="soft" className="flex-1" asChild>
                  <a href="tel:+12018899167">
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </Button>
                <Button variant="hero" className="flex-1" asChild>
                  <a href="mailto:Ajsolanodeliver@gmail.com">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
