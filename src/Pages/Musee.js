import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Musee.css'; // Importation du fichier CSS

const Musee = () => {
    const glitchSound = useRef(null);
    const errorSound = useRef(null);
    const validateButton = useRef(null);
    const timer = useRef(null);
    
    // State to track whether user has interacted
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleUserInteraction = () => {
        setHasInteracted(true); // Set the interaction state to true
    };

    useEffect(() => {
        // Wait for user interaction before allowing audio play
        const glitchSoundHandler = () => {
            if (hasInteracted && Math.random() > 0.95 && glitchSound.current) {
                glitchSound.current.currentTime = 0;
                glitchSound.current.play();
            }
        };

        const errorSoundHandler = () => {
            if (hasInteracted && errorSound.current) {
                errorSound.current.currentTime = 0;
                errorSound.current.play();
                alert("Service indisponible, merci de réessayer dans 7 ans.");
            }
        };

        if (validateButton.current) {
            validateButton.current.addEventListener('click', errorSoundHandler);
        }

        document.addEventListener('mousemove', glitchSoundHandler);

        let yearsLeft = 7;
        const countdownInterval = setInterval(() => {
            if (yearsLeft > 0 && timer.current) {
                yearsLeft--;
                timer.current.textContent = `${yearsLeft} ans`;
            }
        }, 1000);

        // Cleanup function
        return () => {
            if (validateButton.current) {
                validateButton.current.removeEventListener('click', errorSoundHandler);
            }
            document.removeEventListener('mousemove', glitchSoundHandler);
            clearInterval(countdownInterval);
        };
    }, [hasInteracted]); // Add `hasInteracted` as a dependency to re-run the effect when the user interacts.

    return (
        <div className="bank-interface" onClick={handleUserInteraction}>
            <header className="header">
                <h1>Le cauchemar des interfaces bancaires</h1>
            </header>
            <main>
                <section className="account-simulator">
                    <h2>Votre solde de compte</h2>
                    <p className="balance">Solde: -10,000,000 euros</p>
                </section>
                <section className="form-section">
                    <h2>Formulaire bancaire</h2>
                    <form>
                        <label htmlFor="ancestor-phone">Numéro de téléphone de votre ancêtre</label>
                        <input type="tel" id="ancestor-phone" name="ancestor-phone" required />
                        <br />
                        <button type="submit" className="validate-button" ref={validateButton}>Valider</button>
                    </form>
                </section>
            </main>
            <div className="countdown">
                <p id="timer" ref={timer}>7 ans</p>
            </div>
            <footer>
                <p>Service indisponible, merci de réessayer dans 7 ans.</p>
            </footer>
            {/* Audio Elements */}
        </div>
    );
};

export default Musee;
