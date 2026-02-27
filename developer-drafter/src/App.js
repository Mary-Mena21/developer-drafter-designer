import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronRight, Code, PenTool, Cpu } from 'lucide-react';

// Project data based on your Wix site
const projects = [
  {
    id: 1,
    title: "3D Models",
    description: "Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png",
    tools: "Creo"
  },
  {
    id: 2,
    title: "Manufacturing Drawing",
    description: "Fully-dimensioned fabrication drawing, view is driven by the 3-D feature tree, the drawing, BOM, and annotations update instantly, no manual re-dimensioning.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/12526476bdb53d4428a5296ece24787b.png",
    tools: "Creo"
  },
  {
    id: 3,
    title: "Electric Plan",
    description: "Electrical sheet for a two-story residence: lighting layout, switching, and outlet locations on the ceiling grid.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/70b4b0060f4a434518d274b1192f04d0.png",
    tools: "Revit"
  },
  {
    id: 4,
    title: "Residential House",
    description: "Revit mass-model and sheet set for a 1,850 sq ft two-story residence: generated floor plans, elevations, and 3D perspective for client review.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/148cea8d64ec9e16b86c7e30e82ad061.png",
    tools: "Revit"
  },
  {
    id: 5,
    title: "Conceptual Massing",
    description: "Conceptual massing study in Revit includes volume, roof slopes, and window-to-wall ratios for client review.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/585afd0fd94b336936bca7c08fb90eb6.png",
    tools: "AutoCAD - Revit"
  },
  {
    id: 6,
    title: "3D Section",
    description: "Revit section cut revealing floor-to-ceiling heights and structural bay spacing.",
    image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/14cdfd192c8906e9264231beb6d1fdb0.png",
    tools: "Revit"
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
            Mariana<span className="text-emerald-400">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-emerald-400 ${activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-400'}`}
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-2 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300 text-sm uppercase tracking-widest">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-4">
            {['Home', 'About', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg uppercase tracking-widest text-gray-400 hover:text-emerald-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 animate-fade-in">
              Mariana<span className="text-emerald-400">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
              I build digital experiences that bridge technical precision with creative vision, where clean code meets thoughtful design.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-emerald-400 text-black font-semibold hover:bg-emerald-300 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
              >
                About Me
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute right-10 top-1/3 hidden lg:block opacity-20">
          <Code size={120} strokeWidth={0.5} />
        </div>
        <div className="absolute left-10 bottom-1/3 hidden lg:block opacity-20">
          <PenTool size={100} strokeWidth={0.5} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4">About</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">My name is Mariana</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With a foundation in architectural drafting, a certification in full-stack development, and hands-on experience in electrical assembly, I bring a unique multidisciplinary approach to every project.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I believe the best solutions emerge at the intersection of technical precision and creative intuition.
              </p>
              
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center p-4 border border-white/10 rounded-lg hover:border-emerald-400/50 transition-colors">
                  <Cpu className="mx-auto mb-2 text-emerald-400" size={24} />
                  <div className="text-sm text-gray-400">CAD/CAM</div>
                </div>
                <div className="text-center p-4 border border-white/10 rounded-lg hover:border-emerald-400/50 transition-colors">
                  <Code className="mx-auto mb-2 text-emerald-400" size={24} />
                  <div className="text-sm text-gray-400">Development</div>
                </div>
                <div className="text-center p-4 border border-white/10 rounded-lg hover:border-emerald-400/50 transition-colors">
                  <PenTool className="mx-auto mb-2 text-emerald-400" size={24} />
                  <div className="text-sm text-gray-400">Drafting</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-emerald-900/30 to-transparent rounded-2xl p-8 border border-white/10">
                <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center">
                    <div className="text-6xl font-bold text-emerald-400 mb-2">5+</div>
                    <div className="text-gray-400 uppercase tracking-widest text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Projects That Define<br />My Journey</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group relative bg-[#0f0f0f] rounded-xl overflow-hidden border border-white/5 hover:border-emerald-400/30 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#1a1a1a] relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-3 bg-emerald-400 text-black font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                      View Details <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                    <span className="text-xs uppercase tracking-wider text-emerald-400/80 bg-emerald-400/10 px-3 py-1 rounded-full">
                      {project.tools}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Lets work together</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="p-4 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-4 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-4 border border-white/10 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <a 
            href="mailto:contact@mariana.dev" 
            className="inline-block text-2xl md:text-3xl font-bold hover:text-emerald-400 transition-colors border-b-2 border-emerald-400 pb-2"
          >
            contact@mariana.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Mariana Mena. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;