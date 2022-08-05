import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer';
import CardList from './components/CardList';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("Home")
  console.log(page)
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      { page === "Home" &&
        <CardList/>
      }
      <Footer/>
    </div>
  );
}

export default App;
