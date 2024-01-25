import './App.css';
import Structure from './components/Structure';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './pages/Navbar';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Structure/>     

      </BrowserRouter>
    </div>
  );
}

export default App;
