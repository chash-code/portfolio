import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Chash Panchal
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Full Stack Web Developer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Building secure, responsive web applications with modern technologies
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-slate-800 px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400">About Me</h2>
          <div className="bg-slate-900/50 p-8 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Professional Summary</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Analytical Full Stack Web Developer skilled in building secure, responsive web applications with clean, 
              maintainable code. Strong in scalable architecture, structured project design, and modern web technologies. 
              Detail-oriented, collaborative, and focused on delivering reliable, user-centric solutions.
            </p>
            
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 mt-8">Education</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-xl font-semibold text-gray-200">Masai School</p>
                <p className="text-gray-400">Full Stack Web Development</p>
                <p className="text-sm text-gray-500">10/2025 - 02/2026 | Bengaluru (Remote)</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="text-xl font-semibold text-gray-200">DAVV, Indore</p>
                <p className="text-gray-400">Bachelor of Arts in Journalism and Mass Communication</p>
                <p className="text-sm text-gray-500">06/2022 - 06/2026 | Indore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-400">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Languages */}
            <div className="bg-slate-800 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'SQL'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-900 text-gray-300 rounded-full text-sm border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-slate-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Firebase', 'Supabase'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-900 text-gray-300 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-slate-800 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'GitHub', 'VS Code', 'Postman', 'Firenet'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-900 text-gray-300 rounded-full text-sm border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-slate-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/50 transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Express'].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-900 text-gray-300 rounded-full text-sm border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-slate-800 px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Budget Buddy Project */}
            <div className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-cyan-500/20 shadow-xl">
              <div className="h-48 bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">Budget Buddy</h3>
                <p className="text-sm text-cyan-400 mb-3">Student Finance Tracker</p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A comprehensive budget tracking application designed for students to manage their finances efficiently. 
                  Track expenses, set budgets, visualize spending patterns, and achieve financial goals with an intuitive interface.
                </p>
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs border border-cyan-500/30">React</span>
                    <span className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs border border-cyan-500/30">JavaScript</span>
                    <span className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs border border-cyan-500/30">Firebase</span>
                    <span className="px-2 py-1 bg-slate-800 text-cyan-400 rounded text-xs border border-cyan-500/30">CSS</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://chash-code.github.io/student-finance-tracker/" className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all">
                    Live Demo
                  </a>
                  <a href="https://github.com/chash-code/student-finance-tracker.git" className="flex-1 text-center px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-purple-500/20 shadow-xl opacity-75">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-400">More Projects Coming Soon</h3>
                <p className="text-gray-500 mb-4">
                  Currently working on exciting new projects. Stay tuned for updates!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-20">
        <div className="max-w-3xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-purple-400">Get In Touch</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <p className="text-gray-300 text-center text-lg mb-8">
              I'm currently looking for new opportunities and exciting projects to work on. 
              Whether you have a question, want to discuss a project, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            {/* Contact Information */}
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:panchalchash@gmail.com" className="hover:text-cyan-400 transition-colors">
                  panchalchash@gmail.com
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com/chash-code" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  GitHub Profile
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <a href="https://linkedin.com/in/chashpanchal" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <a href="mailto:panchalchash@gmail.com" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 font-semibold">
                Say Hello
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-500">
            <p>© 2026 Chash Panchal. Built with React & Tailwind CSS</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
