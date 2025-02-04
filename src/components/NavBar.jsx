import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Tan-Jackson Tran</h1>
      <ul className="nav-links">
        <li><a href="#profile">Profile</a></li>
        <li><a href='#work'>Work Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contacts">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;