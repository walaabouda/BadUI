import React, { useState } from "react";
import "../Styles/Jeux.css"; // Assurez-vous d'avoir un fichier CSS pour le style

const HorrorGame = () => {
  const [score, setScore] = useState(100); // Score de départ
  const [message, setMessage] = useState(""); // Message pour le feedback
  const [questionNumber, setQuestionNumber] = useState(1); // Numéro de la question

  // Liste des questions avec des films
  const questions = [
    {
      id: 1,
      images: [
        { src: "/Images/H4.jpg", alt: "Film Horreur 1", correct: true }, // Film d'horreur
        { src: "/Images/H5.jpg", alt: "Film Horreur 2", correct: true }, // Film d'horreur
        { src: "/Images/C2.jpg", alt: "Film Comédie", correct: false }, // Film comédie
      ],
    },
    {
      id: 2,
      images: [
        { src: "/Images/H3.jpg", alt: "Film Horreur 3", correct: true },
        { src: "/Images/H2.jpg", alt: "Film Horreur 4", correct: true },
        { src: "/Images/C1.jpg", alt: "Film Comédie", correct: false },
      ],
    },
    {
      id: 3,
      images: [
        { src: "/Images/H9.jpg", alt: "Film Horreur 5", correct: true },
        { src: "/Images/H6.jpg", alt: "Film Horreur 6", correct: true },
        { src: "/Images/C5.jpg", alt: "Film Comédie", correct: false },
      ],
    },
    // Ajoutez d'autres questions ici
  ];

  const handleChoice = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10); // Si le film est comédie, on augmente le score
      setMessage("Bravo, vous avez choisi une comédie ! Score augmente.");
    } else {
      setScore(score - 10); // Si le film est horreur, on diminue le score
      setMessage("Vous avez choisi un film d'horreur ! Score diminue.");
    }

    // Passer à la question suivante
    if (questionNumber < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setMessage("Le jeu est terminé !");
    }
  };

  const currentQuestion = questions[questionNumber - 1];

  return (
    <div className="horror-game">
      <h1 className="title">Quel film choisissez-vous ?</h1>
      <p className="score">Score : {score}</p>
      <p className="feedback">{message}</p>

      <div className="question-container">
        <h2>Question {questionNumber}</h2>
        <div className="image-options">
          {currentQuestion.images.map((image, index) => (
            <div key={index} className="image-option">
              <img
                src={image.src}
                alt={image.alt}
                className="image"
                onClick={() => handleChoice(image.correct)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorrorGame;
