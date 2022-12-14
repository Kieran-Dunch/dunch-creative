import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="95%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem"
            }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
              Dunch Creative
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { md: "flex" }, justifyContent: "space-evenly" }}>
            <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>About</Button>
            </Link>
            <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>Projects</Button>
            </Link>
          </Box>
          <Box>
            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>Contact Me</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
