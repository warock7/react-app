import { Link } from "react-router-dom";


function Navbar() {
    return (
      <div className="Navbar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Navbar</Link>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/card">Card</Link>
      </li>
     
      <li class="nav-item">
        <Link class="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>

  </div>
</nav>
      </div>
    );
  }
  
  export default Navbar;