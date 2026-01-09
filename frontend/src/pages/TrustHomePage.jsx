import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TrustHeader from '../components/TrustHeader';
import TrustFooter from '../components/TrustFooter';

const schoolsData = [
  {
    id: 'badhir',
    name: 'Dr. Babasaheb Ambedkar Nivasi Mukh Badhir Vidyalay',
    shortName: 'Badhir Vidyalay',
    description: 'Empowering rural education with quality teaching and traditional values',
    image: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763',
    stats: { students: '100+', teachers: '10+', legacy: '10+ Years' }
  },
  {
    id: 'prathamik',
    name: 'Shri Ambedkar Prathamik Vidyalay',
    shortName: 'Prathamik Vidyalay',
    description: 'Building strong foundations for young minds through innovative learning',
    image: 'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046',
    stats: { students: '80+', teachers: '8+', legacy: '8+ Years' }
  },
  {
    id: 'madhyamik',
    name: 'Shri Ambedkar Madhyamik Vidyalay',
    shortName: 'Madhyamik Vidyalay',
    description: 'Nurturing excellence in secondary education with modern facilities',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    stats: { students: '120+', teachers: '15+', legacy: '12+ Years' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  }
};

const TrustHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-hero">
      <TrustHeader />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                Empowering Rural Education
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
            >
              Dr. B. R. Ambedkar
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-warm">
                Educational Trust
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Building bright futures through quality education, traditional values, and modern learning methodologies. 
              Serving rural communities with excellence for over a decade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium"
                onClick={() => document.getElementById('schools')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Schools
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              >
                Learn More About Us
              </Button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { icon: Users, label: 'Students', value: 300, suffix: '+' },
              { icon: BookOpen, label: 'Teachers', value: 33, suffix: '+' },
              { icon: Award, label: 'Success Rate', value: 90, suffix: '%' },
              { icon: GraduationCap, label: 'Years Legacy', value: 12, suffix: '+' }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Schools Section */}
      <section id="schools" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Our Schools
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three institutions united by a common vision of excellence in education
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {schoolsData.map((school) => (
              <motion.div
                key={school.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="overflow-hidden h-full flex flex-col bg-card shadow-soft hover:shadow-strong transition-all duration-300 border-border/50">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={school.image} 
                      alt={school.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-primary-foreground mb-1">
                        {school.shortName}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      {school.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-border">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{school.stats.students}</div>
                        <div className="text-xs text-muted-foreground">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{school.stats.teachers}</div>
                        <div className="text-xs text-muted-foreground">Teachers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent">{school.stats.legacy}</div>
                        <div className="text-xs text-muted-foreground">Legacy</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto"
                      onClick={() => navigate(`/school/${school.id}`)}
                    >
                      Visit School
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <TrustFooter />
    </div>
  );
};

export default TrustHomePage;
