import './Profile.css';
import jack from '../assets/jack.jpg';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <div className="left-section">
        <h4>Hello, <br /> My name is Jackson</h4>
        <p>
          I am an aspiring junior software developer. <br />
          My areas of interest are in backend and frontend development.
        </p>
      </div>
      <div className="right-section">
        <img src={jack} alt="Jackson" className="profile-picture" />
      </div>
    </section>
  );
};

export default Profile;