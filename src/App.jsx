import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Award,
  Briefcase,
  Code,
  Heart,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    setIsSending(true);

    emailjs
      .send(
        "service_sw8tkfq",
        "template_oz8lrck",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "-i4NMgwT5llAO4YPG"
      )
      .then(
        () => {
          alert("Message sent successfully 💗");
          setFormData({ from_name: "", from_email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error(error);
          alert("Failed to send message 😢");
          setIsSending(false);
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Express",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "REST APIs",
      "JWT Auth",
      "Mongoose",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Cloudinary",
      "Vercel",
      "Firebase",
      "EmailJS",
    ],
  };

  const projects = [
    {
      title: "VibeTube",
      description:
        "Full-stack video sharing platform with user authentication, video upload, and streaming capabilities.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Cloudinary",
        "JWT",
        "bcrypt",
      ],
      github: "https://github.com/yo-geshwari/vibeTube-frontend",
      live: "https://vibe-tube-frontend.vercel.app/",
      impact: "Full-Stack Project | MERN",
    },
    {
      title: "Book and Media Recommender",
      description:
        "A personalized media recommendation app with user auth, real-time reviews, and preferencebased suggestions.",
      tech: ["React", "Firebase", "REST APIs", "Tailwind CSS"],
      github: "https://github.com/yo-geshwari/Books-And-Media-Recommender",
      live: "https://books-and-media-recommender.vercel.app/",
      impact: "Basic React Project",
    },
    {
      title: "Tic-Tac-Toe-project",
      description:
        "A simple front-end web development project using HTML, CSS, and basic JavaScript to build an interactive and responsive web page.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yo-geshwari/Tic-Tac-Toe-project",
      live: "https://yo-geshwari.github.io/Tic-Tac-Toe-project/",
      impact: "First Project",
    },
  ];

  const experience = [
    {
      role: "Frontend Development Intern",
      company: "Jastro | Tech Startup",
      period: "Summer 2025",
      description:
        "Developed responsive web components and collaborated with design team to implement UI/UX improvements.",
      achievements: [
        "Built 15+ reusable React components",
        "Implemented business logic for a key feature",
        "Internationalized website for 2 languages",
      ],
    },
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      year: "2024",
      category: "Hackathon",
    },
    {
      title:
        "Represented Institute in UI/UX Design Competition at BECon’24, IIT Delhi ",
      year: "2024",
      category: "Hackathon",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item
                      ? "text-pink-500 font-semibold"
                      : "text-gray-600 hover:text-pink-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="text-pink-500" />
              ) : (
                <Menu className="text-pink-500" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible.home
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-pink-500 px-4 py-2 bg-pink-100 rounded-full">
                Available for Internships
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              Hi, I'm Yogeshwari
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Web Developer blending creativity with clean code
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              B.Tech CSE student passionate about building beautiful, functional
              web experiences. Specialized in React and modern frontend
              development.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                View Projects
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 bg-white text-pink-500 border-2 border-pink-400 rounded-full font-semibold hover:bg-pink-50 hover:scale-105 transition-all flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div
              className="absolute bottom-20 right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl opacity-50 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.about
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-100">
                <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                  My Journey
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I'm a B.Tech Computer Science student with a passion for
                  creating intuitive, aesthetically pleasing web applications.
                  What started as curiosity about how websites work has evolved
                  into a deep love for frontend development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  I believe great web development is where technical excellence
                  meets thoughtful design. Whether it's building responsive
                  interfaces or optimizing performance, I approach every project
                  with attention to detail and user-first thinking.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-pink-600">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800">
                      B.Tech in Computer Science
                    </h4>
                    <p className="text-gray-600">
                      Dr. B. R. Ambedkar National Institute of Technology
                    </p>
                    <p className="text-sm text-pink-500">
                      2023 - 2027 | CGPA: 7.86/10
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800">
                      Current Focus
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                        Full-Stack
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                        UI/UX
                      </span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                        AI/ML
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white rounded-3xl p-6 shadow-lg border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl">
                      <Code className="text-pink-500" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold capitalize text-gray-800">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-pink-50 to-rose-50 text-gray-700 rounded-full text-sm font-medium hover:from-pink-100 hover:to-rose-100 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Real-world applications showcasing my technical skills and
              problem-solving approach
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-pink-100"
                >
                  <div className="h-48 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code className="text-white/30" size={80} />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-pink-600 text-xs font-semibold rounded-full">
                        {project.impact}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-pink-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.experience
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              Experience
            </h2>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-pink-400 hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {exp.role}
                      </h3>
                      <p className="text-pink-500 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-gray-500 text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Heart
                          className="text-pink-400 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-gray-600 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Achievements & Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-pink-100"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-sm">
                        <Award className="text-pink-500" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {achievement.title}
                        </h4>
                        <div className="flex items-center gap-3 text-sm">
                          <span className="text-gray-600">
                            {achievement.year}
                          </span>
                          <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-full text-xs">
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.contact
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
              Let's Connect
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Open to internship opportunities and collaborations
            </p>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-100">
              
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      value={formData.from_name}
                      onChange={(e) =>
                        setFormData({ ...formData, from_name: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                      value={formData.from_email}
                      onChange={(e) =>
                        setFormData({ ...formData, from_email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full px-4 py-3 rounded-xl border-2 border-pink-100 focus:border-pink-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your opportunity or project..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={sendEmail}
                    disabled={isSending}
                    className="w-full py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              

              <div className="mt-8 pt-8 border-t border-pink-100">
                <div className="flex justify-center gap-6">
                  <a
                    href="https://github.com/yo-geshwari"
                    className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                  >
                    <Github className="text-pink-500" size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yogeshwari-kanwar-a88652312"
                    className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                  >
                    <Linkedin className="text-pink-500" size={24} />
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=yogeshwarikanwar26@gmail.com&su=Portfolio%20Contact"
                    className="p-3 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full hover:shadow-lg hover:scale-110 transition-all"
                  >
                    <Mail className="text-pink-500" size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-pink-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Yogeshwari Kanwar. Built with React & Tailwind CSS
          </p>
          <p className="text-sm text-pink-500 mt-2">
            Designed with creativity, built with precision
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
