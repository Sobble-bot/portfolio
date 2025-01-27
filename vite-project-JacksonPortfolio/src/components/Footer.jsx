import './Footer.css';
import linkedin30 from '../assets/linkedin30.png';
import github30 from '../assets/github30.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Jackson Tran. All Rights Reserved.</p>
      <div>
        <img src={linkedin30} alt="LinkedIn" className="linkedin" />
        <img src={github30} alt="GitHub" className="github" />
      </div>
    </footer>
  );
};

export default Footer;