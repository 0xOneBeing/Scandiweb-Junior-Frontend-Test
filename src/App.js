import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Main from './components/Main'
import bootstrap from 'bootstrap' 
// import './App.css';

// const bootstrap = require('bootstrap')

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
