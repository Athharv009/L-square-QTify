import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter } from "react-router-dom";
import Section from "./components/Section";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Section
  title="Top Albums"
  fetchUrl="https://qtify-backend-labs.crio.do/albums/top"
/>
<Section
  title="New Albums"
  fetchUrl="https://qtify-backend-labs.crio.do/albums/new"
/>
    </BrowserRouter>
  );
}

export default App;
