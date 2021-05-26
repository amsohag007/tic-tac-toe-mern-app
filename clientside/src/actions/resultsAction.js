import { X_WINS, O_WINS, TIE, RESET_RESULT } from "../constants/actionTypes";
import { checkVictory } from "../helpers/resultHelper";

export const checkResult = (board) => async (dispatch, getState) => {
  if (checkVictory(board, "X")) {
    dispatch({
      type: X_WINS,
    });
    localStorage.setItem("result", JSON.stringify(getState().result));
  } else if (checkVictory(board, "O")) {
    dispatch({
      type: O_WINS,
    });
    localStorage.setItem("result", JSON.stringify(getState().result));
  } else {
    const check = board.filter((symbol) => symbol === null);
    if (check.length === 0) {
      dispatch({
        type: TIE,
      });
      localStorage.setItem("result", JSON.stringify(getState().result));
    }
  }
};

export const resetResultAction = () => async (dispatch) => {
  localStorage.removeItem("result");
  dispatch({
    type: RESET_RESULT,
  });
};
