import './Profile.css';
import jack from '../assets/jack.png';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="right-section">
        <img src={jack} alt="Jackson" className="profile-picture" />
      </div>
      <div className="left-section">
        <h3 id='intro'>Hello, <br /> My name is Jackson</h3>
        <p id ='introduction'>
          Currently a 3rd year student in computer science at Dawson college. <br/> <br/>
          I am fluent in English, French, and Vietnamese.
          My areas of interest include in backend and frontend development. 

          I am a software developer with a passion for innovative software solutions. 
          Seeking opportunities to enhance technical skills and contribute to challenging projects. <br/> <br/>

          <a 
            href='/CV2025.pdf' 
            className='resume-button' 
            target='_blank' 
            rel='noopener noreferrer' 
            download="Jackson_Tran_CV2025.pdf">
            Get My Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Profile;