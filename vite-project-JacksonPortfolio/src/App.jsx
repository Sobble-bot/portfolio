import './App.css';
import jack from './assets/jack.jpg';

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">Tan-Jackson Tran</h1>
        <ul className="nav-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="profile" className="profile-section">
        <div className="left-section">
          <h4>Hello, <br></br> My name is Jackson</h4>
          <p>I am an aspiring junior software developper. <br></br>
          My areas of interest are in backend and frontend development.</p>
        </div>
        <div className="right-section">
          <img src={jack} alt="Jackson" className="profile-picture" />
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Jackson Tran. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
