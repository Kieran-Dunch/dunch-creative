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
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem"
            }}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Dunch Creative
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly"
            }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "slateblue"
              }}>
              <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
                About
              </Link>
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                backgroundColor: "slateblue"
              }}>
              <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
                Projects
              </Link>
            </Button>
          </Box>
          <Box>
            <Button sx={{ my: 2, color: "white", display: "block", backgroundColor: "slateblue" }}>
              <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
                Contact Me
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
