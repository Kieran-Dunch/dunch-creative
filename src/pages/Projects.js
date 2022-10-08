import { Card, Grid } from "@mui/material";
import "./Projects.css";

// I want to refactor cardlist to be used here
// add stack in descriptions
// TODO: add proper styling and css animations to the cards
// TODO: add links to the proper hosting pages
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
    <>
      <h1>My Projects</h1>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid
            item
            xs={4}
            key={project.name}
            onClick={(e) => e.target.classList.toggle("flipped")}>
            <Card className="card">
              <h2 className="front">{project.name}</h2>
              <p className="back">{project.desc}</p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
