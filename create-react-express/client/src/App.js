import React from "react";
import Books from "./pages/books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <div style={{background: "#dcc5ab"}}>
      <Nav />
      <Switch>
        <Route exact path={["/", "/books"]}>
           <Books />
        </Route>
        <Route exact path="/books/:id">
         
        </Route>
        <Route path="*">
           
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
