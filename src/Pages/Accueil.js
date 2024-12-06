import React, { useState, useEffect } from "react";
import "../Styles/Accueil.css";

const Accueil = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const audio = new Audio("/Sounds/Sound1.mp3");

  // Fonction pour générer un message d'erreur aléatoire et jouer le son
  useEffect(() => {
    const tryToPlayAudio = () => {
      audio
        .play()
        .then(() => {
          console.log("Audio joué avec succès");
        })
        .catch((error) => {
          console.error("Erreur lors de la lecture du son :", error);
        });
    };

    // Lire l'audio dès que le composant est monté
    tryToPlayAudio();

    // Générer les messages d'erreur toutes les 2 secondes
    const errorTimer = setInterval(() => {
      const errorMessages = [
        "Erreur inattendue !",
        "Champ vide ! Mais il est déjà rempli.",
        "Nom non valide, essayez à nouveau.",
        "Une erreur est survenue, mais nous n'avons aucune idée de ce que c'est.",
        "Alerte rouge ! Veuillez ne pas faire attention.",
        "Oh non, quelque chose a explosé !"
      ];
      setErrorMessage(errorMessages[Math.floor(Math.random() * errorMessages.length)]);
      audio.play().catch((error) => console.error("Erreur lors de la lecture du son :", error));
    }, 2000);

    // Nettoyer l'intervalle après un démontage
    return () => {
      clearInterval(errorTimer);
    };
  }, []);

  // Fonction de gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      setErrorMessage("Le champ est vide ! Veuillez saisir quelque chose.");
    } else {
      setErrorMessage("Champ vide ! Mais il est déjà rempli.");
    }
  };

  return (
    <div className="accueil">
      <h1 className="title">Bienvenue dans le Chaos Interface !</h1>
      <p className="intro">Préparez-vous à un voyage déroutant à travers des pages déstabilisantes.</p>

      <div className="container">
        <a href="/reseaux" className="btn chaos-btn">Réseaux</a>
        <a href="/jeux" className="btn chaos-btn">Jeux</a>
        <a href="/outil" className="btn chaos-btn">Outils</a>
        <a href="/boutique" className="btn chaos-btn">Boutique</a>
        <a href="/musee" className="btn chaos-btn">Musée</a>
        <a href="/Sortie" className="btn chaos-btn">Sortie</a>

      </div>

      <div className="flashing-box">
        <p className="flashing-text">ATTENTION ! Vous allez être choqué !</p>
      </div>

      {errorMessage && (
        <div>
          <p className="error-message">{errorMessage}</p>
          <img
            src="https://media.giphy.com/media/HPoBIkrkxIuiY/giphy.gif"
            alt="Fantôme"
            className="ghost-image"
          />
        </div>
      )}

      <div className="image-section">
        <img
          src="https://media.giphy.com/media/HPoBIkrkxIuiY/giphy.gif"
          alt="Fantôme"
          className="ghost-image"
        />
      </div>

      <form className="bad-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre nom"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn-submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Accueil;
