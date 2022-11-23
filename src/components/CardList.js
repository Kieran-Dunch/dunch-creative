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
import LightBulb from "../lotties/blueLightbulb.json";
import Rocket from "../lotties/bluerocket.json";
import Orbit from "../lotties/blue.json";

export default function CardList() {
  useEffect(() => {
    const lightbulb = lottie.loadAnimation({
      container: document.querySelector("#lightbulb"),
      animationData: LightBulb
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
    lightbulb.setSpeed(0.75);

    return () => {
      lightbulb.destroy();
      rocket.destroy();
      orbit.destroy();
    };
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: "50px" }}>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ height: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px" }}>
              I am a full stack web developer with a unique background as a theatre artist and
              producer.
            </Typography>
            <Divider variant="middle" color="white" />
            <CardMedia id="lightbulb" sx={{ m: "75px" }}></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained" sx={{ m: "auto" }}>
                Learn more about me!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ height: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px" }}>
              I bring my soft skills as a theatre producer into software development, building
              out-of-the-box solutions for companies and clients alike.
            </Typography>
            <Divider variant="middle" color="white" />
            <CardMedia id="rocket"></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained" sx={{ m: "auto" }}>
                See some of my projects!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ height: "80vh" }}>
          <CardContent>
            <Typography variant="h6" sx={{ height: "100px", mb: "10px" }}>
              My process begins with a conversation, and thrives in the world of creative problem
              solving.
            </Typography>
            <Divider variant="middle" color="white" />
            <CardMedia id="orbit"></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained" sx={{ m: "auto" }}>
                Start a conversation with me!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
