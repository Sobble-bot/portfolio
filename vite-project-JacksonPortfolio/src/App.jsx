import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <h2>PROFILE</h2>
      <Profile />
      <Projects/>
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
