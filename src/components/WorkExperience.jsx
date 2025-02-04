import { useTranslation } from 'react-i18next';
import './WorkExperience.css';

const WorkExperience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: t('software_engineer_intern'),
      company: t('sconcept'),
      duration: t('work_experience_duration'),
      description: t('work_experience_description'),
    },
  ];

  return (
    <section id="work" className="work-section">
      <h2>{t('work_experience_title')}</h2>
      <p>{t('work_experience_summary')}</p>
      <div className="work-grid">
        {experiences.map((experience, index) => (
          <div key={index} className="work-card">
            <h3>{experience.title}</h3>
            <h4>{experience.company}</h4>
            <p className="duration">{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
