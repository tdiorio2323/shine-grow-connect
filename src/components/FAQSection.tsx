import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What ages do you work with?",
    answer: "We work with children of all ages, from early childhood through adolescence. Our programs are tailored to meet the developmental needs of each age group, whether for children on the autism spectrum or neurotypical children."
  },
  {
    question: "How do I schedule an initial consultation?",
    answer: "You can reach out by phone at (201) 889-9167 or email us at Ajsolanodeliver@gmail.com. We'll discuss your child's needs and find a time that works for your family to meet and explore how we can help."
  },
  {
    question: "What should I expect during the first session?",
    answer: "The first session is an opportunity for us to get to know your child and understand their unique strengths and areas for growth. We'll discuss goals, answer your questions, and create a comfortable environment where your child can begin to feel at ease."
  },
  {
    question: "Do you offer services for schools and organizations?",
    answer: "Yes! We partner with schools, the Department of Education, and community organizations to provide seminars, workshops, and ongoing support. Our school-based programs include social skills training, bullying awareness, and spectrum education for staff and students."
  },
  {
    question: "Are your programs available for both spectrum and non-spectrum children?",
    answer: "Absolutely. Our programs are designed to be inclusive and supportive for all children. We offer specialized support for children on the autism spectrum as well as skill-building programs for neurotypical children."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve families, schools, and organizations throughout New Jersey and New York City. If you're unsure whether we can help in your area, please reach out—we're happy to discuss options."
  },
  {
    question: "Do you offer parent and caregiver support?",
    answer: "Yes, we offer supportive parent classes and resources designed to help adults better understand and support children's growth. We believe collaboration with families is key to every child's success."
  },
  {
    question: "How long are typical sessions?",
    answer: "Session length varies based on the program and your child's needs. Most individual sessions run between 45 minutes to an hour. Group programs and workshops may vary in duration. We'll discuss what works best during your consultation."
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, scheduling, and what to expect when working with A&J Solano.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
