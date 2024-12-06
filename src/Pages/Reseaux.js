import React, { useState, useEffect } from "react";
import "../Styles/Reseaux.css";

const Reseaux = () => {
  const [notifications, setNotifications] = useState([]);
  const [feed, setFeed] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [isPostVisible, setIsPostVisible] = useState(true);

  // Gérer l'ajout de notifications intrusives
  useEffect(() => {
    const notificationTimer = setInterval(() => {
      const messages = [
        "Attention, vous avez 1 000 followers... mais à quel prix ?",
        "Votre publication est virale... mais personne ne veut la voir.",
        "Un ami vous a mentionné dans un commentaire... mais il est déjà loin.",
        "Découvrez qui a visité votre profil... mais ils ne sont jamais partis.",
      ];
      setNotifications((prev) => [
        ...prev,
        messages[Math.floor(Math.random() * messages.length)],
      ]);
    }, 3000);

    // Nettoyer après démontage
    return () => clearInterval(notificationTimer);
  }, []);

  // Gérer un feed défilant plein de doublons
  useEffect(() => {
    const newFeed = [
      "Post 1 : La vie est belle... mais est-ce vraiment la vie ?",
      "Post 2 : Nouveau produit à découvrir ! Peut-être un piège.",
      "Post 3 : Photo de vacances... mais personne ne sourit.",
    ];
    setFeed(newFeed);
  }, []);

  // Simuler la disparition ou le mélange des publications
  const handlePost = () => {
    if (Math.random() > 0.5) {
      setPostContent("");
    } else {
      setPostContent("Texte aléatoire : " + Math.random().toString(36).slice(2));
      setIsPostVisible(true);
    }
  };

  // Simuler la disparition ou l'apparition d'une publication d'une manière bizarre
  useEffect(() => {
    if (isPostVisible) {
      const hidePostTimer = setTimeout(() => {
        setIsPostVisible(false);
        setPostContent("Le message a disparu... ou a-t-il jamais existé ?");
      }, 5000); // Cacher après 5 secondes
      return () => clearTimeout(hidePostTimer);
    }
  }, [isPostVisible]);

  return (
    <div className="reseaux">
      <h1 className="title">Le pire des réseaux sociaux</h1>
      <div className="notifications">
        {notifications.map((note, index) => (
          <div key={index} className="notification">
            {note}
          </div>
        ))}
      </div>

      <div className="post-section">
        <textarea
          placeholder="Écrivez quelque chose..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="post-input"
        />
        <button onClick={handlePost} className="btn-post">
          Publier
        </button>
      </div>

      <div className="feed">
        {feed.map((post, index) => (
          <div key={index} className="feed-post">
            {post}
          </div>
        ))}
        {isPostVisible && (
          <div className="feed-post new-post">{postContent}</div>
        )}
      </div>
    </div>
  );
};

export default Reseaux;
