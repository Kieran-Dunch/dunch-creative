import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Button, Card, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
