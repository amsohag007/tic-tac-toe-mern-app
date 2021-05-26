import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Summary from "./Summary.js";
import Square from "./Square.js";
import { resetBoardAction } from "../actions/boardActions";
import { resetPlaerAction } from "../actions/playerActions.js";
import { resetResultAction } from "../actions/resultsAction";
import Activities from "./Activities.js";

function Board(props) {
  const { board } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetBoardAction());
    dispatch(resetPlaerAction());
    dispatch(resetResultAction());
  };

  return (
    <Fragment>
      <div id="board" className="mt-4 d-flex flex-wrap">
        {board.map((symbol, i) => (
          <Square key={i} index={i} symbol={symbol} />
        ))}
      </div>
      <br />
      <button
        type="button"
        class="btn btn-outline-success p3"
        onClick={handleClick}
      >
        New game
      </button>

      <Summary />
      <Activities log={"The game has started"} />
    </Fragment>
  );
}

export default connect(({ board }) => ({ board }))(Board);
