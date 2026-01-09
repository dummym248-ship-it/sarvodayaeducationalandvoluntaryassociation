import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, Users, FileText, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const SchoolAdmissionStaff = ({ school }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success('Admission inquiry submitted successfully!', {
      description: 'We will contact you within 2-3 business days.'
    });
    
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        studentName: '',
        parentName: '',
        email: '',
        phone: '',
        grade: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* School Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Our Staff
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Meet our dedicated team of educators and administrators
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
              School Leadership
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {school.leadership.map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-card shadow-soft hover:shadow-strong transition-all duration-300 border-border/50">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-bold text-foreground mb-1">
                        {leader.name}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {leader.role}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Principal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-medium max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-40 rounded-full overflow-hidden shadow-medium flex-shrink-0">
                  <img 
                    src={school.principal.image} 
                    alt={school.principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-display font-bold text-foreground mb-2">
                    {school.principal.name}
                  </h4>
                  <p className="text-primary font-semibold mb-4">
                    {school.principal.role}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-sm">{school.principal.email}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm">{school.principal.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Admission Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Admission Inquiry
            </h2>
            <div className="w-24 h-1 bg-gradient-warm mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Interested in enrolling your child? Fill out the form below
            </p>
          </div>

          <Card className="p-8 md:p-10 max-w-3xl mx-auto bg-card shadow-medium border-border/50">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name</Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Enter parent's name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Grade/Class Applying For</Label>
                  <Input
                    id="grade"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    placeholder="e.g., Grade 5, Class 1"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any questions or special requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Admission Inquiry
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <CheckCircle2 className="w-20 h-20 text-secondary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground">
                  Your admission inquiry has been received. We'll contact you soon.
                </p>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SchoolAdmissionStaff;
