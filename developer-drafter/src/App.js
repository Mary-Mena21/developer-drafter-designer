import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code2, PenTool, Cpu } from 'lucide-react';

// Portfolio Data
const portfolioData = {
  name: "Mariana",
  role: "Developer Drafter",
  tagline: "I build digital experiences that bridge technical precision with creative vision, where clean code meets thoughtful design.",
  about: "With a foundation in architectural drafting, a certification in full-stack development, and hands-on experience in electrical assembly, I bring a unique multidisciplinary approach to every project. I believe the best solutions emerge at the intersection of technical precision and creative intuition.",
  projects: [
    {
      id: 1,
      title: "3D Models",
      description: "Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.",
      tech: "Creo",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png",
      category: "Modeling"
    },
    {
      id: 2,
      title: "Manufacturing Drawing",
      description: "Fully-dimensioned fabrication drawing, view is driven by the 3-D feature tree, the drawing, BOM, and annotations update instantly, no manual re-dimensioning.",
      tech: "Creo",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/12526476bdb53d4428a5296ece24787b.png",
      category: "Documentation"
    },
    {
      id: 3,
      title: "Electric Plan",
      description: "Electrical sheet for a two-story residence: lighting layout, switching, and outlet locations on the ceiling grid.",
      tech: "Revit",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/70b4b0060f4a434518d274b1192f04d0.png",
      category: "Electrical"
    },
    {
      id: 4,
      title: "Residential House",
      description: "Revit mass-model and sheet set for a 1,850 sq ft two-story residence: generated floor plans, elevations, and 3D perspective for client review.",
      tech: "Revit",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/148cea8d64ec9e16b86c7e30e82ad061.png",
      category: "Architecture"
    },
    {
      id: 5,
      title: "Conceptual Massing",
      description: "Conceptual massing study in Revit includes volume, roof slopes, and window-to-wall ratios for client review.",
      tech: "AutoCAD - Revit",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/585afd0fd94b336936bca7c08fb90eb6.png",
      category: "Architecture"
    },
    {
      id: 6,
      title: "3D Section",
      description: "Revit section cut revealing floor-to-ceiling heights and structural bay spacing.",
      tech: "Revit",
      image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/14cdfd192c8906e9264231beb6d1fdb0.png",
      category: "Documentation"
    }
  ],
  skills: [
    { name: "Full-Stack Development", icon: <Code2 className="w-6 h-6" /> },
    { name: "Technical Drafting", icon: <PenTool className="w-6 h-6" /> },
    { name: "Electrical Assembly", icon: <Cpu className="w-6 h-6" /> }
  ],
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:mariana@example.com"
  }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-slate-900">{portfolioData.name}</span>
            <span className="text-rose-500">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-rose-500 ${activeSection === item.toLowerCase() ? 'text-rose-500' : 'text-slate-600'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-lg font-medium text-slate-600 hover:text-rose-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-slate-50 opacity-60" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium tracking-wide uppercase">
              {portfolioData.role}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Technical</span> Precision<br />
            with Creative Vision
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {portfolioData.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              Get in Touch
            </button>
          </div>
          
          <div className="mt-20 animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About <span className="text-rose-500">Me</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {portfolioData.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {portfolioData.skills.map((skill, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all group">
                    <div className="text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent" />
                <img 
                  src="https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/1ff9255e16d2529eea8f6016bfb56409.jpg" 
                  alt="Mariana - Developer Drafter"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-100 rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Projects That Define<br />My <span className="text-rose-500">Journey</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A curated selection of technical drawings, 3D models, and development projects showcasing multidisciplinary expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div 
                key={project.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white text-sm font-medium flex items-center gap-2">
                      View Project <ExternalLink size={16} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {project.tech}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Let's Build <span className="text-rose-500">Together</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and creative collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
              href={portfolioData.social.email}
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-medium hover:border-slate-900 hover:text-slate-900 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>

          <div className="pt-12 border-t border-slate-100">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;