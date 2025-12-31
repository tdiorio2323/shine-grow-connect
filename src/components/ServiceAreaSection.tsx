import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const ServiceAreaSection = () => {
  return (
    <section id="service-area" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Service Area
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Proudly serving children, families, schools, and organizations throughout 
            <span className="font-semibold text-foreground"> New Jersey </span> 
            and 
            <span className="font-semibold text-foreground"> New York City</span>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with families, the Department of Education, schools, and community programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
