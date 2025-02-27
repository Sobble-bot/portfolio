import './Footer.css';
import linkedin30 from '../assets/linkedin30.png';
import github30 from '../assets/github30.png';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>© 2025 Tan-Jackson Tran. {t('all_rights_reserved')}</p>
      <div>
        <a href='https://www.linkedin.com/in/tan-jackson-tran-975887338/' rel='noopener no referrer' target="_blank" >
        <img src={linkedin30} alt="LinkedIn" className="linkedin" rel='noopener no referrer' target="_blank" />
        </a>
        <a href='https://github.com/Sobble-bot?tab=repositories' rel='noopener no referrer' target="_blank">
        <img src={github30} alt="GitHub" className="github" rel='noopener no referrer' target="_blank" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;