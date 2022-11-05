import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import lottie from "lottie-web";
import { useEffect } from "react";
import Discs from "../lotties/108322-circle-chart.json";
import Rocket from "../lotties/116204-flying-rocket-in-the-sky.json";
import Globe from "../lotties/69115-spinning-globe-orange.json";

export default function CardList() {
  // reusable component, pass it attributes to be shoved through in rows of three
  // for each loop iterating through

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#discs"),
      animationData: Discs
    });

    lottie.loadAnimation({
      container: document.querySelector("#rocket"),
      animationData: Rocket
    });

    lottie.loadAnimation({
      container: document.querySelector("#globe"),
      animationData: Globe
    });
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ minWidth: "275px", height: "500px", mx: "2" }}>
          <CardContent>
            <Typography variant="h6">
              I am a full stack web developer with a unique background as a theatre artist and
              producer
            </Typography>
            <Box id="discs"></Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ minWidth: "275px", height: "500px", mx: "2" }}>
          <CardContent>
            <Typography variant="h6">
              I bring my soft skills as a theatre producer into software development, building
              out-of-the-box solutions for companies and clients alike
            </Typography>
            <Box id="rocket"></Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card variant="outlined" sx={{ minWidth: "275px", height: "500px", mx: "2" }}>
          <CardContent>
            <Typography variant="h6">
              My process begins with a conversation, and thrives in the world of creative problem
              solving
            </Typography>
            <Box id="globe"></Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
