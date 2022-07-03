// import react from "react";
import "./galeria.css";
import data from "./galeriaData";
function Galeria() {
  return (
    <div className="galeria-container">
      <div className="galeria-proyectos-container">
        {data.map((link) => {
          const {id, img, texto, descripcion, parrafo, url} = link;
          return (
            <div key={id} className="article-container">
              <h1 className="title-galeria">{texto}</h1>
              <a href={url} target="_blank">
                <img src={img} alt={texto} className="imgage" />
              </a>
              <h2 className="subtitle-galeria">{descripcion}</h2>
              <p className="texto-galeria">{parrafo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Galeria;
