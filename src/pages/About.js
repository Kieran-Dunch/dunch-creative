// import { Card } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./About.css";

export default function About() {
  return (
    <Parallax pages={5} className="background">
      <ParallaxLayer offset={0} speed={1} factor={1} />
      <ParallaxLayer offset={0.2} speed={0.05}>
        <h1 className="about-title">
          This page will features several text boxes with three core paragraphs with photograph
          banners and side images
        </h1>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 0.5, end: 0.5 }}>
        <div className="container">
          <div>
            <h2>Developer</h2>
            <p className="text">
              Kieran Dunch is a full stack web developer with an interesting background. After
              pursuing theatre producing and performing as an artist for many years, he turned to an
              entirely new challenge: Software Engineering. One whirlwind bootcamp education from Le
              Wagon later, Kieran launched Dunch Creative. His well-developed communication skills
              make him an excellent addition to any team, and he specializes in making software
              understandable for his non-technical clients. If you are looking for someone with both
              interpersonal skills and technical know-how, Kieran is the person for your team.
            </p>
            <p className="text">
              Dunch Creative focuses on work that bridges the gap between live arts and technology.
              Kieran is passionate about using software to unlock the potential for found space art,
              interactive performance and art installation. His background in education makes him a
              great consultant for arts education initiatives as well. Want to know more about
              Kieran&apos;s technical skills? Check out his resumé.
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
          <div>
            <h2>Artist</h2>
            <p className="text">
              Kieran is a Theatre graduate of the University of Victoria, where he specialized in
              acting, directing, and applied theatre. Kieran&apos;s work as a director is focused on
              ensemble-based creation, typically in an immersive environment. In Woyzeck Experiment,
              Kieran used the source text from Georg Buchner&apos;s text to facilitate the creation
              of an immersive movement piece devised by the performers. Soon after on an exchange to
              Bangkok University, Kieran explored the history of Thai Democracy through the creation
              of Ghostlight, a children&apos;s style reinterpretation of historical events lit only
              by the flashlights of the performers/audience. The show was performed entirely in
              Thai. Most recently, Kieran co-directed <em>Are We All Dead?</em>, a performance piece
              using theatre strategies from 1930&apos;s Canadian agit-prop to address the climate
              crisis.
            </p>
            <p className="text">
              Kieran is not only an international director/performer but is an arts administrator as
              well. Most recently Kieran worked as the Managing Producer of Theatre SKAM&apos;s
              Pop-Up Theatre in Victoria, BC. He then worked for Geordie Theatre as their Associate
              Producer for several years.
            </p>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={1}
        style={{
          backgroundImage: 'url("magog.JPG")',
          backgroundSize: "cover"
        }}
      />
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
