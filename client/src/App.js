import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import axios from "axios";
// import './App.css';

// const hitBackend = () => {
//   axios.get("/test")
//     .then((res) => {
//       console.log(res.data);
//     })
// }

const GlobalStyle = createGlobalStyle`
body {
  background-color: #050504;
  font-family: "Inconsolata", monospace;
}
p {
  font-weight: 300;
}
  
h1,h4 {
    color: #E2E6EA;
    font-weight: 400;
} 
`

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <button onClick={hitBackend}>Send request to the backend!</button>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div>
        <GlobalStyle />
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route component={NoMatch} /> */}
      </div>
    </Router>
  );
}

export default App;
