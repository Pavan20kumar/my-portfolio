
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
