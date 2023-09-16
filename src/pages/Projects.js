import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
// styles
import "./Projects.css";

// TODO: add proper styling and css animations to the cards
// TODO: add links to the proper hosting pages
// TODO: change animation to scroll, add background pictures, and hover to lift it off the page
export default function Projects() {
  const projects = [
    {
      name: "Whats for Dinner",
      desc: "Build your own cookbook, share recipes with friends, and more!",
      img: "cover.png",
      url: "https://github.com/Kieran-Dunch/whatsfordinner"
    },
    {
      name: "GrogU",
      desc: "A Star Wars themed airbnb style application. Rent spaceships from across the galaxy!",
      img: "grogu.jpeg",
      url: "https://github.com/Kieran-Dunch/grogu"
    },
    {
      name: "Magic Memory",
      desc: "Play this in-browser matching and memory game!",
      img: "magic-memory.png",
      url: ""
    },
    {
      name: "Remixed",
      desc: "Remixed is an app that uses an algorithm to build a playlist of stories, just for you.",
      img: "remixed.png",
      url: "https://remixedpwa.web.app/home"
    },
    {
      name: "Fix-your-life",
      desc: "Too busy to keep your team on-task during sprints or projects? Fix-your life is here for you!",
      img: "_MG_3186.JPG",
      url: ""
    },
    {
      name: "Finance Tracker",
      desc: "Keep your finances on track with this React application.",
      img: "Assiniboine.JPG",
      url: ""
    },
    {
      name: "Jammming",
      desc: "Quickly add, create and save playlists to your Spotify account! Let's Jam!",
      img: "Assiniboine.JPG",
      url: ""
    }
  ];

  return (
    <Container sx={{ my: 2 }}>
      <Typography variant="h2" sx={{ my: 3 }}>
        My Projects
      </Typography>
      <Grid container spacing={5} sx={{ mb: 3 }}>
        {projects.map((project) => (
          <Grid item xs={4} key={project.name}>
            <Card className="card">
              <CardMedia image={project.img} sx={{ height: 300 }}>
                <Typography variant="h3" className="front" sx={{ p: 2 }}>
                  {project.name}
                </Typography>
                <Typography className="back" variant="body1" sx={{ p: 2 }}>
                  {project.desc}
                </Typography>
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
