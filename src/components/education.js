export default function EducationSection() {
  const education = [
    {
      school: "University of Washington",
      location: "Seattle, WA",
      degree: "M.S. in Computer Science (BS/MS Program)",
      period: "Fall 2025 - Dec. 2026 (Expected)",
      details: [
        "Paul G. Allen School of Computer Science and Engineering",
        "GPA: 3.95/4.0",
        "Admitted to the Allen School BS/MS program"
      ],
      image: "./allen.png",
      current: true
    },
    {
      school: "University of Washington",
      location: "Seattle, WA",
      degree: "B.S. in Computer Science (Departmental Honors)",
      period: "Sep. 2021 - Jun. 2025",
      details: [
        "Minor in Applied Mathematics",
        "GPA: 3.91/4.0, Cum Laude",
        "Honors Thesis: Generating & Evaluating Intent-Driven D3 Tutorials"
      ],
      image: "./allen.png",
      current: false
    },
    {
      school: "Indian School Muscat",
      location: "Muscat, Oman",
      degree: "High School Diploma - Science Stream (PCM with CS)",
      period: "2007 - 2021",
      details: [
        "Principal's Honors Award",
        "Merit Award - Top 5% scorer"
      ],
      image: "./ismoman.jpg",
      current: false
    }
  ];

  return (
    <section id="education" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// education</p>
          <h2 className="section-title font-display">
            Academic <span className="text-accent">Log</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            where I collected degrees and avoided sleep
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-secondary to-accent/20"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dark z-10">
                  <div className="absolute inset-0 border-2 border-accent rotate-45"></div>
                  {edu.current && (
                    <div className="absolute inset-0 border-2 border-accent rotate-45 animate-ping opacity-50"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={edu.image}
                          alt={edu.school}
                          className="w-16 h-16 rounded-lg object-cover border border-gray-700"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-display text-white group-hover:text-accent transition-colors">{edu.school}</h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-gray-500 text-sm">{edu.location}</p>
                            {edu.current && (
                              <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-secondary font-medium mb-2">{edu.degree}</p>
                      <p className="text-gray-500 text-sm mb-4">{edu.period}</p>

                      <ul className="space-y-1">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-accent mt-1">{'>'}</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cyber corner */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}