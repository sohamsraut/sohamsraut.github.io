export default function ExperienceSection() {
  const experiences = [
    {
      company: "Paul G. Allen School of Computer Science",
      role: "Teaching Assistant",
      location: "Seattle, WA",
      period: "January 2026 - Present",
      description: "Teaching OS internals to 100+ students and leading 30-person sections. Helping future devs understand why their kernel panics... and how to fix them.",
      skills: ["Operating Systems", "C", "Teaching", "Debugging"],
      image: "./allen.png",
      current: true
    },
    {
      company: "UW Interactive Data Lab",
      role: "Research Assistant",
      location: "Seattle, WA",
      period: "January 2023 - Present",
      description: "Built pipelines to turn complex D3.js visualizations into modular code. Also wrote an honors thesis on auto-generating tutorials that cut learning time by 60%.",
      skills: ["D3.js", "JavaScript", "Python", "JestJS"],
      image: "./allen.png",
      current: true
    },
    {
      company: "Candent Technologies Pvt. Ltd.",
      role: "Software Engineer Intern",
      location: "Pune, India",
      period: "July 2023 - September 2023",
      description: "Increased candidate evaluation accuracy by 35% with a weighted ranking algorithm. Also built a scheduling platform that cut coordination time by 25%.",
      skills: ["Next.js", "MongoDB", "Python", "Agile"],
      image: "./candent.jpg",
      current: false
    }
  ];

  return (
    <section id="experience" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// experience</p>
          <h2 className="section-title font-display">
            Work <span className="text-accent">History</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            places that trusted me with their codebase (trust me with more, please?)
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border border-gray-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-display text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-secondary">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                      <p className="text-gray-600 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-gray-800/80 border border-gray-700 text-gray-300 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cyber corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}