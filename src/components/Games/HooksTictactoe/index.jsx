import React, { useState, useCallback, useReducer, useEffect } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  recentCell: [-1, -1],
};

export const SET_WINNER = "SET_WINNER";
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
// export const DRAW_RESET_WINNER = "DRAW_RESET_WINNER";

const reducer = (state, action) => {
  switch (action.type) {
    case CLICK_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...tableData[action.row]]; // immer makes this easer
      // example of immer (immer is a js library)

      // const nextState = {
      //   ...state,
      //   posts: state.posts.map(post =>
      //     post.id === 1
      //       ? {
      //           ...post,
      //           comments: post.comments.concat({
      //             id: 3,
      //             text: '새로운 댓글'
      //           })
      //         }
      //       : post
      //   )
      // };

      // const nextState = produce(state, draft => {
      //   const post = draft.posts.find(post => post.id === 1);
      //   post.comments.push({
      //     id: 3,
      //     text: '와 정말 쉽다!'
      //   });
      // });

      tableData[action.row][action.cell] = state.turn;
      return {
        ...state,
        tableData,
        recentCell: [action.row, action.cell],
      };
    }
    case CHANGE_TURN: {
      return {
        ...state,
        turn: state.turn === "O" ? "X" : "O",
      };
    }
    case SET_WINNER: {
      return {
        ...state,
        winner: action.winner,
        turn: "O",
        tableData: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
        recentCell: [-1, -1],
      };
    }
    // case DRAW_RESET_WINNER: {
    //   return {
    //     ...state,
    //     winner: "Nobody",
    //   };
    // }
  }
};

const HooksTictactoe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, winner, turn, recentCell } = state;
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("O");
  // const [tableData, setTableData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  const onClickTable = useCallback(() => {
    dispatch({ type: SET_WINNER, winner: "O" });
  }, []);

  useEffect(() => {
    const [row, cell] = recentCell;
    if (row < 0) {
      return;
    }

    let win = false;
    if (
      tableData[row][0] === turn &&
      tableData[row][1] === turn &&
      tableData[row][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][cell] === turn &&
      tableData[1][cell] === turn &&
      tableData[2][cell] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][0] === turn &&
      tableData[1][1] === turn &&
      tableData[2][2] === turn
    ) {
      win = true;
    }
    if (
      tableData[0][2] === turn &&
      tableData[1][1] === turn &&
      tableData[2][0] === turn
    ) {
      win = true;
    }
    if (win) {
      dispatch({ type: SET_WINNER, winner: turn });
    } else {
      let all = true;
      tableData.forEach((row) => {
        row.forEach((cell) => {
          if (!cell) {
            all = false;
          }
        });
      });
      if (all) {
        dispatch({ type: SET_WINNER, winner: "Nobody" });
        // dispatch({ type: DRAW_RESET_WINNER });
      } else {
        dispatch({ type: CHANGE_TURN });
      }
    }
  }, [recentCell]);

  console.log("Whole rendering");
  return (
    <div className="ttt">
      <h1>Hooks Tictactoe</h1>
      <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch} />
      {winner && <div>'{winner}' is winner</div>}
    </div>
  );
};

export default HooksTictactoe;
