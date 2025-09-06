import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
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

  // ✅ Show 7 if collapsed, else show all
  const displayedAlbums = showAll ? albums : albums.slice(0, 7);

  return (
    <div className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <button
          className="toggle-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show all"}
        </button>
      </div>

      <div className={showAll ? "grid-view" : "carousel-view"}>
        {displayedAlbums.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
