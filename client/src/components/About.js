import { Box, Typography } from "@mui/material";
import React from "react";
import ScreenHeading from "./ScreenHeading/ScreenHeading";

const About = () => {
  return (
    <Box
      className="fade-in"
      textAlign="justify"
      sx={{
        marginTop: "30px",
      }}
    >
      <ScreenHeading title="About Me" subHeading="Get to know me" />
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        I am a computer science graduate with a passion for web development. I
        currently work as a system technical support at Village HopeCore
        International and completed a software engineering course at Alx Africa.
      </Typography>
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        I find joy in crafting visually appealing websites using platforms like
        WordPress, React.js, Node.js, and Python, focusing on seamless user
        experiences.
      </Typography>
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        Beyond my technical expertise, I find solace and inspiration in the art
        of DJing during my free time. Music fuels my creativity and provides a
        means to connect with others through rhythm and beats. This balance
        between my professional and personal interests enables me to maintain a
        well-rounded perspective and continuously fuels my drive to excel in web
        development.
      </Typography>
      <Typography variant="body1" mt={2} sx={{ fontWeight: 400 }}>
        I look forward to embracing new challenges and creating remarkable
        digital experiences with each project.
      </Typography>
    </Box>
  );
};

export default About;
