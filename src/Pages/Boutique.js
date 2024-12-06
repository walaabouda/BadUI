import React, { useState } from 'react';
import '../Styles/Boutique.css';

const Boutique = () => {
  const [name, setName] = useState('');
  const [movie, setMovie] = useState('');
  const [message, setMessage] = useState('');

  // Fonction pour afficher l'alerte quand un produit est ajouté
  const handleAddToCart = (product) => {
    alert(`${product} ajouté (ou pas)`);
  };

  // Fonction pour afficher l'alerte de validation du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour rien !');
  };

  return (
    <div>
      <h1>Bienvenue dans notre boutique chaotique !</h1>
      
      <div className="contenu">
        <div className="produit">
          <img src="/Images/B3.jpg" alt="Chaussettes" />
          <p>T-shirt - 10€</p>
          <button onClick={() => handleAddToCart('T-shirt')}>Ajouter au panier</button>
        </div>
        <div className="produit">
        <img src="/Images/B1.jpg" alt="Casquette" />
          <p>Chaussettes - 5€</p>
          <button onClick={() => handleAddToCart('Chaussettes')}>Ajouter au panier</button>
        </div>
        <div className="produit">
          <img src="/Images/B2.jpeg" alt="T-shirt" />
          <p>Casquette - 15€</p>
          <button onClick={() => handleAddToCart('Casquette')}>Ajouter au panier</button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input 
          type="text" 
          id="nom" 
          placeholder="Nom inutile..." 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="film">Quel est votre film préféré ?</label>
        <input 
          type="text" 
          id="film" 
          placeholder="Exemple : Star Wars" 
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <label htmlFor="message">Votre message à nos chaussettes :</label>
        <textarea 
          id="message" 
          rows="3" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Valider</button>
      </form>

      <div className="popup">Promotion : 0% de réduction sur tout !</div>
    </div>
  );
};

export default Boutique;
