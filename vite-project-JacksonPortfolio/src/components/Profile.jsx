import './Profile.css';
import jack from '../assets/jack.jpg';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="left-section">
        <h3 id='intro'>Hello, <br /> My name is Jackson</h3>
        <p id ='introduction'>
          Currently a 3rd year student in computer science at Dawson college. <br/> <br/>

          My areas of interest include in backend and frontend development. <br/>

          I am software developer with a passion for innovative software solutions. <br/>
          Seeking opportunities to enhance technical skills and contribute to challenging projects. 

        </p>
      </div>
      <div className="right-section">
        <img src={jack} alt="Jackson" className="profile-picture" />
      </div>
    </section>
  );
};

export default Profile;