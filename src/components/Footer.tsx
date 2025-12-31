import { Phone, Mail, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

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
