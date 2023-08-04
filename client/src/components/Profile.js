import { Box, Typography } from "@mui/material";
import React from "react";
import fazitech from "../assets/imgs/fazitech.png";
import SocialMedia from "./SocialMedia";

const Profile = ({ isActive, menus }) => {
  return (
    <Box className="profile">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "250px",
            borderRadius: "50%",
            backgroundSize: "cover",
            backgroundImage: `url(${fazitech})`,
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box my={2} textAlign="center">
          <Typography
            className="title-heading"
            variant="h4"
            component="h3"
            sx={{ fontWeight: 900, color: "var(--secondary-color)" }}
          >
            BRIAN MURITHI
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            (FaziLabs)
          </Typography>
          <Typography
            variant="h6"
            component="h5"
            my={1}
            sx={{ fontWeight: 900, color: "var(--secondary-color)" }}
          >
            System Technical Support | Village hopecore International
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            I combine creativity and technical expertise to build innovative and
            user-friendly websites that exceed client expectations.
          </Typography>
        </Box>
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default Profile;
