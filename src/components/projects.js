export default function ProjectSection() {
  const featuredProjects = [
    {
      title: "Spot",
      tagline: "Multi-Cloud Cost & Resource Optimizer",
      description: "AI-driven infrastructure recommender that lowered deployment costs by 50%. Built a unified interface for AWS, GCP, and Azure that cut setup time by 70%.",
      image: "./spot_logo_transparent.png",
      date: "April 2024",
      event: "DubHacks NEXT Batch 3",
      skills: ["JavaScript", "Python", "Terraform", "OpenAI API"],
      github: "https://github.com/rituraj8503/SPOT",
      demo: null
    },
    {
      title: "LLM Grammar",
      tagline: "Cross-lingual LLM research",
      description: "Evaluated grammatical understanding in LLMs across languages by training/fine-tuning mT5 on 100K+ examples and running controlled translation experiments.",
      image: "./ml.png",
      date: "March 2024",
      event: "LLM Research Project",
      skills: ["Python", "PyTorch", "HuggingFace", "mT5"],
      github: null,
      demo: null
    },
    {
      title: "ThriftEats",
      tagline: "Budget-aware recipe recommender",
      description: "Saved student users up to 30% in grocery costs by matching ingredients to real-time coupon data. Won Most Commercially Viable at DubHacks '22.",
      image: "./thrifteats.png",
      date: "January 2023",
      event: "DubHacks '22 Winner",
      skills: ["React", "JavaScript", "Figma", "Spoonacular API"],
      github: "https://github.com/rsrika/DubHacks",
      demo: "https://devpost.com/software/thrifteats"
    }
  ];

  const otherProjects = [
    {
      title: "SMS Spam Filter",
      description: "ML model with 98% accuracy for spam classification",
      skills: ["Python", "Scikit-Learn", "NLP"],
      github: "https://github.com/sohamsraut/sms-spam-filter",
      demo: null
    },
    {
      title: "Phaser Game",
      description: "Interactive web-based game built with Phaser.js",
      skills: ["JavaScript", "Phaser.js"],
      github: "https://github.com/sohamsraut/phaser-game",
      demo: "https://sohamsraut.github.io/phaser-game"
    },
    {
      title: "Tic-Tac-Toe Web",
      description: "Classic game with clean, interactive interface",
      skills: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/sohamsraut/tic-tac-toe-webapp",
      demo: "https://sohamsraut.github.io/tic-tac-toe-webapp"
    }
  ];

  return (
    <section id="projects" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// projects</p>
          <h2 className="section-title font-display">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            side projects that made it out of the dungeons (my greatest hits)
          </p>
        </div>

        {/* Featured Projects - Image-First with Hover Reveal */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 md:h-96 cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Full Background Image */}
              <div className="absolute inset-0 transition-all duration-700 ease-out">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Gradient overlay - shifts on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-dark/20 to-transparent transition-all duration-500 group-hover:from-dark/95 group-hover:via-dark/85 group-hover:to-dark/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent group-hover:from-dark/90" />
              </div>

              {/* Title & Quick Info - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <span className="text-accent text-sm font-medium tracking-wide mb-2 block">{project.event}</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-accent-secondary text-lg mt-1">{project.tagline}</p>
              </div>

              {/* Full Content - Revealed on Hover */}
              <div
                className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between opacity-0 translate-x-[-20px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-sm font-medium tracking-wide">{project.tagline}</span>
                    <span className="text-gray-500 text-xs">{project.event}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded-lg backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors font-medium"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-secondary transition-colors font-medium"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative border on hover */}
              <div className="absolute inset-0 border-2 border-accent/0 rounded-2xl transition-all duration-500 group-hover:border-accent/40 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-display text-gray-300 mb-6 flex items-center gap-3">
            <span className="text-accent">{'>'}</span>
            Other Noteworthy Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group p-5 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 hover:bg-gray-900/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{project.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs text-gray-500">{skill}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-accent">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-secondary">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More */}
        <div className="text-center">
          <a
            href="/projects"
            className="btn-cyber inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
}