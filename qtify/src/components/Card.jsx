import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip
} from "@mui/material";

function AlbumCard({ image, follows, title }) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        bgcolor: "#121212",
        color: "white",
        maxWidth: 200,
        minWidth: 160,
        width: "100%",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        overflow: "hidden",
      }}
    >
      {/* Album Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            aspectRatio: "1 / 1", // keeps square layout
            objectFit: "cover",
          }}
        />
        {/* Followers Badge */}
        <Chip
          label={`${follows} Follows`}
          size="small"
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "black",
            color: "white",
            borderRadius: "8px",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
          }}
        />
      </Box>

      {/* Title */}
      <CardContent sx={{ textAlign: "center", p: 1 }}>
        <Typography
          variant="body1"
          noWrap
          sx={{
            fontWeight: 500,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
