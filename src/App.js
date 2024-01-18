import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contacts />
    </div>
  );
}

export default App;
