import { DRAW_X, DRAW_O, RESET_BOARD } from "../constants/actionTypes";

//const initialState = [null, null, null, null, null, null, null, null, null];

export function boardReducer(state = { board: [] }, action) {
  switch (action.type) {
    case DRAW_X:
      const index = action.cellIndex;
      const newXState = [...state];
      newXState[index] = "X";
      return newXState;

    case DRAW_O:
      const newOState = [...state];
      newOState[action.cellIndex] = "O";
      return newOState;

    case RESET_BOARD:
      return [null, null, null, null, null, null, null, null, null];

    default:
      return state;
  }
}
