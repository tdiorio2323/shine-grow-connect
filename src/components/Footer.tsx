import { Phone, Mail, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">A&J</span>
                </div>
                <div>
                  <p className="font-semibold text-background">A&J Solano</p>
                  <p className="text-sm text-background/70">Thrive & Shine Center</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-background/70 text-sm mb-3">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Serving New Jersey & New York City</span>
              </div>
            </div>

            {/* Contact */}
            <div className="md:text-right">
              <p className="font-semibold text-background mb-3">Get in Touch</p>
              <div className="space-y-2">
                <a
                  href="tel:+12018899167"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors md:justify-end text-sm"
                >
                  <Phone className="w-4 h-4" />
                  (201) 889-9167
                </a>
                <a
                  href="mailto:Ajsolanodeliver@gmail.com"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors md:justify-end text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Ajsolanodeliver@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 pt-8">
            {/* Mission Statement */}
            <div className="flex items-center justify-center gap-2 text-background/60 text-sm mb-4">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-center">
                Creating inclusive, welcoming spaces where every child can thrive.
              </span>
            </div>

            {/* Copyright */}
            <p className="text-center text-background/40 text-sm">
              © {currentYear} A&J Solano — Thrive & Shine Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
