import { useTranslation } from 'react-i18next';
import './Contacts.css';


const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-section" id="contacts">
      <h2>{t('contact')}</h2>
      <p>{t('contact_message')}</p>
      <a href="mailto:tanjacksontran@gmail.com" className="email-link">
        tanjacksontran@gmail.com
      </a>
    </section>
  );
};

export default Contact;
