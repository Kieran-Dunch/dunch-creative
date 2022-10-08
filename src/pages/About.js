import { Card } from "@mui/material";

export default function About() {
  return (
    <>
      <h1>
        This page will features several text boxes with three core paragraphs with photograph
        banners and side images
      </h1>
      <Card>
        <h2>Developer</h2>
        <p>
          So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src="Kieran_mic_pic.jpeg" alt="Kieran holding a microphone speaking to a crowd" />
      </Card>
      <Card>
        <h2>Artist</h2>
        <p>
          So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <img src="AWAD-whale.JPG" alt="A ten foot long Orca Whale puppet made from plastic bags" />
        <img src="Woyzeck-touch.JPG" alt="Two dancers touching in a red glowing light" />
        <video width="100%" autoPlay muted>
          <source src="WoyzeckTrailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Card>
      <Card>
        <h2>Life</h2>
        <p>Kieran dunch Likes to hike!</p>
        <img src="magog.JPG" alt="Kieran in front of a  glacier lake" />
        <img src="Assiniboine.JPG" alt="Kieran in front of Mount Assiniboine" />
      </Card>
    </>
  );
}
