import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingGames from "./ListingGames";
import GameMatcher from "./GameMatcher";

export const gameList = [
  "Lotto",
  "Response Check",
  "RPS",
  "Multiplication",
  "Tictactoe",
  "Word Relay",
  "Mine Search",
  "Number Baseball",
];

const Games = () => {
  return (
    <div className="gameList">
      <ul>
        {gameList.map((game, i) => (
          <ListingGames key={i} game={game} />
        ))}
      </ul>
      <Route path="/games/:game" component={GameMatcher}></Route>
    </div>
  );
};

export default Games;
