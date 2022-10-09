// import { Card } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./About.css";

export default function About() {
  return (
    <Parallax pages={5}>
      <ParallaxLayer offset={0} speed={1} factor={1} />
      <ParallaxLayer offset={0.2} speed={0.05}>
        <h1 className="about-title">
          This page will features several text boxes with three core paragraphs with photograph
          banners and side images
        </h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={1.5}
        factor={1}
        style={{
          backgroundImage: 'url("magog.JPG")',
          backgroundSize: "cover"
        }}
      />
      <ParallaxLayer sticky={{ start: 0.5, end: 1.0 }}>
        <div className="container">
          <div className="text">
            <h2>Developer</h2>
            <p>
              So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img src="Kieran_mic_pic.jpeg" alt="Kieran holding a microphone speaking to a crowd" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 2.0, end: 2.9 }} style={{ zIndex: "-1" }}>
        <video width="100%" autoPlay muted loop>
          <source src="WoyzeckTrailer.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ParallaxLayer>
      <ParallaxLayer offset={3.2} speed={0.3} factor={0.5}>
        <div className="container">
          <img
            src="AWAD-whale.JPG"
            alt="A ten foot long Orca Whale puppet made from plastic bags"
          />
          <div className="text">
            <h2>Artist</h2>
            <p>
              So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              So here’s a little bit about myself. I’m amazing and awesome and Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={4}>
        <div className="container">
          <div className="text">
            <h2>Life</h2>
            <p>Kieran dunch Likes to hike!</p>
          </div>
          <img src="magog.JPG" alt="Kieran in front of a  glacier lake" />
          <img src="Assiniboine.JPG" alt="Kieran in front of Mount Assiniboine" />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
