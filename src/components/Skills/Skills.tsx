interface Skill {
  name: string;
  level: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript", level: "Avanzado" },
    { name: "Python", level: "Avanzado" },
    { name: "FastAPI", level: "Intermedio" },
    { name: "Django", level: "Intermedio" },
    { name: "Node.js", level: "Intermedio" },
    { name: "Express.js", level: "Intermedio" },
    { name: "PostgreSQL", level: "Intermedio" },
    { name: "MongoDB", level: "Intermedio" },
    { name: "HTML5", level: "Avanzado" },
    { name: "CSS3", level: "Avanzado" },
  ];

  return (
    <section className="skills">
      <h3>Skills</h3>
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill.name} className="skill">
            {skill.name} - {skill.level}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
