
export default function HomePageComponent({ width }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20" id="home">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dark"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Clean frame corners */}
              <div className="absolute -inset-4 opacity-40">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent"></div>
              </div>

              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary blur-lg opacity-20"></div>
              <img
                src={width < 768 ? "./myphoto-mobile.jpg" : "./myphoto.jpg"}
                alt="Soham Raut"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg object-cover border-2 border-accent/30"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left max-w-2xl">
            <p className="text-accent text-sm mb-4 tracking-[0.2em] font-mono">
              {'>'} hello world <span className="animate-pulse">_</span>
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
              <span className="text-white">Soham</span> <span className="text-accent">Raut</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 mb-2 font-mono">
              <span className="text-secondary">{'<'}</span>
              5th Year BS/MS in Computer Science
              <span className="text-secondary">{' />'}</span>
            </p>

            <p className="text-sm text-accent/70 mb-6">
              @ University of Washington • Seattle, WA
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Born in <span className="text-accent">India</span>, raised in <span className="text-accent">Oman</span>, now pushing commits in <span className="text-accent">Seattle</span>.
              By day, I turn segfaults into success. By night, I make D3 code less cryptic and more fun to learn. Currently a <span className="text-accent">TA for CSE 451</span> and a <span className="text-accent">researcher</span> at the
              <span className="text-accent"> UW Interactive Data Lab</span>!
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 w-full">
              <a
                href="mailto:sohamsraut97@gmail.com"
                target="_blank"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="https://github.com/sohamsraut"
                target="_blank"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/sohamsraut"
                target="_blank"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="./Soham_Raut_resume.pdf"
                target="_blank"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700/50 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                aria-label="Resume"
              >
                <svg className="w-6 h-6 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 w-full flex-wrap">
              <a href="#research" className="btn-cyber">
                <span className="relative z-10">View Research</span>
              </a>
              <a href="#contact" className="btn-outline border-secondary/50 hover:border-secondary hover:bg-secondary/10">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned relative to section */}
      <a href="#about" className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-gray-500 hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
