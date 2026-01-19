import { useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/download",
        { url },
        { responseType: "blob" }
      );

      const blob = new Blob([response.data]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = url.includes("playlist") ? "playlist.zip" : "video.mp4";
      link.click();
    } catch (err) {
      alert("Erreur téléchargement");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mini YT Downloader</h1>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Coller l'URL YouTube ici"
        style={{ width: "300px", padding: "5px" }}
      />
      <button
        onClick={handleDownload}
        disabled={loading}
        style={{ marginLeft: "10px", padding: "5px 10px" }}
      >
        {loading ? "Téléchargement..." : "Télécharger"}
      </button>
    </div>
  );
}

export default App;
/*  */