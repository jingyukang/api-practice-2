import React from "react";
import { Link, Route, Switch } from "react-router-dom";

const Games = () => {
  return (
    <div className="gameList">
      <ul>
        <li>
          <Link to="/games/game1" style={{ textDecoration: "none" }}>
            game1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Games;
