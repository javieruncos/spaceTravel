import './App.css';
import Menu from './common/Menu';
import "bootstrap/dist/css/bootstrap.min.css"
import Inicio from './components/Inicio';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Destination from './components/Destination';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={ <Inicio></Inicio>}></Route>
        <Route exact path='/destino' element={ <Destination></Destination>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
