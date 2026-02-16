export default function ResearchSection() {
  const research = [
    {
      title: "D3.js Visualization Decomposition & Tutorial Generation",
      lab: "UW Interactive Data Lab",
      advisor: "Prof. Leilani Battle",
      period: "January 2023 - Present",
      description: "Built pipelines to convert complex D3.js visualizations into reusable modular components with 90% code coverage. Honors thesis: developed a framework to auto-generate intent-driven tutorials that cut learning time by 60% and improved D3 adoption by 40%.",
      tags: ["Data Visualization", "D3.js", "JavaScript", "Python", "JestJS"],
      status: "Ongoing"
    }
  ];

  const publications = [];

  return (
    <section id="research" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// research</p>
          <h2 className="section-title font-display">
            Research <span className="text-accent">Lab</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            where I break things for science.
          </p>
        </div>

        {/* Research Areas - Glowing Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Data Visualization", "Machine Learning", "Human-Computer Interaction", "Software Engineering", "Compilers"].map((area, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded bg-gray-900/80 border border-accent/30 text-accent text-sm hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-default"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Current Research */}
        <div className="mb-16">
          <h3 className="text-xl font-display mb-8 flex items-center gap-3 text-gray-300">
            <span className="text-accent">{'>'}</span>
            Current Research
            <span className="flex-1 h-[1px] bg-gradient-to-r from-accent/30 to-transparent"></span>
          </h3>

          <div className="space-y-6">
            {research.map((project, index) => (
              <div key={index} className="group p-8 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300 relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-display text-white mb-1 group-hover:text-accent transition-colors">{project.title}</h4>
                      <p className="text-secondary">{project.lab}</p>
                      <p className="text-gray-500 text-sm">Advised by {project.advisor}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{project.period}</span>
                      <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs rounded flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-gray-800/80 border border-gray-700 text-gray-300 rounded">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Cyber corners */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications placeholder */}
        {publications.length === 0 && (
          <div className="text-center p-8 border border-dashed border-gray-700 rounded-2xl">
            <p className="text-gray-500 text-sm">
              <span className="text-accent">{'>'}</span> Publications coming soon
              <span className="animate-pulse"> _</span>
            </p>
            <p className="text-gray-500 text-sm mt-2">We are checking...</p>
          </div>
        )}
      </div>
    </section>
  );
}
