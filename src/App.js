import logo from './logo.svg';
import Navigation from "./components/Navigation"
import Main from './components/Main'
import bootstrap from 'bootstrap' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css';

// const bootstrap = require('bootstrap')

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
