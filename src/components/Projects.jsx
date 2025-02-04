import { useTranslation } from 'react-i18next';
import './Projects.css';
import county from '../assets/county.png';
import firstresponder from '../assets/firstresponder.png';
import workoutrecipe from '../assets/workoutrecipe.png';
import mobileproj from '../assets/mobileproj.png';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('workout_recipe_title'),
      description: t('workout_recipe_description'),
      language: 'C#',
      link: 'https://github.com/Sobble-bot/C--Avalonia-project',
      image: workoutrecipe
    },
    {
      name: t('medical_app_title'),
      description: t('medical_app_description'),
      language: 'Python',
      link: 'https://github.com/Sobble-bot/flask-project-420',
      image: firstresponder
    },
    {
      name: t('book_reading_app_title'),
      description: t('book_reading_app_description'),
      language: 'Kotlin',
      link: 'https://github.com/Sobble-bot/mobile-project-511',
      image: mobileproj
    },
    {
      name: t('us_counties_crime_title'),
      description: t('us_counties_crime_description'),
      language: 'JavaScript',
      link: 'https://github.com/Sobble-bot/Web-MERN-project-520',
      image: county
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>{t('projects_title')}</h2>
      <p>{t('projects_intro')}</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
            </a>
            <p>{project.description}</p>
            <div className="project-info">
              <span className="language">{project.language}</span>
              <span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="code-link"
                >
                  {t('link_to_code')}
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
