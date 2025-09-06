import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Box } from "@mui/material";

function AlbumCard({ image, follows, title, subtitle }) {
  return (
    <Card
      sx={{
        width: 180,
        borderRadius: 2,
        bgcolor: "white",
        overflow: "hidden",
      }}
    >
      {/* Image with overlayed title */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        {/* Overlay Title */}
        <Typography
          variant="subtitle1"
          sx={{
            position: "absolute",
            bottom: 8,
            left: 8,
            color: "white",
            fontWeight: "bold",
            textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Bottom Section */}
      <CardContent sx={{ textAlign: "center", p: 1 }}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          sx={{
            bgcolor: "black",
            color: "white",
            fontSize: "12px",
            fontWeight: 500,
            borderRadius: "16px",
            mb: 1,
          }}
        />
        <Typography
          variant="body2"
          sx={{ fontSize: "14px", fontWeight: 500 }}
        >
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;
