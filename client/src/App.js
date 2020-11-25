import logo from './logo.svg';
import axios from "axios";
import './App.css';

const hitBackend = () => {
  axios.get("/test")
    .then((res) => {
      console.log(res.data);
    })
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={hitBackend}>Send request to the backend!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
