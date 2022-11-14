import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import lottie from "lottie-web";
import { useEffect } from "react";
import LightBulb from "../lotties/blueLightbulb.json";
import Rocket from "../lotties/bluerocket.json";
import Orbit from "../lotties/blue.json";

export default function CardList() {
  // reusable component, pass it attributes to be shoved through in rows of three
  // for each loop iterating through

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

    return () => {
      lightbulb.destroy();
      rocket.destroy();
      orbit.destroy();
    };
  }, []);

  return (
    <Grid container spacing={3} sx={{ p: "50px" }}>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent sx={{ height: "80vh" }}>
            <Typography variant="h6">
              I am a full stack web developer with a unique background as a theatre artist and
              producer.
            </Typography>
            <CardMedia id="lightbulb" style={{ margin: "75px" }}></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained">
                Learn more about me!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent sx={{ height: "80vh" }}>
            <Typography variant="h6">
              I bring my soft skills as a theatre producer into software development, building
              out-of-the-box solutions for companies and clients alike.
            </Typography>
            <CardMedia id="rocket"></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained" bottom>
                See some of my projects!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined">
          <CardContent sx={{ height: "80vh" }}>
            <Typography variant="h6">
              My process begins with a conversation, and thrives in the world of creative problem
              solving.
            </Typography>
            <CardMedia id="orbit"></CardMedia>
            <CardActions>
              <Button size="large" color="primary" variant="contained">
                Start a conversation with me!
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
