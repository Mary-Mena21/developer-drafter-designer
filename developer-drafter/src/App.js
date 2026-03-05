import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code2,
  PenTool,
  Palette,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';

// Portfolio Data with all 15 projects
const portfolioData = {
  name: 'Mariana',
  role: 'Developer Drafter',
  tagline:
    'I build digital experiences that bridge technical precision with creative vision, where clean code meets thoughtful design.',
  about:
    'With a foundation in architectural drafting, a certification in full-stack development, and hands-on experience in electrical assembly, I bring a unique multidisciplinary approach to every project. I believe the best solutions emerge at the intersection of technical precision and creative intuition.',
  projects: [
    {
      id: 1,
      title: '3D Models',
      description:
        'Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.',
      tech: 'Creo',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png',
      category: 'Modeling',
      link: '#',
    },
    {
      id: 2,
      title: 'Manufacturing Drawing',
      description:
        'Fully-dimensioned fabrication drawing, view is driven by the 3-D feature tree, the drawing, BOM, and annotations update instantly, no manual re-dimensioning.',
      tech: 'Creo',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/12526476bdb53d4428a5296ece24787b.png',
      category: 'Documentation',
      link: '#',
    },
    {
      id: 3,
      title: 'Electric Plan',
      description:
        'Electrical sheet for a two-story residence: lighting layout, switching, and outlet locations on the ceiling grid.',
      tech: 'Revit',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/70b4b0060f4a434518d274b1192f04d0.png',
      category: 'Electrical',
      link: '#',
    },
    {
      id: 4,
      title: 'Residential House',
      description:
        'Revit mass-model and sheet set for a 1,850 sq ft two-story residence: generated floor plans, elevations, and 3D perspective for client review.',
      tech: 'Revit',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/148cea8d64ec9e16b86c7e30e82ad061.png',
      category: 'Architecture',
      link: '#',
    },
    {
      id: 5,
      title: 'Conceptual Massing',
      description:
        'Conceptual massing study in Revit includes volume, roof slopes, and window-to-wall ratios for client review.',
      tech: 'AutoCAD - Revit',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/585afd0fd94b336936bca7c08fb90eb6.png',
      category: 'Architecture',
      link: '#',
    },
    {
      id: 6,
      title: '3D Section',
      description:
        'Revit section cut revealing floor-to-ceiling heights and structural bay spacing.',
      tech: 'Revit',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/14cdfd192c8906e9264231beb6d1fdb0.png',
      category: 'Documentation',
      link: '#',
    },
    {
      id: 7,
      title: '3D External view',
      description:
        'Final design visualization exported from Revit—shaded + edged view used for client presentation.',
      tech: 'Revit',
      image:
        'https://static.wixstatic.com/media/0b93a7_63b628db0dca43d7adb112ad062616e5~mv2.png',
      category: 'Zoning Render',
      link: '#',
    },
    {
      id: 8,
      title: 'Deck-Shade',
      description:
        'parametric pergola slats, sun-angle driven, sent to AutoCAD for site layout.',
      tech: 'Autocad - Revit',
      image:
        'https://static.wixstatic.com/media/0b93a7_4e28e0c54ffa4c07b6adc0793ad064f0~mv2.png',
      category: 'Design',
      link: '#',
    },
    {
      id: 9,
      title: 'Concrete Model',
      description:
        'Revit cast-in-place concrete model for ocean-front residence—rebar clash check included',
      tech: 'Autocad - Revit',
      image:
        'https://static.wixstatic.com/media/0b93a7_4a99820183c24acb8623f4fcc912bafa~mv2.png',
      category: 'Structural',
      link: '#',
    },
    {
      id: 10,
      title: 'structural-steel frame',
      description:
        'structural-steel frame using A500 HSS members—moment connections, grids, and elevations exported to AutoCAD for shop-bolt list.',
      tech: 'Autocad - Revit',
      image:
        'https://static.wixstatic.com/media/0b93a7_fd047365a15d4bd58a9907d04095abb7~mv2.png',
      category: 'Structural',
      link: '#',
    },
    {
      id: 11,
      title: 'Exterior Elevations',
      description:
        '2D Views: Revit exterior elevations—North (Back) & South (Front)—for 3-storey house.',
      tech: 'Revit',
      image:
        'https://static.wixstatic.com/media/0b93a7_6af38bf154ba4b5aac484b31251b4840~mv2.png',
      category: 'Elevations',
      link: '#',
    },
    {
      id: 12,
      title: 'Magazine Design',
      description:
        'Youth Magazine Design – 24-page teen-focused issue created in Photoshop + InDesign.',
      tech: 'Photoshop - Illustrator',
      image:
        'https://static.wixstatic.com/media/0b93a7_30223e05ced34793814903591293c6ef~mv2.png',
      category: 'Graphic Design',
      link: '#',
    },
    {
      id: 13,
      title: 'Church website',
      description:
        'St. Philopateer Church website – custom Wix build: responsive layout, parish event calendar, online donation portal, and bilingual EN/AR content managed through Wix.',
      tech: 'Wix',
      image:
        'https://static.wixstatic.com/media/0b93a7_c03ee1e7ee6f41ebb09b2e2d013cc8db~mv2.png',
      category: 'Web Design',
      link: '#',
    },
    {
      id: 14,
      title: 'SAT',
      description:
        'React attendance tracker with Chart.js visualizations, responsive Bootstrap UI, and JSON-server backend.',
      tech: 'Frontend',
      image:
        'https://static.wixstatic.com/media/0b93a7_c4278c0c460c4a3c98d0f202c95be8bf~mv2.jpg',
      category: 'Frontend Dashboard',
      link: 'https://github.com/Mary-Mena21',
    },
    {
      id: 15,
      title: 'RX-Care',
      description:
        'Secure prescription management platform with React frontend, .NET backend, JWT authentication, and role-based access control.',
      tech: 'React - .Net - SQL Server',
      image:
        'https://static.wixstatic.com/media/0b93a7_84530534e9644c5ab8b56aa29ef7d177~mv2.png',
      category: 'Full-Stack App',
      link: 'https://github.com/Mary-Mena21',
    },
  ],
  skills: [
    {
      name: 'Full-Stack Development',
      icon: <Code2 className="w-6 h-6" />,
      details: 'React, C#, .NET, SQL Server, TypeScript',
    },
    {
      name: 'Technical Drafting',
      icon: <PenTool className="w-6 h-6" />,
      details: 'Revit, AutoCAD, Creo, BIM 360',
    },
    {
      name: 'Graphic Design',
      icon: <Palette className="w-6 h-6" />,
      details: 'Photoshop, Illustrator, InDesign, Figma',
    },
  ],
  social: {
    github: 'https://github.com/Mary-Mena21',
    linkedin: 'https://www.linkedin.com/in/mariana-mena-dev/',
    email: 'mailto:marianashokry@yahoo.com',
  },
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);

      // Determine active section
      const sections = [
        'home',
        'about',
        'projects',
        'skills',
        'experience',
        'contact',
      ];
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
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    'Home',
    'About',
    'Projects',
    'Skills',
    'Experience',
    'Contact',
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation - Black bar with white text */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo - clickable to home */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold tracking-tight hover:text-[#e07a5f] transition-colors"
            aria-label="Go to home"
          >
            Mariana<span className="text-[#e07a5f]">.</span>
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm transition-colors relative ${
                  activeSection === item.toLowerCase()
                    ? 'text-white font-medium'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#e07a5f]" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-[#e07a5f] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left text-lg font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-[#e07a5f]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex gap-6 pt-4 border-t border-white/10">
                <a
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  href={portfolioData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-2">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-black">
              Mariana<span className="text-[#e07a5f]">.</span>
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Large bold text */}
            <div className="order-2 md:order-1">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
                <span className="text-black block">Developer</span>
                <span className="text-black block">
                  Drafter <span className="text-[#e07a5f]">&</span>
                </span>
                <span className="text-[#e07a5f] block">Designer</span>
              </h2>
            </div>

            {/* Right: 3D Wireframe Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="https://static.wixstatic.com/media/0b93a7_b6b27715138e453aadc3516f536031ef~mv2.jpg"
                alt="3D architectural wireframe model showing building structure"
                className="w-full max-w-md lg:max-w-lg object-contain"
                width="600"
                height="600"
                loading="eager"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-8 max-w-3xl order-3">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
              I build digital experiences that bridge technical precision with
              creative vision, where clean code meets thoughtful design.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 order-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-[#e07a5f] text-white font-medium rounded hover:bg-[#c96a52] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-offset-2"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="bg-white py-8 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="rounded-2xl overflow-hidden shadow-xl">
      {/* Mobile: Image on top, Desktop: Image on right */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Image - First on mobile, last on desktop */}
        <div className="h-64 md:h-auto md:col-start-3 bg-gray-100">
          <img
            src="https://static.wixstatic.com/media/0b93a7_45fd15f0786840d8afcdc961579ff9cb~mv2.jpg"
            alt="Mariana working on technical blueprints"
            className="w-full h-full object-cover"
            width="600"
            height="800"
            loading="lazy"
          />
        </div>

        {/* Content - Black background */}
        <div className="bg-black text-white p-8 md:p-12 lg:p-16 md:col-span-2 md:col-start-1 md:row-start-1 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">About</h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:mb-8 text-[#e07a5f]">
            My name is Mariana
          </h3>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl">
            With a foundation in architectural drafting, a certification in
            full-stack development, and hands-on experience in electrical
            assembly, I bring a unique multidisciplinary approach to every
            project. I believe the best solutions emerge at the intersection
            of technical precision and creative intuition.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#e07a5f] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#e07a5f] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a
              href={portfolioData.social.email}
              className="text-white hover:text-[#e07a5f] transition-colors"
              aria-label="Send Email"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white pl-0 md:pl-10">
            Projects That Define
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-[#e07a5f] pl-0 md:pl-10">
            My Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#fafafa] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#e07a5f] focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-offset-2"
              >
                {/* Category Tag */}
                <div className="px-4 py-3 flex justify-between items-center">
                  <span className="inline-block bg-[#e07a5f] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200 mx-4 mb-4 rounded-lg border border-gray-200">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} project`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="400"
                    height="300"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />
                </div>

                {/* Content */}
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <h4 className="text-base font-bold text-black mb-1 group-hover:text-[#e07a5f] transition-colors">
                    {project.title}
                  </h4>
                  <span className="inline-block bg-gray-200 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                    {project.tech}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Technical Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Combining software development expertise with technical drafting
              proficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 md:p-8 border border-white/20 rounded-lg hover:border-[#e07a5f] hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="text-[#e07a5f] mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  {skill.details}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Tech Stack */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-lg font-semibold mb-6 text-center text-gray-300">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React',
                'TypeScript',
                'C#',
                '.NET',
                'SQL Server',
                'Revit',
                'AutoCAD',
                'Creo',
                'Git',
                'Figma',
                'Photoshop',
                'Illustrator',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm hover:bg-[#e07a5f] hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e07a5f] mb-2">
            Offerings
          </h2>

          {/* Subheader row */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-gray-300 pb-8">
            <div>
              <h3 className="text-lg font-medium text-black">What I Provide</h3>
            </div>
            <div className="md:col-span-2">
              <p className="text-gray-600 max-w-2xl">
                With a focus on innovation, I offer services that elevate your
                projects. From detailed design to robust development, every step
                is tailored to achieve excellence.
              </p>
            </div>
          </div>

          {/* Service 1 - Web Development */}
          <div className="grid md:grid-cols-3 gap-8 py-8 md:py-12 border-b border-gray-300 group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-[#e07a5f] transition-colors">
                Web
                <br />
                Development
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                I specialize in creating responsive and dynamic websites that
                engage users and adapt seamlessly across devices. From React
                frontends to .NET backends.
              </p>
            </div>
          </div>

          {/* Service 2 - UX/UI Design */}
          <div className="grid md:grid-cols-3 gap-8 py-8 md:py-12 border-b border-gray-300 group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-[#e07a5f] transition-colors">
                UX/UI Design
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                My design process ensures intuitive interfaces with user-centric
                approaches, enhancing user satisfaction and visual
                communication.
              </p>
            </div>
          </div>

          {/* Service 3 - CAD Technician */}
          <div className="grid md:grid-cols-3 gap-8 py-8 md:py-12 border-b border-gray-300 group hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-lg">
            <div className="md:col-span-2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-[#e07a5f] transition-colors">
                CAD Technician
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                I turn concepts into precise technical drawings and 3D models
                with industry-standard CAD software for architecture and
                manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section Header */}
      <div className="py-12 md:py-16 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Where Experience <br />
            <span className="text-[#e07a5f]">Meets Expertise</span>
          </h2>
        </div>
      </div>

      <section id="experience" className="py-16 md:py-24 bg-white text-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Wiring Technician */}
            <div className="bg-black border border-white/20 p-6 md:p-8 flex flex-col hover:border-[#e07a5f] transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Wiring Technician
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Schneider Electric
              </p>
              <p className="text-gray-400 text-sm mb-6">
                2025 — Mount Juliet, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Assemble medium-voltage control panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Interpret complex schematics and blueprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>
                    Collaborate with engineers on continuous improvement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Ensure quality control and OSHA compliance</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Apprentice Full-Stack Dev */}
            <div className="bg-black border border-white/20 p-6 md:p-8 flex flex-col hover:border-[#e07a5f] transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Apprentice Full-Stack Dev
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Nashville Software School
              </p>
              <p className="text-gray-400 text-sm mb-6">
                2022-2023 — Nashville, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Built RESTful APIs in C# / ASP.NET Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Designed SQL Server schemas & ADO.NET layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Implemented React + TypeScript front-ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Practiced Agile Scrum & Git-flow</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Architectural Drafter OHM */}
            <div className="bg-black border border-white/20 p-6 md:p-8 flex flex-col hover:border-[#e07a5f] transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Architectural Drafter
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">OHM Advisors</p>
              <p className="text-gray-400 text-sm mb-6">
                2018-2019 — Nashville, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Produced 2D plans and 3D Revit models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Coordinated in weekly BIM meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Created custom CAD detail library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Worked on residential and commercial projects</span>
                </li>
              </ul>
            </div>

            {/* Card 4 - Architectural Drafter Supportive Design */}
            <div className="bg-black border border-white/20 p-6 md:p-8 flex flex-col hover:border-[#e07a5f] transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                Architectural Drafter
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Supportive Design LLC
              </p>
              <p className="text-gray-400 text-sm mb-6">2018 — Nashville, TN</p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Generated 3D Revit renderings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Created 2D construction documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Translated hand sketches to digital plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e07a5f] mt-1">•</span>
                  <span>Applied company CAD standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build <span className="text-[#e07a5f]">Together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to connect, I'm
            always open to discussing new opportunities and creative
            collaborations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href={portfolioData.social.email}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 rounded-full hover:border-[#e07a5f] hover:bg-[#e07a5f] hover:text-white font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-offset-2 focus:ring-offset-black"
            >
              <Mail size={24} />
              Send Email
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#e07a5f] text-[#e07a5f] rounded-full hover:bg-[#e07a5f] hover:text-white hover:border-[#e07a5f] font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-offset-2 focus:ring-offset-black"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center">
        <p className="text-gray-500 text-sm mb-4">
          &copy; {new Date().getFullYear()} Mariana Mena. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#e07a5f] transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#e07a5f] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={portfolioData.social.email}
            className="text-gray-500 hover:text-[#e07a5f] transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 p-3 bg-[#e07a5f] text-white rounded-full shadow-lg hover:bg-[#c96a52] transition-all focus:outline-none focus:ring-2 focus:ring-[#e07a5f] focus:ring-offset-2 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default App;
