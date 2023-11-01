import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Home from './Home';
import Contact from './Contact';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
     </BrowserRouter>
   </div>
    
  );
}

export default App;
