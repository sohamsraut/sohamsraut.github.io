import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const form = useRef();

  const toast_options = {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "dark"
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_qto009r', 'template_jeq48kk', form.current, '98FfggvBPgvIyklhK')
      .then((result) => {
        toast.success("Message transmitted successfully!", toast_options);
        form.current.reset();
      }, (error) => {
        toast.error("Transmission failed. Please retry!", toast_options);
      });
  };

  return (
    <section id="contact" className="section bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-accent text-sm mb-2 tracking-[0.2em] font-mono">// contact</p>
          <h2 className="section-title font-display">
            Ping <span className="text-accent">Me</span>
          </h2>
          <p className="section-subtitle mx-auto text-gray-400">
            Want to collab, debate movie rankings, or argue about tabs vs spaces? Hit me up! <span className="text-accent/60 text-xs">(please hire me :))</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent border border-accent/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">EMAIL</p>
                    <a href="mailto:sohamsraut97@gmail.com" className="text-white hover:text-accent transition-colors">
                      sohamsraut97@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-secondary/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary border border-secondary/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">LOCATION</p>
                    <p className="text-white">Seattle, WA <span className="text-gray-500">(UTC-7)</span></p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-accent/30 transition-all duration-300">
                <p className="text-gray-500 text-sm mb-4">SOCIAL LINKS</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/sohamsraut"
                    target="_blank"
                    className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/sohamsraut"
                    target="_blank"
                    className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-accent/50 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="p-6 md:p-8 bg-gray-900/30 border border-gray-800/50 rounded-2xl relative overflow-hidden">
              {/* Cyber corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary/30"></div>

              <div className="space-y-5 relative z-10">
                <div>
                  <label htmlFor="floating_name" className="block text-sm text-gray-500 mb-2">
                    {'>'} NAME
                  </label>
                  <input
                    type="text"
                    name="floating_name"
                    id="floating_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="floating_email" className="block text-sm text-gray-500 mb-2">
                    {'>'} EMAIL
                  </label>
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-500 mb-2">
                    {'>'} MESSAGE
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-cyber w-full">
                  <span className="relative z-10">Transmit Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
