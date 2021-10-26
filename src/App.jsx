import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as React from "react";
import Games from "./components/Games";
import Blog from "./components/Blog";
import Checkbox from "@mui/material/Checkbox";
import {
  styled,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { orange } from "@mui/material/colors";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <div>
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
