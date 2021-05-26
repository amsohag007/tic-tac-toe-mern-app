import { X_WINS, O_WINS, TIE, RESET_RESULT } from "../constants/actionTypes";

// const initialState = {
//   win: null,
//   tie: false,
// };

export function resultReducer(state = { result: {} }, action) {
  switch (action.type) {
    case X_WINS:
      return {
        win: "X",
        tie: false,
      };

    case O_WINS:
      return {
        win: "O",
        tie: false,
      };

    case TIE:
      return {
        win: null,
        tie: true,
      };

    case RESET_RESULT:
      return {};

    default:
      return state;
  }
}
