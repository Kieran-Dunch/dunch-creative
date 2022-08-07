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
            I am a full stack web developer with a unique background as a theatre artist and producer
          </Typography>
          <div id="test">

          </div>
          <p>Did this work</p>
        </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: 275}}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
            I bring my soft skills as a theatre producer into software development, building out-of-the-box solutions for companies and clients alike
          </Typography>
        </CardContent>
        </Card>
        <Card variant="outlined" sx={{minWidth: 275}}>
        <CardContent>
          <Typography sx={{ fontSize: 24 }} backgroundColor="lightgray" color="text.primary" gutterBottom>
            My process begins with a conversation, and thrives in the world of creative problem sovling
          </Typography>
        </CardContent>
        </Card>
      </Box>
  )
}
