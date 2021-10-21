import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";
import Games from "./components/Games";
import Blog from "./components/Blog";
import { CssBaseline, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "white",
    backgroundColor: "black",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline>
        <div className={classes.text}>
          <Navbar />
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/games" component={Games} />
          </Switch>
        </div>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
