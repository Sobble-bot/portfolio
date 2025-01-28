import './Projects.css';
import externalLink from '../assets/externalLink.png';

const projects = [
  {
    name: 'C# Avalonia Project',
    description: 'A gym recipe GUI application built with AvaloniaUI so that users can create their recipe and show it to other users on the same platform.',
    language: 'C#',
    link: 'https://github.com/Sobble-bot/C--Avalonia-project',
  },
  {
    name: 'Flask Project 420',
    description: 'A Flask-based medical web application with RESTful APIs that allows users to take appointments and doctors had privileges that could allow them to accept or deny the appointment.',
    language: 'Python',
    link: 'https://github.com/Sobble-bot/flask-project-420',
  },
  {
    name: 'Mobile Project 511',
    description: 'A modern Android application for book enthusiasts, built with Jetpack Compose and following Material Design principles.',
    language: 'Kotlin',
    link: 'https://github.com/Sobble-bot/mobile-project-511',
  },
  {
    name: 'Web MERN Project 520',
    description: 'A data visualization application designed to analyze crime data in conjunction with economic and demographic factors across US counties by using the MERN stack',
    language: 'JavaScript',
    link: 'https://github.com/Sobble-bot/Web-MERN-project-520',
  },
];

const Projects = () => (
  <section className="projects-section" id='projects'>
    <h2>Projects</h2>
    <p>Explore some of my projects below. Feel free to check!</p>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name} 
            </a>
          </h3>
          <p>{project.description}</p>
          <div className="project-info">
            <span className="language">{project.language}</span>
            <span>
            <a href = {project.link} target='_blank' rel='noopener no referrer'>
            <img src={externalLink} alt="External Link" className="external"/>
            </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
