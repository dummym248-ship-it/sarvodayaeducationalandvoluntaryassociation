import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import SchoolHeader from '../components/SchoolHeader';
import SchoolHero from '../components/SchoolHero';
import SchoolAbout from '../components/SchoolAbout';
import SchoolFacilities from '../components/SchoolFacilities';
import SchoolAdmissionStaff from '../components/SchoolAdmissionStaff';
import SchoolGallery from '../components/SchoolGallery';
import TrustFooter from '../components/TrustFooter';

const schoolsInfo = {
  badhir: {
    name: 'Dr. Babasaheb Ambedkar Nivasi Mukh Badhir Vidyalay',
    shortName: 'Badhir Vidyalay',
    tagline: 'Empowering Rural Education',
    heroImage: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763',
    description: 'Founded with the dream of bringing quality education to remote areas, Dr. Babasaheb Ambedkar Nivasi Mukh Badhir Vidyalay has been a beacon of hope for countless families.',
    vision: 'To provide world-class education to deaf and rural children, ensuring no child is left behind due to geographical or economic constraints.',
    mission: 'Nurturing young minds with quality education, traditional values, and modern skills to create responsible global citizens.',
    values: 'Excellence, integrity, compassion, and innovation form the cornerstone of our educational philosophy and daily practice.',
    stats: {
      students: 100,
      teachers: 10,
      successRate: 90,
      legacy: 10
    },
    principal: {
      name: 'Mr. Vivekanand Bhagat',
      role: 'School Principal',
      email: 'Bhagatvivek358@gmail.com',
      phone: '+91 96589 74440',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
    },
    leadership: [
      {
        name: 'Mrs. Jayshree Gawai',
        role: 'President Of School Trust',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      {
        name: 'Mr. Bhimrao Bhagat',
        role: 'Secretary Of School Trust',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      }
    ],
    facilities: [
      {
        name: 'Smart Classrooms',
        description: 'Digital boards and multimedia learning tools',
        icon: 'BookOpen'
      },
      {
        name: 'Green Campus',
        description: 'Eco-friendly environment with open spaces',
        icon: 'TreePine'
      },
      {
        name: 'Sports Facilities',
        description: 'Playground and indoor games for physical development',
        icon: 'Trophy'
      },
      {
        name: 'Library',
        description: 'Well-stocked library with diverse collections',
        icon: 'Library'
      },
      {
        name: 'Healthcare',
        description: 'Regular health checkups and first-aid facilities',
        icon: 'Heart'
      },
      {
        name: 'Arts & Music',
        description: 'Dedicated spaces for creative expression',
        icon: 'Music'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1590579491624-f98f36d4c763',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046',
      'https://images.pexels.com/photos/5553034/pexels-photo-5553034.jpeg',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211'
    ]
  },
  prathamik: {
    name: 'Shri Ambedkar Prathamik Vidyalay',
    shortName: 'Prathamik Vidyalay',
    tagline: 'Building Strong Foundations',
    heroImage: 'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046',
    description: 'Shri Ambedkar Prathamik Vidyalay focuses on elementary education, providing a nurturing environment for young learners to develop strong foundations in academics and character.',
    vision: 'To create confident, capable learners who are equipped with strong fundamentals and a love for learning.',
    mission: 'Building strong foundations through innovative teaching methods, personalized attention, and holistic development.',
    values: 'Curiosity, creativity, collaboration, and character development guide every aspect of our primary education.',
    stats: {
      students: 80,
      teachers: 8,
      successRate: 88,
      legacy: 8
    },
    principal: {
      name: 'Mrs. Anjali Sharma',
      role: 'School Principal',
      email: 'anjali.sharma@prathamik.edu.in',
      phone: '+91 98765 43211',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
    },
    leadership: [
      {
        name: 'Mrs. Jayshree Gawai',
        role: 'President Of School Trust',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      {
        name: 'Mr. Bhimrao Bhagat',
        role: 'Secretary Of School Trust',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      }
    ],
    facilities: [
      {
        name: 'Play-Based Learning',
        description: 'Interactive and engaging learning environment',
        icon: 'BookOpen'
      },
      {
        name: 'Safe Campus',
        description: 'Child-safe infrastructure with constant supervision',
        icon: 'Shield'
      },
      {
        name: 'Activity Rooms',
        description: 'Dedicated spaces for art, craft, and play',
        icon: 'Palette'
      },
      {
        name: 'Kids Library',
        description: 'Age-appropriate books and reading programs',
        icon: 'Library'
      },
      {
        name: 'Health & Nutrition',
        description: 'Mid-day meals and health monitoring',
        icon: 'Apple'
      },
      {
        name: 'Outdoor Play',
        description: 'Safe playground for physical activities',
        icon: 'TreePine'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046',
      'https://images.pexels.com/photos/35131382/pexels-photo-35131382.jpeg',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      'https://images.pexels.com/photos/10353017/pexels-photo-10353017.jpeg',
      'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54',
      'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg'
    ]
  },
  madhyamik: {
    name: 'Shri Ambedkar Madhyamik Vidyalay',
    shortName: 'Madhyamik Vidyalay',
    tagline: 'Nurturing Excellence',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
    description: 'Shri Ambedkar Madhyamik Vidyalay offers comprehensive secondary education, preparing students for higher studies and future careers with a focus on academic excellence and holistic development.',
    vision: 'To develop well-rounded individuals who excel academically and contribute positively to society.',
    mission: 'Delivering excellence in secondary education through rigorous academics, modern facilities, and values-based learning.',
    values: 'Academic rigor, critical thinking, ethical leadership, and social responsibility define our approach to secondary education.',
    stats: {
      students: 120,
      teachers: 15,
      successRate: 92,
      legacy: 12
    },
    principal: {
      name: 'Dr. Rajesh Kumar',
      role: 'School Principal',
      email: 'rajesh.kumar@madhyamik.edu.in',
      phone: '+91 98765 43212',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
    },
    leadership: [
      {
        name: 'Mrs. Jayshree Gawai',
        role: 'President Of School Trust',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      {
        name: 'Mr. Bhimrao Bhagat',
        role: 'Secretary Of School Trust',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      }
    ],
    facilities: [
      {
        name: 'Science Labs',
        description: 'Well-equipped physics, chemistry, and biology labs',
        icon: 'Microscope'
      },
      {
        name: 'Computer Lab',
        description: 'Modern computing facilities with internet access',
        icon: 'Monitor'
      },
      {
        name: 'Sports Complex',
        description: 'Indoor and outdoor sports facilities',
        icon: 'Trophy'
      },
      {
        name: 'Library & Research',
        description: 'Extensive collection and digital resources',
        icon: 'Library'
      },
      {
        name: 'Career Guidance',
        description: 'Counseling and career development support',
        icon: 'Briefcase'
      },
      {
        name: 'Auditorium',
        description: 'Modern facility for events and assemblies',
        icon: 'Building'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      'https://images.unsplash.com/photo-1763328446274-c5ae7c07d403',
      'https://images.pexels.com/photos/35131393/pexels-photo-35131393.jpeg',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570'
    ]
  }
};

const SchoolPage = () => {
  const { schoolId } = useParams();
  const [activeSection, setActiveSection] = useState('home');
  const school = schoolsInfo[schoolId];

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-foreground">School not found</h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <SchoolHeader 
        schoolName={school.shortName}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {activeSection === 'home' && <SchoolHero school={school} />}
      {activeSection === 'about' && <SchoolAbout school={school} />}
      {activeSection === 'facilities' && <SchoolFacilities school={school} />}
      {activeSection === 'admission' && <SchoolAdmissionStaff school={school} />}
      
      {activeSection === 'home' && <SchoolGallery images={school.galleryImages} />}
      
      <TrustFooter />
    </motion.div>
  );
};

export default SchoolPage;
