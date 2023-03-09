import logo from './airbnb.png';
import './App.css';

function Navbar() {
  return (
    <div className="App">
        <nav>
        <img src={logo} className="nav-logo" alt="logo" />
        </nav>
    </div>
  );
}

export default Navbar;
