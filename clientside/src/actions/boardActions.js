import { DRAW_X, DRAW_O, RESET_BOARD } from "../constants/actionTypes";

export const drawXAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_X,
    cellIndex,
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const drawOAction = (cellIndex) => async (dispatch, getState) => {
  dispatch({
    type: DRAW_O,
    cellIndex,
  });

  localStorage.setItem("board", JSON.stringify(getState().board));
};

export const resetBoardAction = () => async (dispatch) => {
  // localStorage.removeItem("board");
  dispatch({
    type: RESET_BOARD,
  });
};
