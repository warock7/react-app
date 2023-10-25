import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Navbar />
        <h1>CS 230L</h1>
        <h2>Section - 02</h2>
        <p>WVU ID: 800380118</p>
        <p>Hi I am Wyatt Rock</p>

        <div class="container">
  <div class="row">
    <div class="col-sm">
      <Card />
    </div>
    <div class="col-sm">
      <Card />
    </div>
    <div class="col-sm">
     <Card />
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
