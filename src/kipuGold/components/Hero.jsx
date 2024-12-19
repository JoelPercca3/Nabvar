import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const GoldPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#fff",
        px: 2,
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
        }}
      >
        A gold-backed currency – not just a token.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#555",
          maxWidth: { xs: "100%", sm: "600px" },
          mb: 4,
          lineHeight: 1.6,
          fontSize: { xs: "0.9rem", sm: "1rem" },
        }}
      >
        Kipu gold (KAU) is a digital currency. Each KAU is backed by one gram of
        fine gold stored in fully insured and{" "}
        <Link
          href="#"
          underline="hover"
          sx={{ color: "#007BFF", fontWeight: "500" }}
        >
          audited
        </Link>{" "}
        vaults, in your name. KAU lets you spend, trade, send and earn physical
        gold, anywhere in the world.
      </Typography>

      <PlayCircleFilledIcon
        sx={{
          fontSize: { xs: 40, sm: 50, md: 60 },
          color: "#007BFF",
          mb: 4,
          cursor: "pointer",
        }}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{
          textTransform: "none",
          backgroundColor: "#007BFF",
          px: { xs: 2, sm: 4 },
          py: 1.5,
          fontSize: { xs: "14px", sm: "16px" },
          borderRadius: "8px",
          ":hover": { backgroundColor: "#0056b3" },
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};

export default GoldPage;
