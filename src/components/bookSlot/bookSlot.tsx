import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ColorImage from "./../../Images/colorTheme.png";
import Book from "./../../Images/book.png";
import GenerateToken from "../tokenGenerator/generateToken";

const BookSlot = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${ColorImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="tabs for booking slots"
        sx={{ margin: "40px" }}
      >
        <Tab label="Book a Slot in Bangalore" />
        <Tab label="Book a Slot in Chennai" />
      </Tabs>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: tabIndex === 0 ? "block" : "none",
            padding: "20px 40px",
            width: "60%",
          }}
        >
          <GenerateToken branch="Bangalore" />
        </Box>
        <Box
          sx={{
            display: tabIndex === 1 ? "block" : "none",
            padding: "20px 40px",
            width: "60%",
          }}
        >
          <GenerateToken branch="Chennai" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40%",
          }}
        >
          <img
            src={Book}
            alt="Logo"
            style={{
              width: "100%",
              height: "100%",
              padding: "0 30px",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BookSlot;
