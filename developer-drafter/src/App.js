// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code2, PenTool, Cpu } from 'lucide-react';

// // Portfolio Data
// const portfolioData = {
//   name: "Mariana",
//   role: "Developer Drafter",
//   tagline: "I build digital experiences that bridge technical precision with creative vision, where clean code meets thoughtful design.",
//   about: "With a foundation in architectural drafting, a certification in full-stack development, and hands-on experience in electrical assembly, I bring a unique multidisciplinary approach to every project. I believe the best solutions emerge at the intersection of technical precision and creative intuition.",
//   projects: [
//     {
//       id: 1,
//       title: "3D Models",
//       description: "Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.",
//       tech: "Creo",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png",
//       category: "Modeling"
//     },
//     {
//       id: 2,
//       title: "Manufacturing Drawing",
//       description: "Fully-dimensioned fabrication drawing, view is driven by the 3-D feature tree, the drawing, BOM, and annotations update instantly, no manual re-dimensioning.",
//       tech: "Creo",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/12526476bdb53d4428a5296ece24787b.png",
//       category: "Documentation"
//     },
//     {
//       id: 3,
//       title: "Electric Plan",
//       description: "Electrical sheet for a two-story residence: lighting layout, switching, and outlet locations on the ceiling grid.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/70b4b0060f4a434518d274b1192f04d0.png",
//       category: "Electrical"
//     },
//     {
//       id: 4,
//       title: "Residential House",
//       description: "Revit mass-model and sheet set for a 1,850 sq ft two-story residence: generated floor plans, elevations, and 3D perspective for client review.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/148cea8d64ec9e16b86c7e30e82ad061.png",
//       category: "Architecture"
//     },
//     {
//       id: 5,
//       title: "Conceptual Massing",
//       description: "Conceptual massing study in Revit includes volume, roof slopes, and window-to-wall ratios for client review.",
//       tech: "AutoCAD - Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/585afd0fd94b336936bca7c08fb90eb6.png",
//       category: "Architecture"
//     },
//     {
//       id: 6,
//       title: "3D Section",
//       description: "Revit section cut revealing floor-to-ceiling heights and structural bay spacing.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/14cdfd192c8906e9264231beb6d1fdb0.png",
//       category: "Documentation"
//     }
//   ],
//   skills: [
//     { name: "Full-Stack Development", icon: <Code2 className="w-6 h-6" /> },
//     { name: "Technical Drafting", icon: <PenTool className="w-6 h-6" /> },
//     { name: "Electrical Assembly", icon: <Cpu className="w-6 h-6" /> }
//   ],
//   social: {
//     github: "https://github.com",
//     linkedin: "https://linkedin.com",
//     email: "mailto:mariana@example.com"
//   }
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Determine active section
//       const sections = ['home', 'about', 'projects', 'contact'];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//           <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => scrollToSection('home')}>
//             <span className="text-slate-900">{portfolioData.name}</span>
//             <span className="text-rose-500">.</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className={`text-sm font-medium transition-colors hover:text-rose-500 ${activeSection === item.toLowerCase() ? 'text-rose-500' : 'text-slate-600'}`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-slate-900"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg">
//             <div className="flex flex-col p-6 space-y-4">
//               {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="text-left text-lg font-medium text-slate-600 hover:text-rose-500 transition-colors"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-slate-50 opacity-60" />
//         <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
//         <div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <div className="mb-6 inline-block">
//             <span className="px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium tracking-wide uppercase">
//               {portfolioData.role}
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
//             Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Technical</span> Precision<br />
//             with Creative Vision
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
//             {portfolioData.tagline}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               View Projects
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
//             >
//               Get in Touch
//             </button>
//           </div>

//           <div className="mt-20 animate-bounce">
//             <ChevronDown className="w-6 h-6 mx-auto text-slate-400" />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 About <span className="text-rose-500">Me</span>
//               </h2>
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 {portfolioData.about}
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
//                 {portfolioData.skills.map((skill, index) => (
//                   <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all group">
//                     <div className="text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
//                       {skill.icon}
//                     </div>
//                     <h3 className="font-semibold text-slate-900 mb-1">{skill.name}</h3>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent" />
//                 <img
//                   src="https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/1ff9255e16d2529eea8f6016bfb56409.jpg"
//                   alt="Mariana - Developer Drafter"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
//                   }}
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-100 rounded-full -z-10" />
//               <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-24 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Projects That Define<br />My <span className="text-rose-500">Journey</span>
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               A curated selection of technical drawings, 3D models, and development projects showcasing multidisciplinary expertise.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {portfolioData.projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-200"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       e.target.src = `https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800`;
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <span className="text-white text-sm font-medium flex items-center gap-2">
//                       View Project <ExternalLink size={16} />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
//                       {project.category}
//                     </span>
//                     <span className="text-xs text-slate-400 font-medium">
//                       {project.tech}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Let's Build <span className="text-rose-500">Together</span>
//           </h2>
//           <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
//             Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and creative collaborations.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//             <a
//               href={portfolioData.social.email}
//               className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105"
//             >
//               <Mail size={20} />
//               Send Email
//             </a>
//             <a
//               href={portfolioData.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
//             >
//               <Linkedin size={20} />
//               LinkedIn
//             </a>
//             <a
//               href={portfolioData.social.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-medium hover:border-slate-900 hover:text-slate-900 transition-all"
//             >
//               <Github size={20} />
//               GitHub
//             </a>
//           </div>

//           <div className="pt-12 border-t border-slate-100">
//             <p className="text-slate-400 text-sm">
//               © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
//===========================================
// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Code2, PenTool, Cpu } from 'lucide-react';

// // Portfolio Data with all 15 projects
// const portfolioData = {
//   name: "Mariana",
//   role: "Developer Drafter",
//   tagline: "I build digital experiences that bridge technical precision with creative vision, where clean code meets thoughtful design.",
//   about: "With a foundation in architectural drafting, a certification in full-stack development, and hands-on experience in electrical assembly, I bring a unique multidisciplinary approach to every project. I believe the best solutions emerge at the intersection of technical precision and creative intuition.",
//   projects: [
//     // First 6 original projects
//     {
//       id: 1,
//       title: "3D Models",
//       description: "Parametric solid models and assemblies—part features, constraints, and BOM linked to model tree for manufacturing.",
//       tech: "Creo",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/316e7195272ec7fa14a9a929a8f6d050.png",
//       category: "Modeling"
//     },
//     {
//       id: 2,
//       title: "Manufacturing Drawing",
//       description: "Fully-dimensioned fabrication drawing, view is driven by the 3-D feature tree, the drawing, BOM, and annotations update instantly, no manual re-dimensioning.",
//       tech: "Creo",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/12526476bdb53d4428a5296ece24787b.png",
//       category: "Documentation"
//     },
//     {
//       id: 3,
//       title: "Electric Plan",
//       description: "Electrical sheet for a two-story residence: lighting layout, switching, and outlet locations on the ceiling grid.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/70b4b0060f4a434518d274b1192f04d0.png",
//       category: "Electrical"
//     },
//     {
//       id: 4,
//       title: "Residential House",
//       description: "Revit mass-model and sheet set for a 1,850 sq ft two-story residence: generated floor plans, elevations, and 3D perspective for client review.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/148cea8d64ec9e16b86c7e30e82ad061.png",
//       category: "Architecture"
//     },
//     {
//       id: 5,
//       title: "Conceptual Massing",
//       description: "Conceptual massing study in Revit includes volume, roof slopes, and window-to-wall ratios for client review.",
//       tech: "AutoCAD - Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/585afd0fd94b336936bca7c08fb90eb6.png",
//       category: "Architecture"
//     },
//     {
//       id: 6,
//       title: "3D Section",
//       description: "Revit section cut revealing floor-to-ceiling heights and structural bay spacing.",
//       tech: "Revit",
//       image: "https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/14cdfd192c8906e9264231beb6d1fdb0.png",
//       category: "Documentation"
//     },
//     // Additional 9 projects from your screenshot
//     {
//       id: 7,
//       title: "3D External view",
//       description: "Final design visualization exported from Revit—shaded + edged view used for client presentation.",
//       tech: "Revit",
//       image: "https://static.wixstatic.com/media/0b93a7_63b628db0dca43d7adb112ad062616e5~mv2.png",
//       category: "Zoning Render"
//     },
//     {
//       id: 8,
//       title: "Deck-Shade",
//       description: "parametric pergola slats, sun-angle driven, sent to AutoCAD for site layout.",
//       tech: "Autocad - Revit",
//       image: "https://static.wixstatic.com/media/0b93a7_4e28e0c54ffa4c07b6adc0793ad064f0~mv2.png",
//       category: "Design"
//     },
//     {
//       id: 9,
//       title: "Concrete Model",
//       description: "Revit cast-in-place concrete model for ocean-front residence—rebar clash check included",
//       tech: "Autocad - Revit",
//       image: "https://static.wixstatic.com/media/0b93a7_4a99820183c24acb8623f4fcc912bafa~mv2.png",
//       category: "Structural"
//     },
//     {
//       id: 10,
//       title: "structural-steel frame",
//       description: "structural-steel frame using A500 HSS members—moment connections, grids, and elevations exported to AutoCAD for shop-bolt list.",
//       tech: "Autocad - Revit",
//       image: "https://static.wixstatic.com/media/0b93a7_fd047365a15d4bd58a9907d04095abb7~mv2.png",
//       category: "Structural"
//     },
//     {
//       id: 11,
//       title: "Exterior Elevations",
//       description: "2D Views: Revit exterior elevations—North (Back) & South (Front)—for 3-storey house.",
//       tech: "Revit",
//       image: "https://static.wixstatic.com/media/0b93a7_6af38bf154ba4b5aac484b31251b4840~mv2.png",
//       category: "Elevations"
//     },
//     {
//       id: 12,
//       title: "Magazine Design",
//       description: "Youth Magazine Design – 24-page teen-focused issue created in Photoshop + InDesign.",
//       tech: "Photoshop - Illustrator",
//       image: "https://static.wixstatic.com/media/0b93a7_30223e05ced34793814903591293c6ef~mv2.png",
//       category: "Graphic Design"
//     },
//     {
//       id: 13,
//       title: "Church websitv",
//       description: "St. Philopateer Church website – custom Wix build: responsive layout, parish event calendar, online donation portal, and bilingual EN/AR content managed through Wix.",
//       tech: "Wix",
//       image: "https://static.wixstatic.com/media/0b93a7_c03ee1e7ee6f41ebb09b2e2d013cc8db~mv2.png",
//       category: "Web Design"
//     },
//     {
//       id: 14,
//       title: "SAT",
//       description: "React attendance tracker with Chart.js visualizations, responsive Bootstrap UI, and JSON-server backend.",
//       tech: "Frontend",
//       image: "https://static.wixstatic.com/media/0b93a7_c4278c0c460c4a3c98d0f202c95be8bf~mv2.jpg",
//       category: "Frontend Dashboard"
//     },
//     {
//       id: 15,
//       title: "RX-Care",
//       description: "Secure prescription management platform with React frontend, .NET backend, JWT authentication, and role-based access control.",
//       tech: "React - .Net - SQL Server",
//       image: "https://static.wixstatic.com/media/0b93a7_84530534e9644c5ab8b56aa29ef7d177~mv2.png",
//       category: "Full-Stack App"
//     }
//   ],
//   skills: [
//     { name: "Full-Stack Development", icon: <Code2 className="w-6 h-6" /> },
//     { name: "Technical Drafting", icon: <PenTool className="w-6 h-6" /> },
//     { name: "Electrical Assembly", icon: <Cpu className="w-6 h-6" /> }
//   ],
//   social: {
//     github: "https://github.com/Mary-Mena21",
//     linkedin: "https://www.linkedin.com/in/mariana-mena-dev/",
//     email: "mailto:marianashokry@yahoo.com"
//   }
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);

//       // Determine active section
//       const sections = ['home', 'about', 'projects', 'contact'];
//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= 100 && rect.bottom >= 100) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900">
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
//         <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//           <div className="text-2xl font-bold tracking-tight cursor-pointer" onClick={() => scrollToSection('home')}>
//             <span className="text-slate-900">{portfolioData.name}</span>
//             <span className="text-rose-500">.</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className={`text-sm font-medium transition-colors hover:text-rose-500 ${activeSection === item.toLowerCase() ? 'text-rose-500' : 'text-slate-600'}`}
//               >
//                 {item}
//               </button>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-slate-900"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-lg">
//             <div className="flex flex-col p-6 space-y-4">
//               {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item.toLowerCase())}
//                   className="text-left text-lg font-medium text-slate-600 hover:text-rose-500 transition-colors"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-slate-50 opacity-60" />
//         <div className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
//         <div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <div className="mb-6 inline-block">
//             <span className="px-4 py-2 rounded-full bg-rose-100 text-rose-700 text-sm font-medium tracking-wide uppercase">
//               {portfolioData.role}
//             </span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
//             Bridging <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Technical</span> Precision<br />
//             with Creative Vision
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
//             {portfolioData.tagline}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <button
//               onClick={() => scrollToSection('projects')}
//               className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               View Projects
//             </button>
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
//             >
//               Get in Touch
//             </button>
//           </div>

//           <div className="mt-20 animate-bounce">
//             <ChevronDown className="w-6 h-6 mx-auto text-slate-400" />
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <div className="space-y-6">
//               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//                 About <span className="text-rose-500">Me</span>
//               </h2>
//               <p className="text-lg text-slate-600 leading-relaxed">
//                 {portfolioData.about}
//               </p>

//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
//                 {portfolioData.skills.map((skill, index) => (
//                   <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-rose-200 hover:bg-rose-50/30 transition-all group">
//                     <div className="text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
//                       {skill.icon}
//                     </div>
//                     <h3 className="font-semibold text-slate-900 mb-1">{skill.name}</h3>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="relative">
//               <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 relative">
//                 <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent" />
//                 <img
//                   src="https://kimi-web-img.moonshot.cn/prod-data/online-image/search-upload/1ff9255e16d2529eea8f6016bfb56409.jpg"
//                   alt="Mariana - Developer Drafter"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
//                   }}
//                 />
//               </div>
//               <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-rose-100 rounded-full -z-10" />
//               <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-24 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Projects That Define<br />My <span className="text-rose-500">Journey</span>
//             </h2>
//             <p className="text-lg text-slate-600 max-w-2xl mx-auto">
//               A curated selection of technical drawings, 3D models, and development projects showcasing multidisciplinary expertise.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {portfolioData.projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-200"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => {
//                       e.target.src = `https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800`;
//                     }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <span className="text-white text-sm font-medium flex items-center gap-2">
//                       View Project <ExternalLink size={16} />
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-3">
//                     <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider">
//                       {project.category}
//                     </span>
//                     <span className="text-xs text-slate-400 font-medium">
//                       {project.tech}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-rose-500 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-24 px-6 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Let's Build <span className="text-rose-500">Together</span>
//           </h2>
//           <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
//             Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and creative collaborations.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
//             <a
//               href={portfolioData.social.email}
//               className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:scale-105"
//             >
//               <Mail size={20} />
//               Send Email
//             </a>
//             <a
//               href={portfolioData.social.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-medium hover:bg-slate-50 transition-all"
//             >
//               <Linkedin size={20} />
//               LinkedIn
//             </a>
//             <a
//               href={portfolioData.social.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-medium hover:border-slate-900 hover:text-slate-900 transition-all"
//             >
//               <Github size={20} />
//               GitHub
//             </a>
//           </div>

//           <div className="pt-12 border-t border-slate-100">
//             <p className="text-slate-400 text-sm">
//               © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

//============================================

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
  Cpu,
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
    // First 6 original projects
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
    // Additional 9 projects from your screenshot
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
            {['About', 'Projects', 'Skills', 'Experience','Contact'].map(
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
              {['About', 'Projects', 'Skills', 'Experience','Contact'].map(
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
      <section id="about" className=" bg-black text-white m-5">
        <div className="grid md:grid-cols-2">
          {/* Left: Black background with text */}
          <div className="flex flex-col justify-center px-12 md:px-20 py-20">
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
      <section id="projects" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Projects That Define
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-400">
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
{      <section id="skills" className="py-24 bg-black text-white">
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
      </section>}
      {/* Offerings Section */}
<section id="skills" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-6xl md:text-7xl font-bold text-black mb-16">Offerings</h2>
    
    {/* Subheader row */}
    <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-gray-300 pb-8">
      <div>
        <h3 className="text-lg font-medium text-black">What I Provide</h3>
      </div>
      <div className="md:col-span-2">
        <p className="text-gray-600 max-w-2xl">
          With a focus on innovation, I offer services that elevate your projects. From detailed design to robust development, every step is tailored to achieve excellence.
        </p>
      </div>
    </div>

    {/* Service 1 - Web Development */}
    <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
      <div className="md:col-span-2">
        <h3 className="text-5xl md:text-6xl font-bold text-black">Web<br />Development</h3>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">
          I specialize in creating responsive and dynamic websites that engage users and adapt seamlessly across devices.
        </p>
      </div>
    </div>

    {/* Service 2 - UX/UI Design */}
    <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
      <div className="md:col-span-2">
        <h3 className="text-5xl md:text-6xl font-bold text-black">UX/UI Design</h3>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">
          My design process ensures intuitive interfaces with user-centric approaches, enhancing user satisfaction.
        </p>
      </div>
    </div>

    {/* Service 3 - CAD Technician */}
    <div className="grid md:grid-cols-3 gap-8 py-12 border-b border-gray-300">
      <div className="md:col-span-2">
        <h3 className="text-5xl md:text-6xl font-bold text-black">CAD Technician</h3>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600">
          I turn concepts into precise technical drawings and 3D models with industry-standard CAD software
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white text-white">
        <div className="max-w-7xl mx-auto px-2">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 ">
              <span className="text-black"> Where Experience </span>
              <br />
              <span className="text-[#e07a5f]">Meets Expertise</span>
            </h2>
          </div>

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-gray-400 text-lg mb-12">
            Lets work together on your next project.
          </p>

          <div className="flex justify-center gap-8">
            <a
              href={portfolioData.social.email}
              className="p-4 border border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
            >
              <Mail size={24} />
            </a>
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border border-white/20 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
            >
              <Github size={24} />
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
