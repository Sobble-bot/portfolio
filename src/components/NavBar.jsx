import { useTranslation } from 'react-i18next';
import './NavBar.css';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  
  return (
<nav className="navbar">
  <h1 className="logo">Tan-Jackson Tran</h1>
  <ul className="nav-links">
    <li><a href="#profile">{t('profile')}</a></li>
    <li><a href="#work">{t('work_experience')}</a></li>
    <li><a href="#projects">{t('projects')}</a></li>
    <li><a href="#skills">{t('skills')}</a></li>
    <li><a href="#contacts">{t('contact')}</a></li>
  </ul>
  <div className="language-switcher">
    <button className="lang-button" onClick={() => i18n.changeLanguage('en')}>EN</button>
    <button className="lang-button" onClick={() => i18n.changeLanguage('fr')}>FR</button>
  </div>
</nav>
  );
};

export default NavBar;
