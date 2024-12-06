import React, { useState, useEffect } from 'react';

const Sortie = () => {
  const [countdown, setCountdown] = useState(10);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let countdownInterval;

    if (isModalVisible && countdown > 0) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsButtonDisabled(false);
      setIsModalVisible(false);
      setCountdown(10);
    }

    return () => clearInterval(countdownInterval);
  }, [countdown, isModalVisible]);

  const handleExitButtonClick = () => {
    setIsModalVisible(true);
    setIsButtonDisabled(true);
    // Play the modal sound (you can replace it with actual audio control if needed)
    //const modalSound = new Audio('public/Sounds/S1.mp3');
    //modalSound.play();
  };

  return (
    <div>
      <div className={`modal ${isModalVisible ? 'show' : ''}`}>
        <div className="modal-text">Êtes-vous sûr ? Cliquez à nouveau dans {countdown} secondes!</div>
      </div>

      <button
        className="exit-btn"
        onClick={handleExitButtonClick}
        disabled={isButtonDisabled}
      >
        Quitter le musée
      </button>

      <div className="countdown" id="timer">
        Prochain essai : {countdown}s
      </div>

      <div className="icon icon-1">
        <i className="fas fa-skull"></i>
      </div>
      <div className="icon icon-2">
        <i className="fas fa-spider"></i>
      </div>
      <div className="icon icon-3">
        <i className="fas fa-ghost"></i>
      </div>
      <div className="icon icon-4">
        <i className="fas fa-cat"></i>
      </div>
      <div className="icon icon-5">
        <i className="fas fa-dragon"></i>
      </div>
      <div className="icon icon-6">
        <i className="fas fa-crow"></i>
      </div>
      <div className="icon icon-7">
        <i className="fas fa-bone"></i>
      </div>
      <div className="icon icon-8">
        <i className="fas fa-biohazard"></i>
      </div>

      {/* Background and Modal Sounds */}
      <audio id="background-audio" loop>
        <source src="audio 3.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Sortie;
