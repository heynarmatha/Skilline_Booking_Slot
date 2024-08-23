import React from "react";
import { Box, Button } from "@mui/material";
import LandingImage from "./../../Images/background.png";
import Logo from "./../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate = useNavigate();
  const handleBookSlotClick = () => {
    navigate("/bookSlot");
  };
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${LandingImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "150px", height: "auto" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <Box sx={{ cursor: "pointer" }}>Home</Box>
          <Box sx={{ cursor: "pointer" }}>Blog</Box>
          <Box sx={{ cursor: "pointer" }}>Services</Box>
          <Box sx={{ cursor: "pointer" }}>About Us</Box>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#F48C06",
              fontSize: "13px",
              color: "white",
              padding: "8px 20px",
            }}
            onClick={handleBookSlotClick}
          >
            Book a slot
          </Button>
        </Box>
      </Box>
      <Box sx={{ padding: "20px 40px", marginTop: "6rem", width: "50%" }}>
        <h1 style={{ marginBottom: "30px" }}>Book Your Exam Hall Slot</h1>
        <h1>
          Secure a slot for your upcoming college or public exam with ease!
        </h1>
        <p style={{ color: "grey", lineHeight: "1.5rem" }}>
          Simplify your exam preparation with our easy online booking system.
          Trust us to deliver an exceptional exam experience tailored to your
          needs.
        </p>
      </Box>
    </Box>
  );
};

export default LandingScreen;
