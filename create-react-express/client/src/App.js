import React from "react";
import Books from "./pages/books";
import Save from "./pages/save";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div style={{background: "#dcc5ab"}}>
      <Nav />
      <Switch>
        <Route exact path={"/"}>
           <Books />
        </Route>
        <Route exact path="/books">
          <Save />
        </Route>
        <Route path="*">
           
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
