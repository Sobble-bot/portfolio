import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaAws, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { SiKotlin, SiLinux, SiMysql, SiMongodb, SiExpress, SiFlask } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Linux', icon: <SiLinux /> },
  { name: 'Kotlin', icon: <SiKotlin /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
