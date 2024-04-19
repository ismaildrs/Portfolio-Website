import './App.css';
import Education from './components/Education/Education';
import Hero from './components/Hero/Hero';
import Languages from './components/Languages/Languages';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <div className="margin">
        <Navbar/>
        <Hero/>
        <Education/>
        <Languages/>
        <Skills />
      </div>
    </div>
  );
}

export default App;
