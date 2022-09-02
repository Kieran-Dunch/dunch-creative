import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import lottie from 'lottie-web';
import { useEffect } from "react";
import Test from '../lotties/108322-circle-chart.json';
import Rocket from '../lotties/116204-flying-rocket-in-the-sky.json';
import Globe from '../lotties/69115-spinning-globe-orange.json'

export default function CardList() {

  // reusable component, pass it attributes to be shoved through in rows of three
  // for each loop iterating through

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#test"),
      animationData: Test
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
      <Box sx={{ display: "flex", justifyContent: "space-around"}}>
        <Card variant="outlined" sx={{minWidth: "275px", height: "500px"}}>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
              I am a full stack web developer with a unique background as a theatre artist and producer
            </Typography>
            <Box id="test">
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: "275px", height: "500px"}}>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
              I bring my soft skills as a theatre producer into software development, building out-of-the-box solutions for companies and clients alike
            </Typography>
            <Box id="rocket">
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: "275px", height: "500px"}}>
          <CardContent>
            <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
              My process begins with a conversation, and thrives in the world of creative problem sovling
            </Typography>
            <Box id="globe">
            </Box>
          </CardContent>
        </Card>
      </Box>
  )
}
