import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
        <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
