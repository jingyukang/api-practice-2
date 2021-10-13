import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";
import Games from "./components/Games";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/games" component={Games} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
