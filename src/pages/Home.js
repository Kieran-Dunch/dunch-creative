import { Button, Card, Typography } from "@mui/material";
import CardList from "../components/CardList";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <CardList />
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          my: 5,
          mx: 2
        }}>
        <Typography>
          Whether your project involves arts and culture, tech, education or outdoor adventure,
          I&apos;d love to hear from you!
        </Typography>
        <Button
          sx={{
            my: 2,
            color: "white",
            display: "block",
            backgroundColor: "slateblue"
          }}>
          Contact Me
        </Button>
      </Card>
    </div>
  );
}
