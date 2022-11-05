// import { Card } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import "./About.css";

// TODO: convert all of this text and elements into MUI components
// TODO: choose a fucking background for the site

export default function About() {
  useEffect(() => {
    // adding scroll animations, could move this to App.js to make it universal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Typography variant="h2" className="about-title stagger hidden">
        About Kieran
      </Typography>
      <Box>
        <Box className="container">
          <Box>
            <Typography variant="h4">Developer</Typography>
            <Typography className="hidden">
              Kieran Dunch is a full stack web developer with an interesting background. After
              pursuing theatre producing and performing as an artist for many years, he turned to an
              entirely new challenge: Software Engineering. One whirlwind bootcamp education from Le
              Wagon later, Kieran launched Dunch Creative. His well-developed communication skills
              make him an excellent addition to any team, and he specializes in making software
              understandable for his non-technical clients. If you are looking for someone with both
              interpersonal skills and technical know-how, Kieran is the person for your team.
            </Typography>
            <Typography className="hidden">
              Dunch Creative focuses on work that bridges the gap between live arts and
              technology.Kieran is passionate about using software to unlock the potential for found
              space art, interactive performance and art installation. His background in education
              makes him a great consultant for arts education initiatives as well. Want to know more
              about Kieran&apos;s technical skills? Check out his resumé.
            </Typography>
          </Box>
          <img
            src="Kieran_mic_pic.jpeg"
            alt="Kieran holding a microphone speaking to a crowd"
            className="stagger hidden"
          />
        </Box>
      </Box>
      <Box className="artist container">
        <Box className="background-video">
          <video width="100%" autoPlay muted loop>
            <source src="WoyzeckTrailer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Box id="artist-text" className="hidden">
          <img
            src="AWAD-whale.JPG"
            alt="A ten foot long Orca Whale puppet made from plastic bags"
          />
          <Box>
            <Typography variant="h4">Artist</Typography>
            <Typography>
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
            </Typography>
            <Typography>
              Kieran is not only an international director/performer but is an arts administrator as
              well. Most recently Kieran worked as the Managing Producer of Theatre SKAM&apos;s
              Pop-Up Theatre in Victoria, BC. He then worked for Geordie Theatre as their Associate
              Producer for several years.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="hiking">
        <Box className="container">
          <Box className="stagger hidden">
            <Typography variant="h4">Life</Typography>
            <Typography>
              Kieran isn&apos;t just a coder and artist, he&apos;s also a backcountry camper! On his
              blog Backpacking Boi, Kieran reviews trails and equipment for backcountry camping and
              other outdoor sports. He loves surfing, rock climbing, bouldering and cross-country
              skiing too. In 2022, he was awarded the Gold Duke of Edinburgh&apos;s Award, an
              international award for outdoor activity, volunteer service, physical activity and
              self-improvement.
            </Typography>
          </Box>
          <img src="notch.jpg" alt="Kieran in front of a glacier lake" className="stagger hidden" />
          <img
            src="Assiniboine.JPG"
            alt="Kieran in front of Mount Assiniboine"
            className="stagger hidden"
          />
        </Box>
      </Box>
    </>
  );
}
