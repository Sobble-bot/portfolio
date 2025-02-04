import { useTranslation } from 'react-i18next';
import './Profile.css';
import jack from '../assets/jack.png';

const Profile = () => {
  const { t } = useTranslation();

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
            href="/CV2025.pdf" 
            className="resume-button" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Jackson_Tran_CV2025.pdf"
          >
            {t('resume_button')}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Profile;
