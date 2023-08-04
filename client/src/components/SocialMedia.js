import React from "react";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material/";
import { Box, IconButton } from "@mui/material";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: { sm: "10px", xs: "10px" },
        justifyContent: { sm: "center", xs: "center", md: "space-evenly" },
      }}
    >
      <IconButton
        sx={{ color: "#fff" }}
        onClick={() => window.open("https://twitter.com/_faztech", "_blank")}
      >
        <Twitter />
      </IconButton>
      <IconButton
        sx={{ color: "#fff" }}
        onClick={() =>
          window.open("https://www.linkedin.com/in/brian-murithi/", "_blank")
        }
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        sx={{ color: "#fff" }}
        onClick={() =>
          window.open("https://github.com/brayohmurithidev/", "_blank")
        }
      >
        <GitHub />
      </IconButton>
    </Box>
  );
};

export default SocialMedia;
