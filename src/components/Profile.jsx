import { useTranslation } from 'react-i18next';
import './Profile.css';
import jack from '../assets/jack.png';

const Profile = () => {
  const { t, i18n } = useTranslation();


  const resumeLink = i18n.language === 'fr' ? '/CV2025FR.pdf' : '/CV2025.pdf';
  const resumeFileName = i18n.language === 'fr' ? 'Jackson_Tran_CV2025_FR.pdf' : 'Jackson_Tran_CV2025_EN.pdf';

  return (
    <section id="profile" className="profile-section">
      <div className="right-section">
        <img src={jack} alt="Jackson" className="profile-picture" />
      </div>
      <div className="left-section">
        <h3 id="intro">{t('greeting')}</h3>
        <p id="introduction">
          {t('introduction_paragraph1')} <br /> <br />
          {t('introduction_paragraph2')} <br /> <br />
          <a 
            href={resumeLink} 
            className="resume-button" 
            target="_blank" 
            rel="noopener noreferrer" 
            download={resumeFileName}
          >
            {t('resume_button')}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Profile;
