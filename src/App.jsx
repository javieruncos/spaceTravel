import "./App.css";
import Menu from "./common/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from "./components/Inicio";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Destination from "./components/Destination";
import { obtenerId } from "./helper/queries";

function App() {

  const [planeta, setPlaneta] = useState({});

  const obtenerP = (id) => {
    obtenerId(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setPlaneta(respuesta.dato);
        console.log(respuesta.dato);
      }
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
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
              ></Destination>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
