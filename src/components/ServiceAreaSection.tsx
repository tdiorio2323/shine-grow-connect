import { MapPin, Building2, School, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { icon: Users, label: "Families" },
  { icon: Building2, label: "Dept. of Education" },
  { icon: School, label: "Schools" },
  { icon: Heart, label: "Community Programs" },
];

const locations = [
  { name: "New Jersey", areas: "Bergen, Hudson, Essex, Passaic & more" },
  { name: "New York City", areas: "All 5 boroughs" },
];

export const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Service Area
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
            Proudly serving children, families, schools, and organizations throughout the tri-state area.
          </p>

          {/* Location Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl shadow-card p-6 min-w-[200px] hover:shadow-glow transition-shadow duration-300"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-bold text-foreground text-lg">{location.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{location.areas}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Badges */}
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wide font-medium">We partner with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
              >
                <partner.icon className="w-4 h-4" />
                {partner.label}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
