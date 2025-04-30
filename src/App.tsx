import { useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import PersonalInfoCard from "./components/PersonalInfoCard/PersonalInfoCard";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import HologramCard from "./components/HologramCard/HologramCard";
import Footer from "./components/Footer/Footer";
import { initParticleEffects } from "./scripts/threejs/particleEffects";
import "./styles/main.scss";

interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const App: React.FC = () => {
  useEffect(() => {
    initParticleEffects();
  }, []);

  const projects: Project[] = [
    {
      title: "Sistema de Gestión ERP",
      description:
        "Es un sistema de gestión empresarial especializado en controlar, planificar y optimizar todas las operaciones logísticas de una empresa. Este tipo de ERP permite integrar en una sola plataforma todos los procesos.",
      link: "https://github.com/Vick2012/ERP-pc.git",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "API de Tareas",
      description:
        "Una API RESTful que permite gestionar tareas de manera eficiente y segura. La autenticación de los usuarios se implementaró con JWT (JSON Web Tokens), garantizando así que solo los usuarios autorizados puedan acceder a los recursos protegidos..",
      link: "https://github.com/Vick2012/Api.git",
      technologies: ["FastAPI", "PostgreSQL", "Python"],
    },
    {
      title: "Portafolio Personal",
      description:
        "Mi sitio web personal para mostrar mis proyectos y habilidades.",
      link: "https://github.com/Vick2012/Portafolio.git",
      technologies: ["React", "TypeScript", "Three.js"],
    },
  ];

  return (
    <div className="app">
      <canvas
        id="particle-canvas"
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
      />
      <div className="main-layout">
        <header>
          <ThemeToggle />
        </header>
        <Profile />
        <section className="content">
          <PersonalInfoCard />
          <Skills />
          <div className="projects-section">
            <h2>Completed Projects</h2>
            <div className="projects-container">
              {projects.map((project) => (
                <HologramCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  technologies={project.technologies}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
