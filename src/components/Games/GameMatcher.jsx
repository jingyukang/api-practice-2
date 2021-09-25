import React from "react";
import { Route, useParams } from "react-router";
import ClassLotto from "./ClassLotto";
import ClassResponseCheck from "./ClassResponseCheck";
import ClassRPS from "./ClassRPS";
import HooksLotto from "./HooksLotto";
import HooksMultiplication from "./HooksMultiplication";
import HooksRPS from "./HooksRPS";
import HooksResponseCheck from "./HooksResponseCheck";
import HooksTictactoe from "./HooksTictactoe";
import HooksWordRelay from "./HooksWordRelay";
import MineSearch from "./MineSearch";
import NumberBaseball from "./NumberBaseball";

const GameMatcher = () => {
  const { game } = useParams();

  if (game === "Lotto") {
    return (
      <div>
        <ClassLotto />
        <HooksLotto />
      </div>
    );
  }
  if (game === "Response Check") {
    return (
      <div>
        <ClassResponseCheck />
        <HooksResponseCheck />
      </div>
    );
  }
  if (game === "RPS") {
    return (
      <div>
        <ClassRPS />
        <HooksRPS />
      </div>
    );
  }
  if (game === "Multiplication") {
    return (
      <div>
        <HooksMultiplication />
      </div>
    );
  }
  if (game === "Tictactoe") {
    return (
      <div>
        <HooksTictactoe />
      </div>
    );
  }
  if (game === "Word Relay") {
    return (
      <div>
        <HooksWordRelay />
      </div>
    );
  }
  if (game === "Mine Search") {
    return (
      <div>
        <MineSearch />
      </div>
    );
  }
  if (game === "Number Baseball") {
    return (
      <div>
        <NumberBaseball />
      </div>
    );
  }
};

export default GameMatcher;
