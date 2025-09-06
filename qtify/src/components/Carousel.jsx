import React, { useRef } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function Carousel({ children }) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300; // how much to scroll per click
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Left Arrow */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          left: -20,
          top: "40%",
          bgcolor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          zIndex: 2,
        }}
      >
        <ArrowBackIosNew />
      </IconButton>

      {/* Scrollable Row */}
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          p: 1,
        }}
      >
        {children}
      </Box>

      {/* Right Arrow */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          right: -20,
          top: "40%",
          bgcolor: "rgba(0,0,0,0.5)",
          color: "white",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          zIndex: 2,
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}

export default Carousel;
