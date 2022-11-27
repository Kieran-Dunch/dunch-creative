import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import lottie from "lottie-web";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Speech from "../lotties/NavyBlue.json";
import Rocket from "../lotties/bluerocket.json";
import Orbit from "../lotties/blue.json";

// components is not using responsive units of measurement

export default function CardList() {
  useEffect(() => {
    const speech = lottie.loadAnimation({
      container: document.querySelector("#speech"),
      animationData: Speech
    });

    const rocket = lottie.loadAnimation({
      container: document.querySelector("#rocket"),
      animationData: Rocket
    });

    const orbit = lottie.loadAnimation({
      container: document.querySelector("#orbit"),
      animationData: Orbit
    });

    orbit.setSpeed(0.25);
    rocket.setSpeed(0.75);

    return () => {
      speech.destroy();
      rocket.destroy();
      orbit.destroy();
    };
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: "50px" }}>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ maxHeight: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px", py: "20px" }}>
              I am a full stack web developer with a unique background as a theatre artist and
              producer.
            </Typography>
            <Divider variant="middle" color="white" sx={{ mt: "2em" }} />
            <CardMedia id="speech"></CardMedia>
            <CardActions sx={{ pb: "2em" }}>
              <Link to="/about" style={{ textDecoration: "none", color: "white", margin: "auto" }}>
                <Button size="large" color="primary" variant="contained" sx={{ m: "auto" }}>
                  Learn more about me!
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ maxHeight: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px", py: "20px" }}>
              Bringing my soft skills as a theatre producer into software, I build out-of-the-box
              solutions for my clients.
            </Typography>
            <Divider variant="middle" color="white" sx={{ mt: "2em" }} />
            <CardMedia id="rocket"></CardMedia>
            <CardActions>
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white", margin: "auto" }}>
                <Button size="large" color="primary" variant="contained" sx={{ m: "auto" }}>
                  See some of my projects!
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ maxHeight: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px", py: "20px" }}>
              My process begins with a conversation, and thrives in the world of creative problem
              solving.
            </Typography>
            <Divider variant="middle" color="white" sx={{ mt: "2em" }} />
            <CardMedia id="orbit"></CardMedia>
            <CardActions>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "white", margin: "auto" }}>
                <Button size="large" color="primary" variant="contained">
                  Start a conversation with me!
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
