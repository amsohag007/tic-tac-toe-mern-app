import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { boardReducer } from "./reducer/boardReducer";
import { playerReducer } from "./reducer/playerReducer";
import { resultReducer } from "./reducer/resultReducer";

const reducer = combineReducers({
  board: boardReducer,
  players: playerReducer,
  result: resultReducer,
});

const boardItemsFromStorage = localStorage.getItem("board")
  ? JSON.parse(localStorage.getItem("board"))
  : [null, null, null, null, null, null, null, null, null];

const playerStateFromStorage = localStorage.getItem("players")
  ? JSON.parse(localStorage.getItem("players"))
  : {
      p1: "X",
      p2: "O",
      turn: "p1",
    };
const resultStateFromStorage = localStorage.getItem("result")
  ? JSON.parse(localStorage.getItem("result"))
  : {
      win: null,
      tie: false,
    };

const initialState = {
  board: boardItemsFromStorage,
  players: playerStateFromStorage,
  result: resultStateFromStorage,
};

//middleware for devtools
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
