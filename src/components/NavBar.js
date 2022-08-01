import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const pages = ['Home', 'About', 'Projects'];

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="95%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Dunch Creative
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-evenly" }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', backgroundColor: "slateblue" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Button
              sx={{ my: 2, color: 'white', display: 'block', backgroundColor: "slateblue" }}
            >
              Contact me
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
