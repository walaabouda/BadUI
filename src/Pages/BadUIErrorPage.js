import React, { useState } from "react";
import "../Styles/BadUIErrorPage.css";

const BadUIErrorPage = () => {
  const [errorSoundPlayed, setErrorSoundPlayed] = useState(false);

  const playErrorSound = () => {
    const sound = document.getElementById("error-sound");
    sound.play();
    setErrorSoundPlayed(true);
  };

  return (
    <div className="bad-ui-container">
      {/* Section de l'image d'erreur */}
      <div className="error-container">
        <img
          src="https://www.example.com/image1.jpg"
          alt="Erreur d'image"
          className="error-image"
        />
        <p className="error-message">
          Oups ! Une erreur est survenue. Essayez encore !
        </p>
      </div>

      {/* Section du GIF animé d'erreur */}
      <div className="gif-error-container">
        <img
          src="https://www.example.com/animated-error.gif"
          alt="Erreur animée"
          className="gif-error"
        />
        <p className="gif-error-message">Vous avez cliqué sur le mauvais bouton !</p>
      </div>

      {/* Bouton qui déclenche le son d'erreur */}
      <audio id="error-sound" src="https://www.example.com/error-sound.mp3" preload="auto"></audio>
      <button onClick={playErrorSound}>
        Cliquez sur le mauvais bouton !
      </button>

      {/* Pop-up d'erreur en plein écran */}
      <div className="popup-error">
        <p>Une erreur est survenue, cliquez partout pour continuer...</p>
      </div>

      {/* Animation de chargement infinie */}
      <div className="loading-container">
        <div className="loading-circle"></div>
        <p>Chargement en cours... Cela pourrait prendre un moment !</p>
      </div>
    </div>
  );
};

export default BadUIErrorPage;
