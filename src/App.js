import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
    <Navbar/>
    <Homepage/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Testimonials/>
    <Resume/>  
    <Contact/>
    
    </>
  );
}

export default App;
