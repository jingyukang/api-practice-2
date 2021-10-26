import React from "react";
import { Route, Switch } from "react-router-dom";
import ListingGames from "./ListingGames";
import GameMatcher from "./GameMatcher";

export const gameList = [
  "Lotto",
  "ResponseCheck",
  "RPS",
  "Multiplication",
  "Tictactoe",
  "WordRelay",
  "MineSearch",
  "NumberBaseball",
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
