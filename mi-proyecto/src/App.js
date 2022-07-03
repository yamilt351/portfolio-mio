import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "./Components/ComponentsCss/About";
import MenuBar from "./Components/ComponentsCss/NavBar/menuBar";
import Galeria from "./Components/galeria/galeria";
import Home from "./Components/landing";

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              nombre="Yamil Tauil"
              titulo="Developer"
              texto="Freelancer, Web Designer & Web Developer"
            />
          }
        />
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Galeria />} />
      </Routes>
    </Router>
  );
}

export default App;
