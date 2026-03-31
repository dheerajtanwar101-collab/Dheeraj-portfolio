/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe, 
  Terminal,
  ChevronRight,
  GraduationCap,
  Layers
} from "lucide-react";

const PROJECTS = [
  {
    title: "AI Task Manager",
    description: "A smart task management system with natural language processing to categorize and prioritize tasks.",
    tags: ["React", "TypeScript", "Tailwind", "Gemini API"],
    link: "#",
    github: "#"
  },
  {
    title: "OSGU Campus Connect",
    description: "A community platform for students at Om Sterling Global University to share resources and events.",
    tags: ["Next.js", "Firebase", "Framer Motion"],
    link: "#",
    github: "#"
  },
  {
    title: "DevMetrics Dashboard",
    description: "Real-time visualization tool for tracking developer productivity and code quality metrics.",
    tags: ["D3.js", "React", "Node.js"],
    link: "#",
    github: "#"
  }
];

const SKILLS = [
  { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Firebase"] },
  { name: "Tools", items: ["Git", "Docker", "Vite", "Postman"] }
];

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-x-0 border-t-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold text-xl text-zinc-100 tracking-tighter">
            DHEERAJ<span className="text-blue-500">.</span>DEV
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
              Building digital <br />
              <span className="text-gradient">experiences that matter.</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Hi, I'm <span className="text-zinc-100 font-semibold">Dheeraj</span>. 
              A passionate Software Developer currently studying at 
              <span className="text-zinc-100 font-semibold"> Om Sterling Global University (OSGU)</span>. 
              I specialize in building high-performance web applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-zinc-100 text-zinc-900 font-semibold rounded-lg hover:bg-white transition-all flex items-center gap-2">
                View Projects <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-4 px-4">
                <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Github size={20} /></a>
                <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="p-2 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About / Education */}
        <section id="about" className="mb-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="text-zinc-400 leading-relaxed">
              My journey into software development started with a curiosity about how things work on the web. 
              Today, I'm focused on creating clean, efficient, and user-centric applications. 
              I love tackling complex problems and turning them into simple, beautiful interfaces.
            </p>
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-100">Education</h3>
                  <p className="text-sm text-zinc-400">B.Tech in Computer Science</p>
                  <p className="text-sm text-blue-400/80">Om Sterling Global University (OSGU)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-2">
              <Code2 className="text-blue-400 mb-2" size={32} />
              <span className="text-2xl font-bold text-zinc-100">20+</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Projects</span>
            </div>
            <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-2 mt-8">
              <Layers className="text-emerald-400 mb-2" size={32} />
              <span className="text-2xl font-bold text-zinc-100">10+</span>
              <span className="text-xs uppercase tracking-widest text-zinc-500">Technologies</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-32">
          <h2 className="text-3xl font-bold mb-12">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:border-zinc-700 transition-colors group">
                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                  {skill.name === "Frontend" && <Globe size={18} className="text-blue-400" />}
                  {skill.name === "Backend" && <Terminal size={18} className="text-emerald-400" />}
                  {skill.name === "Tools" && <Cpu size={18} className="text-purple-400" />}
                  {skill.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-sm rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Selected Works</h2>
              <p className="text-zinc-500">A collection of projects I've built recently.</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
              View all on GitHub <ExternalLink size={14} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-48 bg-zinc-800 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                    <div className="flex gap-3">
                      <a href={project.github} className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><Github size={20} /></a>
                      <a href={project.link} className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors"><ExternalLink size={20} /></a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-zinc-400 mb-6 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <div className="glass-card p-12 rounded-[2rem] text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-zinc-400 mb-10 text-lg">
              I'm currently looking for internships and junior developer roles. 
              If you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:dheerajtanwar101@gmail.com" 
                className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
              >
                Send an Email
              </a>
              <a 
                href="#" 
                className="w-full md:w-auto px-8 py-4 bg-zinc-800 text-zinc-100 font-bold rounded-xl hover:bg-zinc-700 transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-12 text-center text-sm text-zinc-500">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Dheeraj. Built with React & Tailwind CSS.</p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em]">Om Sterling Global University</p>
        </div>
      </footer>
    </div>
  );
}
