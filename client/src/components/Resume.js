import React from "react";
import Experience from "./Experience";
import ScreenHeading from "./ScreenHeading/ScreenHeading";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Resume = ({ data }) => {
  return (
    <div
      style={{
        paddingY: "10px",
      }}
    >
      <ScreenHeading title="Resume" subHeading="Career Path" />
      {data.slice(0, 5).map((exp, i) => (
        <Experience key={i} data={exp} />
      ))}
      <Typography
        sx={{
          marginTop: "50px",
          textDecoration: "none",
          color: "#fff",
          ":hover": {
            color: "var(--dark-orange)",
            cursor: "pointer",
          },
        }}
        variant="h5"
        component={Link}
        to="https://firebasestorage.googleapis.com/v0/b/portfolio-fazilabs.appspot.com/o/Resume-Brian-Murithi.pdf?alt=media&token=e8f6a23f-e0cb-4ca3-a2b0-e80f3f4a2c37"
        target="_blank"
      >
        View Resume <CallMadeIcon />
      </Typography>
    </div>
  );
};

export default Resume;
