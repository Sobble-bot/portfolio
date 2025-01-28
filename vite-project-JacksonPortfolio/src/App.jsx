import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <h2>PROFILE</h2>
      <Profile />
      <Projects/>
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
