export default function AboutSection() {
  // Icon components for cleaner look
  const icons = {
    globe: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    beaker: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    academic: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    terminal: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    code: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    language: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
      </svg>
    ),
  };

  const highlights = [
    {
      icon: "globe",
      title: "Mr. Worldwide",
      subtitle: "(Pitbull-inspired)",
      description: "Born in India, grew up in Oman, now in Seattle. My passport has more stamps than my code has bugs... (hopefully)"
    },
    {
      icon: "beaker",
      title: "Lab Rat",
      subtitle: "(the cool kind i hope)",
      description: "Research at UW Interactive Data Lab. Breaking and simplifying D3 visualizations so others don't have to."
    },
    {
      icon: "academic",
      title: "Academic Weapon",
      subtitle: "(locked in)",
      description: "BS/MS, GPA: 3.95/4.0, Cum Laude w/ Honors Thesis. Consistency is key, just ask Max Verstappen."
    },
    {
      icon: "terminal",
      title: "The OS Whisperer",
      subtitle: "(kernel debugger by day)",
      description: "TA for OS. Helping 100+ students with why their kernel panics. Debugging is my second language."
    },
    {
      icon: "code",
      title: "Hackerman",
      subtitle: "(legally, i promise)",
      description: "Multiple DubHacks wins. Built apps so viable they gave us awards. (still waiting on that VC funding tho)"
    },
    {
      icon: "language",
      title: "Multilingual Maven",
      subtitle: "(can order food in 5 languages)",
      description: "English, Marathi, Hindi, French, and Italian. Can say 'segmentation fault' in 4 languages. "
    }
  ];

  return (
    <section id="about" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// whoami</p>
          <h2 className="section-title font-display">
            Get to Know <span className="text-accent">Me</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400 max-w-2xl">
            part researcher, part TA, full-time optimizer. Fueled by coffee, gaming, and way too many movies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card p-6 group relative overflow-hidden border border-gray-800/50 hover:border-accent/30 transition-all duration-300 rounded-2xl"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-accent mb-4">{icons[item.icon]}</div>
                <h3 className="text-xl font-display text-white mb-1 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm mb-3">{item.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Cyber corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

