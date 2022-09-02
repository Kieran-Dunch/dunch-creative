import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Card } from '@mui/material';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <CardList/>
      <Card>
        <p>Testing</p>
      </Card>
      <Footer/>
    </div>
  );
}

export default App;
