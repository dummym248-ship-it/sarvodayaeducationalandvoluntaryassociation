import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

const TrustFooter = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-display font-bold text-lg">Dr. B. R. Ambedkar Trust</h3>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Dedicated to providing quality education to rural communities, fostering excellence, and building bright futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#schools" className="hover:text-primary transition-colors">Our Schools</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Schools */}
          <div>
            <h4 className="font-semibold mb-4">Our Schools</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="/school/badhir" className="hover:text-primary transition-colors">Badhir Vidyalay</a></li>
              <li><a href="/school/prathamik" className="hover:text-primary transition-colors">Prathamik Vidyalay</a></li>
              <li><a href="/school/madhyamik" className="hover:text-primary transition-colors">Madhyamik Vidyalay</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@ambedkartrust.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
            <p>&copy; 2024 Dr. B. R. Ambedkar Educational Trust. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TrustFooter;
