import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import Summary from "./Summary.js";
import Square from "./Square.js";
import { resetBoardAction } from "../actions/boardActions";
import { resetPlaerAction } from "../actions/playerActions.js";
import { resetResultAction } from "../actions/resultsAction";
import Activities from "./Activities.js";

function Board(props) {
  const { board } = props;
  const dispatch = useDispatch();

  const [activitiesLog, setActivitiesLog] = useState([]);

  const handleClick = () => {
    dispatch(resetBoardAction());
    dispatch(resetPlaerAction());
    dispatch(resetResultAction());
  };

  useEffect(() => {
    axios
      .get("/api/activities")
      .then((res) => {
        setActivitiesLog(res.data);
        // console.log(activitiesLog);
      })
      .catch((err) => console.log(err));
  }, [board]);
  // console.log(activitiesLog);
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
      <h3>Activity log:</h3>
      {activitiesLog.map((ac) => (
        <Activities log={ac.activity} player={ac.player} cell={ac.cell} />
      ))}
    </Fragment>
  );
}

export default connect(({ board }) => ({ board }))(Board);
