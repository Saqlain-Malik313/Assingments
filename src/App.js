import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Signn from './Signn';

const App=()=>{
  return<>
  <BrowserRouter>
  <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/sign' element={<Signn/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
