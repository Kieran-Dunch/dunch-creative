// import { Card } from "@mui/material";
import { Box, Card, Typography } from "@mui/material";
import { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    // adding scroll animations, could move this to App.js to make it universal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const slideElements = document.querySelectorAll(".hidden");
    const fadeElements = document.querySelectorAll(".fade");
    const artistFadeElements = document.querySelectorAll(".artist-fade");
    artistFadeElements.forEach((el) => observer.observe(el));
    slideElements.forEach((el) => observer.observe(el));
    fadeElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <Typography variant="h2" className="about-title" sx={{ my: 4 }}>
        About Kieran
      </Typography>
      <Box>
        <Box className="container">
          <Card sx={{ p: "2em", m: "2em", width: "50%", minHeight: "50%" }}>
            <Typography variant="h4" className="fade">
              Developer
            </Typography>
            <Typography variant="h6" sx={{ py: "10px" }} className="fade">
              Kieran Dunch is a full stack web developer with an interesting background. After
              pursuing theatre producing and performing for many years, he turned to an entirely new
              challenge: Software Engineering. One diploma from Le Wagon Web Development Bootcamp
              later, Kieran launched Dunch Creative. Since then he has worked in many different
              roles, such as product owner, consultant, and full stack developer.
            </Typography>
            <Typography variant="h6" className="fade">
              Dunch Creative focuses on work that bridges the gap between live arts and technology.
              Kieran is passionate about using software to unlock the potential for found space art,
              interactive performance and art installation. Want to know more about Kieran&apos;s
              technical skills? Check out his resumé.
            </Typography>
          </Card>
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
          <Typography variant="h4" className="fade artist-title">
            Artist
          </Typography>
          <img
            id="AWAD-whale"
            src="AWAD-whale.JPG"
            alt="A ten foot long Orca Whale puppet made from plastic bags"
            className="artist-fade"
          />
          <Box id="artist-text">
            <Typography variant="h6" className="fade">
              <em>
                Kieran is a Theatre graduate of the University of Victoria, where he specialized in
                acting, directing, and applied theatre. Kieran&apos;s work as a director is focused
                on ensemble-based creation. Kieran is not only an international director/performer
                but is an arts administrator as well. Kieran most recently worked for Geordie
                Theatre as their Associate Producer for several years.
              </em>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="hiking">
        <Box className="container">
          <Card sx={{ p: "50px", m: "50px", width: "50%" }}>
            <Typography variant="h4" className="fade">
              Life
            </Typography>
            <Typography variant="h6" className="fade">
              Kieran isn&apos;t just a coder and artist, he&apos;s also a backcountry camper! On his
              blog Backpacking Boi, Kieran reviews trails and equipment for backcountry camping and
              other outdoor sports. He loves surfing, rock climbing, bouldering and cross-country
              skiing too. In 2022, he was awarded the Gold Duke of Edinburgh&apos;s Award, an
              international award for outdoor activity, volunteer service, physical activity and
              self-improvement.
            </Typography>
          </Card>
          <Box className="stagger hidden">
            <img
              id="notch"
              src="notch.jpg"
              alt="The famous 'notch' of the Skyline Trail in Jasper, Alberta."
            />
            <img
              id="assiniboine"
              src="Assiniboine.JPG"
              alt="Kieran in front of Mount Assiniboine"
              className="stagger hidden"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
