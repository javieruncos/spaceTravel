import "./App.css";
import Menu from "./common/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Destination from "./components/Destination";
import { obtenerId } from "./helper/queries";
import backgroundApp from "./img/background-home-desktop.jpg";
import backgroundDestinos from "./img/background-destination-desktop.jpg";
import backgroundCrew from "./assets/crew/background-crew-desktop.jpg";
import backgroundTecno from "./img/background-technology-desktop.jpg"
import Crew from "./components/Crew";
import Tecnologia from "./components/view/Tecnologia";

function App() {
  const [planeta, setPlaneta] = useState({});
  const [fondo, setfondo] = useState(backgroundApp);
  const [imgPlaneta, setImgPlaneta] = useState("moon")
  

  const cambiarFondo = (background) => {
    setfondo(background);
    console.log("fondo cambiado")
  };

  const obtenerP = (id) => {
    obtenerId(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setPlaneta(respuesta.dato);
        setImgPlaneta(respuesta.dato.images)
        console.log(respuesta.dato);
      }
    });
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${fondo})` }}>
      <BrowserRouter>
        <Menu
          fondo={fondo}
          setfondo={setfondo}
          cambiarFondo={cambiarFondo}
          backgroundApp={backgroundApp}
          backgroundDestinos={backgroundDestinos}
          backgroundCrew={backgroundCrew}
          backgroundTecno={backgroundTecno}
        ></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/destino"
            element={
              <Destination
                planeta={planeta}
                setPlaneta={setPlaneta}
                obtenerP={obtenerP}
                fondo={fondo}
                setfondo={setfondo}
                cambiarFondo={cambiarFondo}
                imgPlaneta={imgPlaneta}
              ></Destination>
            }
          ></Route>
          <Route
            exact
            path="/crew"
            element={
              <Crew></Crew>
            }
          ></Route>
          <Route exact path="/tecnologia" element={<Tecnologia ></Tecnologia>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
