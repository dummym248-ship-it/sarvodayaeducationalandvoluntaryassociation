import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Users, GraduationCap, Award, Calendar } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const SchoolHero = ({ school }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              {school.tagline}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              {school.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {school.description}
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft">
                <Users className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={school.stats.students} />+
                </div>
                <div className="text-sm text-muted-foreground">Students</div>
              </Card>
              
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft">
                <GraduationCap className="w-6 h-6 text-secondary mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={school.stats.teachers} />+
                </div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </Card>
              
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft">
                <Award className="w-6 h-6 text-accent mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={school.stats.successRate} />%
                </div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>
              
              <Card className="p-4 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft">
                <Calendar className="w-6 h-6 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={school.stats.legacy} />+
                </div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={school.heroImage} 
                alt={school.name}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHero;
