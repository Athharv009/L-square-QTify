import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography, Button } from "@mui/material";
import AlbumCard from "./Card";
import Carousel from "./Carousel"; // wrapper with arrows
import "./Section.css";

function Section({ title, fetchUrl }) {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const response = await axios.get(fetchUrl);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }
    fetchAlbums();
  }, [fetchUrl]);

  return (
    <div className="section">
      {/* Header */}
      <div className="section-header">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Button
          sx={{ color: "#3ef33e", fontWeight: 600, textTransform: "none" }}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show all"}
        </Button>
      </div>

      {/* Albums */}
      {showAll ? (
        // 🔹 Responsive Grid
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid
              item
              xs={12}   // full width on mobile
              sm={6}    // 2 per row on small screens
              md={4}    // 3 per row on medium
              lg={3}    // 4 per row on large
              xl={2}    // 6 per row on extra-large
              key={album.id}
            >
              <AlbumCard
                image={album.image}
                follows={album.follows}
                title={album.title}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        // 🔹 Responsive Carousel
        <Carousel>
          {albums.map((album) => (
            <div
              key={album.id}
              style={{
                flex: "0 0 auto",
                width: "160px",         // fixed card width
                maxWidth: "90vw",       // don’t overflow on small screens
                marginRight: "16px",
              }}
            >
              <AlbumCard
                image={album.image}
                follows={album.follows}
                title={album.title}
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Section;
