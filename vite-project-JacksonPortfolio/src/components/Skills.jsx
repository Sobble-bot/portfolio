import './Skills.css';

const skills = [
  'Java', 'Kotlin', 'C#', 'Python',
  'JavaScript', 'HTML', 'CSS', 'SQL (Oracle)', 
  'MySQL', 'Linux', 'TypeScript'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
