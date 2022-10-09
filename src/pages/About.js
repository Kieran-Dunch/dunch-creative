// import { Card } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  return (
    <>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: 'url("Assiniboine.JPG")',
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: 'url("magog.JPG")',
            backgroundSize: "cover"
          }}
        />
        <ParallaxLayer sticky={{ start: 1, end: 2 }}>
          <img src="Kieran_mic_pic.jpeg" alt="Kieran holding a microphone speaking to a crowd" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.05}>
          <h1 className="about-title">
            This page will features several text boxes with three core paragraphs with photograph
            banners and side images
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <p>
            So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </ParallaxLayer>
      </Parallax>
      {/* <h1>
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
    */}
    </>
  );
}
