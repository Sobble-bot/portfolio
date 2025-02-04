import './WorkExperience.css'

const WorkExperience = () => {
    const experiences = [
      {
        title: 'Software Engineer Intern',
        company: 'SConcept',
        duration: 'May 2024 - August 2024',
        description:
          'Developed and maintained front-end features using React and Tailwind. Collaborated with colleagues in Agile scrum.',
      }
    ]

return (
    <section id="work" className="work-section">
        <h2>Work Experience</h2>
        <p>Here is a summary of my work experience:</p>
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
