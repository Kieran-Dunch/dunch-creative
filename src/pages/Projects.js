import { Card, Container, Grid, Typography } from "@mui/material";
// styles
import "./Projects.css";

// TODO: add proper styling and css animations to the cards
// TODO: add links to the proper hosting pages
// TODO: change animation to scroll, add background pictures, and hover to lift it off the page
export default function Projects() {
  const projects = [
    {
      name: "Whats for Dinner",
      desc: "Build your own cookbook, share recipes with friends, and more!"
    },
    {
      name: "GrogU",
      desc: "A Star Wars themed airbnb style application. Rent spaceships from across the galaxy!"
    },
    {
      name: "Magic Memory",
      desc: "Play this in-browser matching and memory game!"
    },
    {
      name: "Remixed",
      desc: "Remixed is an app that uses an algorithm to build a playlist of stories, just for you."
    },
    {
      name: "Fix-your-life",
      desc: "Too busy to keep your team on-task during sprints or projects? Fix-your life is here for you!"
    },
    {
      name: "Finance Tracker",
      desc: "Keep your finances on track with this React application."
    }
  ];

  return (
    <Container sx={{ height: "82.5vh" }}>
      <Typography variant="h2" sx={{ my: 4 }}>
        My Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid
            item
            xs={4}
            key={project.name}
            onClick={(e) => e.target.classList.toggle("flipped")}>
            <Card className="card">
              <Typography variant="h3" className="front">
                {project.name}
              </Typography>
              <Typography className="back" variant="body1">
                {project.desc}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
