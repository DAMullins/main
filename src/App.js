import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
