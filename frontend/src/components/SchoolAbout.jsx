import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Target, Compass, Award } from 'lucide-react';

const SchoolAbout = ({ school }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            About {school.shortName}
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {school.description}
          </p>
        </motion.div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                {school.vision}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Compass className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                {school.mission}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 h-full bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                {school.values}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 bg-muted/30 border-border/50 shadow-soft">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
              Our Commitment to Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-6">
              We combine traditional Indian values with modern teaching methodologies, ensuring our students are well-equipped 
              for the challenges of tomorrow while staying rooted in their cultural heritage. Our dedicated team of educators 
              works tirelessly to create an environment where every child can thrive academically, socially, and emotionally.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              Through personalized attention, state-of-the-art facilities, and a curriculum designed for holistic development, 
              we ensure that each student receives the support they need to reach their full potential. Our success is measured 
              not just in academic achievements, but in the character, confidence, and capabilities of our graduates.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolAbout;
