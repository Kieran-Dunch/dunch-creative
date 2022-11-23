import { Typography } from "@mui/material";
import Typed from "react-typed";
import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <Typography variant="h1">
        <Typed strings={["Dunch Creative:"]} typeSpeed={40}></Typed>
      </Typography>
      <Typography variant="h2">
        <Typed strings={["^2370 Bringing the Arts and Tech together."]} typeSpeed={40}></Typed>
      </Typography>
    </header>
  );
}
