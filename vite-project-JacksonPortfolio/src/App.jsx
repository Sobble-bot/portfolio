import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Profile />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
