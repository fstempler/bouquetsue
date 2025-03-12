import './videoBackground.css'
import { useState } from "react";

const VideoBackground = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "test111") {
      window.location.href = "https://www.google.com";
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
    }
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* Video de fondo */}
      <video
        src="https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      {/* Modal de contraseña */}
      <div className='modal__Container'>
        <h2>Proposal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className='modal__Input'            
          />
          <br />
          <button
            type="submit"
            className='modal__Button'            
          >
            Submit
          </button>
        </form>
        {error && <p style={{ color: "#FFF", marginTop: "10px" }}>{error}</p>}
      </div>
    </div>
  );
};

export default VideoBackground;
