import React from "react";
import { Link } from "react-router-dom";

const ListingGames = ({ game }) => {
  const gamePath = `/games/${game}`;
  return (
    <li>
      <Link to={gamePath} style={{ textDecoration: "none", padding: "0 10px" }}>
        {game}
      </Link>
    </li>
  );
};

export default ListingGames;
