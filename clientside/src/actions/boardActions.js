import { DRAW_X, DRAW_O, RESET_BOARD } from "../constants/actionTypes";
import axios from "axios";

export const drawXAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_X,
    cellIndex,
  });

  console.log("x has pressed:" + cellIndex);
  axios({
    method: "post",
    url: "/api/activities",
    data: {
      activity: "has pressed cell index",
      player: "X",
      cell: cellIndex,
    },
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const drawOAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_O,
    cellIndex,
  });

  console.log("x has pressed:" + cellIndex);
  axios({
    method: "post",
    url: "/api/activities",
    data: {
      activity: "has pressed cell index",
      player: "O",
      cell: cellIndex,
    },
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const resetBoardAction = () => async (dispatch) => {
  localStorage.removeItem("board");
  dispatch({
    type: RESET_BOARD,
  });

  axios({
    method: "delete",
    url: "/api/activities",
  });
};
