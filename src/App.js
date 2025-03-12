import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Signn from './Signn';
import Post from './Post';
import Contact from './Contact';
import Navba from './component/Navbar';
import Started from './component/Started';

const App=()=>{
  return<>
  <BrowserRouter>
  <Navba/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign' element={<Signn/>}/>
    <Route path='/post' element={<Post/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/stared' element={<Started/>}/>

  </Routes>
  </BrowserRouter>
  </>
}

export default App;
