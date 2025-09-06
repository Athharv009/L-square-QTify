import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
