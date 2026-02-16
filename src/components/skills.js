export default function SkillSection() {
  // Icon components
  const icons = {
    code: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    layers: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    cog: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    cpu: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    wrench: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  };

  const skillCategories = [
    {
      icon: "code",
      title: "Languages",
      skills: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "SQL", "Bash", "R"]
    },
    {
      icon: "layers",
      title: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Express.js", "D3.js", "Terraform"]
    },
    {
      icon: "cog",
      title: "Developer Tools",
      skills: ["Linux/Ubuntu", "Git", "QEMU", "REST API", "AWS", "GCP", "Azure", "MongoDB"]
    },
    {
      icon: "cpu",
      title: "ML/AI Libraries",
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "HuggingFace", "pandas", "NumPy"]
    },
    {
      icon: "wrench",
      title: "Testing & Design",
      skills: ["JUnit", "JestJS", "Figma", "Arduino"]
    }
  ];

  return (
    <section id="skills" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// skills</p>
          <h2 className="section-title font-display">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            the weapons in my arsenal (all legally acquired, I promise)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="group p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent">{icons[category.icon]}</span>
                  <h3 className="text-lg font-display text-accent">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs px-3 py-1.5 bg-gray-800/80 border border-gray-700 text-gray-300 rounded hover:border-accent/50 hover:text-accent transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cyber corner */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Coursework Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-display mb-6 text-center text-gray-300 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-accent/50"></span>
            Relevant Coursework
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-secondary/50"></span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Machine Learning",
              "Data Visualization",
              "Computer Systems",
              "Database Systems",
              "Software Engineering",
              "Human-Computer Interaction",
              "Computer Networks"
            ].map((course, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-gray-900/50 border border-gray-700/50 text-gray-400 text-sm rounded hover:border-secondary/50 hover:text-secondary transition-all cursor-default"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}