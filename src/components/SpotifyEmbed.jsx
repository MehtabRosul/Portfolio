import React from "react";

const SpotifyEmbed = () => {
  const styles = {
    wrapper: {
      position: "relative",
      width: "200%",
      paddingBottom: "15.25%",  // 16:9 aspect ratio (for video embeds)
      height: 0,
      overflow: "hidden",
      maxWidth: "300px",         // Maximum width for larger screens
      margin: "0 auto",         // Center-align horizontally
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",  // Full width
      height: "100%", // Full height
      border: "none", // No border around the iframe
      zIndex: 10,      // Ensure it's above other elements
    },
  };

  return (
    <div style={styles.wrapper}>
      <iframe
        src="https://open.spotify.com/embed/playlist/0lD8juogbXloPSoZ7PQG65?utm_source=generator&theme=0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={styles.iframe}
        title="Spotify Playlist"
      />
    </div>
  );
};

export default SpotifyEmbed;
