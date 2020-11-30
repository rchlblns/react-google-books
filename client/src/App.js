import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch"
import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Router>
  );
}

export default App;
