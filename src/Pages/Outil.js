import React from 'react';
import "../Styles/Outil.css";

const Outil = () => {
  const jouerSonHorreur = (sonId) => {
    const son = document.getElementById(sonId);
    if (son) {
      son.play();
    } else {
      console.error(`L'élément audio avec l'ID ${sonId} n'a pas été trouvé.`);
    }
  };

  return (
    <div>
      <h1>Outils professionnels - Gestion de projet ratée</h1>

      {/* Kanban avec images d'horreur */}
      <section className="kanban">
        <div className="colonne" id="todo">
          <h3>À faire</h3>
          <div className="carte">Tâche invisible</div>
          <div className="carte">Tâche invisible</div>
          <div className="icone-horreur">
            💀
            <div className="tooltip">Ne touchez pas ici !</div>
          </div>
        </div>
        <div className="colonne" id="inProgress">
          <h3>En cours</h3>
          <div className="carte">Tâche invisible</div>
          <i
            className="icone-horreur"
            onClick={() => jouerSonHorreur('S2')}
          >
            👻
          </i>
        </div>
        <div className="colonne" id="done">
          <h3>Terminé</h3>
          <div className="carte">Tâche invisible</div>
          <i
            className="icone-horreur"
            onClick={() => jouerSonHorreur('S3')}
          >
            🧟‍♂️
          </i>
        </div>
      </section>

      {/* Recherche */}
      <section>
        <h2>Barre de recherche chaotique</h2>
        <input type="text" id="searchBar" placeholder="Recherche impossible..." />
        <p id="resultats">Aucun résultat trouvé, même pour les tâches invisibles.</p>
      </section>

      {/* Menu */}
      <div className="menu">
        <a href="#">Menu 1</a>
        <a href="#">Menu 2</a>
        <a href="#">Menu 3</a>
      </div>

      {/* Sons d'horreur */}
      <audio id="S1" src="/Sounds/S1.mp3" preload="auto"></audio>
      <audio id="S2" src="/Sounds/S2.mp3" preload="auto"></audio>
      <audio id="S3" src="/Sounds/S3.mp3" preload="auto"></audio>
    </div>
  );
};

export default Outil;
