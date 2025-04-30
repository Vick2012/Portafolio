interface HologramCardProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}
interface Project {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

const HologramCardProps: React.FC = () => {
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
      description: "Una API RESTful para gestionar tareas con autenticación.",
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
    <section className="projects">
      <h2>Proyectos Realizados</h2>
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
    </section>
  );
};

const HologramCard: React.FC<HologramCardProps> = ({
  title,
  description,
  link,
  technologies,
}) => {
  return (
    <div className="hologram-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver proyecto
      </a>
      <div className="technologies">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default HologramCard;
