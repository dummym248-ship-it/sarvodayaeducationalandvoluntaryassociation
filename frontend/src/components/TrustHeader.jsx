import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const TrustHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-card/95 backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left hidden sm:block">
              <h1 className="text-lg font-display font-bold text-foreground leading-tight">
                Dr. B. R. Ambedkar
              </h1>
              <p className="text-xs text-muted-foreground">Educational Trust</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {isHome ? (
              <>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('schools')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Our Schools
                </Button>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10"
                >
                  About Trust
                </Button>
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary hover:bg-primary/10"
                >
                  Contact
                </Button>
              </>
            ) : (
              <Button
                variant="ghost"
                className="text-foreground hover:text-primary hover:bg-primary/10"
                onClick={() => navigate('/')}
              >
                Back to Trust Home
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-2">
              {isHome ? (
                <>
                  <Button
                    variant="ghost"
                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                    onClick={() => {
                      document.getElementById('schools')?.scrollIntoView({ behavior: 'smooth' });
                      setMobileMenuOpen(false);
                    }}
                  >
                    Our Schools
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Trust
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Button>
                </>
              ) : (
                <Button
                  variant="ghost"
                  className="justify-start text-foreground hover:text-primary hover:bg-primary/10"
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                >
                  Back to Trust Home
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default TrustHeader;
