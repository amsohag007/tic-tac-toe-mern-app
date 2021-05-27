import { DRAW_X, DRAW_O, RESET_BOARD } from "../constants/actionTypes";
import axios from "axios";

export const drawXAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_X,
    cellIndex,
  });

  axios({
    method: "post",
    url: "/api/activities",
    data: {
      activity: "press {cellIndex}",
      player: "X",
    },
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const drawOAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_O,
    cellIndex,
  });

  axios({
    method: "post",
    url: "/api/activities",
    data: {
      activity: "press {cellIndex}",
      player: "Y",
    },
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const resetBoardAction = () => async (dispatch) => {
  localStorage.removeItem("board");
  dispatch({
    type: RESET_BOARD,
  });
};
