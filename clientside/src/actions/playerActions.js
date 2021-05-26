import {
  PLAYER_X,
  TURN,
  PLAYER_O,
  RESET_PLAYER,
} from "../constants/actionTypes";

export const selectXPlayerAction = (players) => async (dispatch, getState) => {
  dispatch({
    type: PLAYER_X,
    players,
  });

  localStorage.setItem("players", JSON.stringify(getState().players));
};

export const selectOPlayerAction = (players) => async (dispatch, getState) => {
  dispatch({
    type: PLAYER_O,
    players,
  });

  localStorage.setItem("players", JSON.stringify(getState().players));
};

export const toggleTurnAction = () => async (dispatch, getState) => {
  dispatch({
    type: TURN,
  });

  localStorage.setItem("player", JSON.stringify(getState().players));
};

export const resetPlaerAction = () => async (dispatch) => {
  localStorage.removeItem("players");
  dispatch({
    type: RESET_PLAYER,
  });
};
