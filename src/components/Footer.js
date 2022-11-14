import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from "@mui/material";
import "./Footer.css";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

// TODO: footer doesn't stick

export default function Footer() {
  const pages = ["Home", "About", "Projects", "Contact"];

  return (
    // <Box position="sticky" sx={{ width: "100%", position: "absolute", bottom: "0" }}>
    <footer>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "background.paper",
          height: "100px",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
        <Box>
          <Typography>
            <em>Copyright Dunch Creative 2022</em>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}>
          {pages.map((page) => (
            <Button variant="contained" key={page}>
              {page}
            </Button>
          ))}
        </Box>
        <Box>
          <Typography variant="h6">Find me on:</Typography>
          <List component={Stack} direction="row">
            <ListItemButton>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </footer>
    // </Box>
  );
}
