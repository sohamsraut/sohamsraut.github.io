import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      // Default to dark mode
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('light', !newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Research", href: "#research" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark/95 backdrop-blur-xl border-b border-accent/10 shadow-lg shadow-accent/5' 
        : 'bg-dark'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="relative group">
            <span className="text-xl font-display font-bold tracking-tight">
              <span className="text-accent">SR</span>
              <span className="text-gray-400">.</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative px-4 py-2 text-sm text-gray-400 hover:text-accent transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 rounded-lg transition-all duration-300"></span>
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-accent group-hover:w-3/4 group-hover:left-[12.5%] transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="./Soham_Raut_resume.pdf"
              target="_blank"
              className="ml-4 px-4 py-2 text-sm font-medium text-accent border border-accent/50 rounded-lg hover:bg-accent/10 hover:border-accent transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-3 p-2 rounded-lg border border-accent/30 hover:border-accent/60 hover:bg-accent/10 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-600 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-accent transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-2 pt-4 border-t border-accent/10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-gray-400 hover:text-accent hover:bg-accent/10 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a
              href="./Soham_Raut_resume.pdf"
              target="_blank"
              className="mx-4 mt-2 px-4 py-3 text-center text-accent border border-accent/50 rounded-lg hover:bg-accent/10 transition-all"
            >
              Resume
            </a>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="mx-4 mt-2 px-4 py-3 flex items-center justify-center gap-2 text-gray-400 border border-accent/30 rounded-lg hover:bg-accent/10 hover:text-accent transition-all"
            >
              {isDark ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}