import { Box, Button, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
import './Footer.css'
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

export default function Footer() {

  const pages = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <footer>
      <Box
        sx={{
          display: "flex",
          flexGrow: "1",
          backgroundColor: "slateblue",
          height: "150px",
          justifyContent: "space-evenly",
          position: "fixed",
          bottom: 0,
        }}
      >
        <div>
          <h2>Dunch Creative: Bringing the arts and tech together</h2>
          <p><em>Copyright Dunch Creative 2022</em></p>
        </div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'inline-block', backgroundColor: "blue" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
        <div>
          <h3>Find me on:</h3>
            <List component={Stack} direction="row">
              <ListItemButton>
                <ListItemIcon>
                  <Email/>
                </ListItemIcon>
                <ListItemText primary="Email"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <GitHub/>
                </ListItemIcon>
                <ListItemText primary="GitHub"/>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <LinkedIn/>
                </ListItemIcon>
                <ListItemText primary="LinkedIn"/>
              </ListItemButton>
            </List>
        </div>
      </Box>
    </footer>
  )
}
