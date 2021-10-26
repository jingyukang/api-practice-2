import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Typography,
  Box,
  Toolbar,
  Drawer,
  List,
  Divider,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem>HOME</ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <ListItem>Blog</ListItem>
        </Link>
        <Link to="/games" style={{ textDecoration: "none" }}>
          <ListItem>Games</ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <nav className="nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={toggleDrawer("left", true)} />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              JIN practice blog
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
