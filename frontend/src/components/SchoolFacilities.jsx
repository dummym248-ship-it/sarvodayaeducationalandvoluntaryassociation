import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { 
  BookOpen, 
  TreePine, 
  Trophy, 
  Library as LibraryIcon, 
  Heart, 
  Music,
  Shield,
  Palette,
  Apple,
  Microscope,
  Monitor,
  Briefcase,
  Building2
} from 'lucide-react';

const iconMap = {
  BookOpen,
  TreePine,
  Trophy,
  Library: LibraryIcon,
  Heart,
  Music,
  Shield,
  Palette,
  Apple,
  Microscope,
  Monitor,
  Briefcase,
  Building: Building2
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const SchoolFacilities = ({ school }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Facilities
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern infrastructure and resources designed to provide the best learning environment
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {school.facilities.map((facility, index) => {
            const IconComponent = iconMap[facility.icon] || BookOpen;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card className="p-6 h-full bg-card shadow-soft hover:shadow-medium transition-all duration-300 border-border/50">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Our Campus
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-medium">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570" 
                alt="Library"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                <span className="text-primary-foreground font-semibold">Library</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-medium">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211" 
                alt="Sports Facilities"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                <span className="text-primary-foreground font-semibold">Sports Facilities</span>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-medium">
              <img 
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg" 
                alt="Campus"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-4">
                <span className="text-primary-foreground font-semibold">Swimming Pool</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolFacilities;
