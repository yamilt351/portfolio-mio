// import fileDownload from "js-file-download";
// import axios from "axios";
import "./style.css";

function Home(props) {
  //   const handleClick = (url, filename) => {
  //     axios
  //       .get(url, {
  //         responseType: "blob",
  //       })
  //       .then((res) => {
  //         fileDownload(res.data, filename);
  //       });
  //   };
  return (
    <section>
      <div className="container-home">
        <div id="nombre-home" className="home">
          <div className="nombre">
            I'm <span>{props.nombre}</span>
          </div>
          <div className="text-container" id="texto-home">
            {props.titulo}

            <br />

            {props.texto}
            <br />
          </div>
          <button
            className="button"
            // onClick={() => {
            //   () =>
            //     handleClick(
            //       "https://avatars.githubusercontent.com/u/9919?s=280&v=4",
            //     );
            // }}
          >
            MY RESUME
          </button>
        </div>
      </div>
    </section>
  );
}
export default Home;
