import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Reseaux from "./Pages/Reseaux";
import Jeux from "./Pages/Jeux";
import Musee from "./Pages/Musee";
import Sortie from "./Pages/Sortie";

//import Banque from "./pages/Banque";
import Outil from "./Pages/Outil";
import Boutique from "./Pages/Boutique";
//import Sortie from "./pages/Sortie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/reseaux" element={<Reseaux />} />       
        <Route path="/jeux" element={<Jeux />} />       
        <Route path="/outil" element={<Outil />} />       
        <Route path="/boutique" element={<Boutique />} />       
        <Route path="/musee" element={<Musee />} />       
        <Route path="/sortie" element={<Sortie />} />       

      </Routes>
    </Router>
  );
}

export default App;
