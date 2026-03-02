import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  Code2,
  PenTool,
  Palette,
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
    //  riginal projects
    {
      id: 1,
      title: '3D Models',
      description:
        'Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.',
      tech: 'Creo',
      image:
        'https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png',
      category: 'Modeling',
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
    },
    {
      id: 13,
      title: 'Church websitv',
      description:
        'St. Philopateer Church website – custom Wix build: responsive layout, parish event calendar, online donation portal, and bilingual EN/AR content managed through Wix.',
      tech: 'Wix',
      image:
        'https://static.wixstatic.com/media/0b93a7_c03ee1e7ee6f41ebb09b2e2d013cc8db~mv2.png',
      category: 'Web Design',
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
    },
  ],
  skills: [
    { name: 'Full-Stack Development', icon: <Code2 className="w-6 h-6" /> },
    { name: 'Technical Drafting', icon: <PenTool className="w-6 h-6" /> },
    { name: 'Graphic Design', icon: <Palette className="w-6 h-6" /> },
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
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation - Black bar with white text */}
      <nav className="fixed top-0 w-full z-50 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo - hidden on desktop, shown on mobile */}
          <div className="md:hidden text-xl font-bold tracking-tight">
            Mariana<span className="text-[#e07a5f]">.</span>
          </div>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-16">
            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-lg font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - EXACT match to your screenshot */}
      <section id="home" className="min-h-screen bg-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold tracking-tight text-black">
              Mariana<span className="text-[#e07a5f]">.</span>
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Large bold text */}
            <div>
              <h2 className="text-6xl md:text-8xl font-bold leading-none mb-4">
                <span className="text-black">Developer</span>
                <br />
                <span className="text-black">Drafter</span>{' '}
                <span className="text-[#e07a5f]">&</span>
                <br />
                <span className="text-[#e07a5f]">Designer</span>
              </h2>
            </div>

            {/* Right: 3D Wireframe Image */}
            <div className="flex justify-center">
              <img
                src="https://static.wixstatic.com/media/0b93a7_b6b27715138e453aadc3516f536031ef~mv2.jpg"
                alt="3D Building Wireframe"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="mt-12 max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              I build digital experiences that bridge technical precision with
              creative vision, where clean code meets thoughtful design.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-[#e07a5f] text-white font-medium rounded hover:bg-[#c96a52] transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-black text-black font-medium rounded hover:bg-black hover:text-white transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" bg-black text-white m-10 ">
        <div className="grid md:grid-cols-3">
          {/* Left: Black background with text */}
          <div className="flex flex-col col-span-2 justify-center px-12 md:px-20 py-20">
            <h2 className="text-6xl md:text-8xl font-bold mb-8">About</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              My name is Mariana
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
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
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="bg-gray-900 ">
            <img
              src="https://static.wixstatic.com/media/0b93a7_45fd15f0786840d8afcdc961579ff9cb~mv2.jpg"
              alt="Mariana working on blueprints"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white pl-10">
            Projects That Define
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#e07a5f] pl-10">
            My Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {portfolioData.projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#fafafa] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                {/* Category Tag */}
                <div className="px-4 py-2">
                  <span className="inline-block bg-[#e07a5f] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-gray-200 mx-4 mb-4 rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  <span className="text-[#e07a5f] text-xs font-medium uppercase tracking-wider">
                    {project.tech}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {
        <section id="skills" className="py-12 bg-black text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                >
                  <div className="text-white mb-3 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      }
      {/* Offerings Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <h2 className="text-6xl md:text-7xl font-bold text-black mb-1">
            Offerings
          </h2>

          {/* Subheader row */}
          <div className="grid md:grid-cols-3 gap-8 mb-6 border-b border-gray-300 pb-8 ">
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
          <div className="grid md:grid-cols-3 gap-8 py-6 border-b border-gray-300 ">
            <div className="md:col-span-2">
              <h3 className="text-5xl md:text-6xl font-bold text-black">
                Web
                <br />
                Development
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                I specialize in creating responsive and dynamic websites that
                engage users and adapt seamlessly across devices.
              </p>
            </div>
          </div>

          {/* Service 2 - UX/UI Design */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
            <div className="md:col-span-2">
              <h3 className="text-5xl md:text-6xl font-bold text-black">
                UX/UI Design
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                My design process ensures intuitive interfaces with user-centric
                approaches, enhancing user satisfaction.
              </p>
            </div>
          </div>

          {/* Service 3 - CAD Technician */}
          <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
            <div className="md:col-span-2">
              <h3 className="text-5xl md:text-6xl font-bold text-black">
                CAD Technician
              </h3>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600">
                I turn concepts into precise technical drawings and 3D models
                with industry-standard CAD software
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* Header */}
      <div className="py-12 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Where Experience <br />
            <span className="text-[#e07a5f]">Meets Expertise</span>
          </h2>
        </div>
      </div>

      <section id="experience" className="py-24 bg-white text-white">
        <div className="max-w-7xl mx-auto px-2">
          {/*           <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
              <span className="text-black"> Where Experience </span>
              <br />
              <span className="text-[#e07a5f]">Meets Expertise</span>
            </h2>
          </div> */}

          {/* Experience Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Wiring Technician */}
            <div className="bg-black border border-white/20 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                Wiring Technician
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Schneider Electric
              </p>
              <p className="text-gray-400 text-sm mb-6">
                2025 Mount Juliet, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Assemble medium-voltage control panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Interpret complex schematics and blueprints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>
                    Collaborate with engineers on continuous improvement
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Ensure quality control and OSHA compliance</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Apprentice Full-Stack Dev */}
            <div className="bg-black border border-white/20 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                Apprentice Full-Stack Dev
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Nashville Software School
              </p>
              <p className="text-gray-400 text-sm mb-6">
                2022-2023 Nashville, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Built RESTful APIs in C# / ASP.NET Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Designed SQL Server schemas & ADO.NET layers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Implemented React + TypeScript front-ends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Practiced Agile Scrum & Git-flow</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Architectural Drafter OHM */}
            <div className="bg-black border border-white/20 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                Architectural Drafter
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">OHM Advisors</p>
              <p className="text-gray-400 text-sm mb-6">
                2018 - 2019 Nashville, TN
              </p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Produced 2D plans and 3D Revit models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Coordinated in weekly BIM meetings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Created custom CAD detail library</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Worked on residential and commercial projects</span>
                </li>
              </ul>
            </div>

            {/* Card 4 - Architectural Drafter Supportive Design */}
            <div className="bg-black border border-white/20 p-8 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">
                Architectural Drafter
              </h3>
              <p className="text-[#e07a5f] font-semibold mb-1">
                Supportive Design LLC
              </p>
              <p className="text-gray-400 text-sm mb-6">2018 Nashville, TN</p>

              <ul className="space-y-3 text-gray-300 text-sm flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Generated 3D Revit renderings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Created 2D construction documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Translated hand sketches to digital plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  <span>Applied company CAD standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lets Build <span className="text-[#e07a5f]">Together</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Whether you have a project in mind or just want to connect, Im
            always open to discussing new opportunities and creative
            collaborations..
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ">
            <a
              href={portfolioData.social.email}
              className=" flex items-center gap-3 px-8 py-4 border-2 p-4 border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black font-medium transition-all"
            >
              <Mail size={24} />
              Send Email
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center gap-3 px-8 py-4 border-2 p-4  border-[#e07a5f]  rounded-full hover:border-white hover:bg-white hover:text-black font-medium transition-all"
            >
              <Linkedin size={24} />
              LinkedIn
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="poopener noreferrer"
              className=" flex items-center gap-3 px-8 py-4 border-2 p-4 border-white/20 rounded-full hover:border-[#e07a5f] hover:bg-white hover:text-black font-medium transition-all"
            >
              <Github size={24} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Mariana Mena. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
