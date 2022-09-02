import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Footer from './components/Footer';
import CardList from './components/CardList';
import { Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import ContactMe from './components/ContactMe';

function App() {


  const [page, setPage] = useState("contact")

  return (
    <div className="App">
      <NavBar/>
      { page === "contact" &&
        <ContactMe/>
      }
      { page === "home" &&
      <>
      <Header/>
      <CardList/>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          my: 5,
          mx: 2,
        }}
      >
        <Typography>
          Whether your project involves arts and culture, tech, education
          or outdoor adventure, I'd love to hear from you!
        </Typography>
        <Button
          sx={{ my: 2, color: 'white', display: 'block', backgroundColor: "slateblue" }}
        >
          Contact Me
        </Button>
      </Card>
      </>
      }
      <Footer/>
    </div>
  );
}

export default App;
