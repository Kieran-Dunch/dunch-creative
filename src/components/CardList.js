import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import lottie from 'lottie-web';
import { useEffect } from "react";
import Test from '../lotties/108322-circle-chart.json';


export default function CardList() {

  // reusable component, pass it attributes to be shoved through in rows of three
  // for each loop iterating through

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#test"),
      animationData: Test
    })
  }, []);

  return (
      <Box sx={{ display: "flex", justifyContent: "space-around"}}>
        <Card variant="outlined" sx={{minWidth: 275}}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
            This is maybe a lottie animation
          </Typography>
          <div id="test">

          </div>
          <p>Did this work</p>
        </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: 275}}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
            This is maybe a lottie animation
          </Typography>
        </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: 275}}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
            This is maybe a lottie animation
          </Typography>
        </CardContent>
        </Card>
      </Box>
  )
}
