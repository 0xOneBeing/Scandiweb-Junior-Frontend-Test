import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Main from './components/Main'
import bootstrap from 'bootstrap' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}

export default App;
