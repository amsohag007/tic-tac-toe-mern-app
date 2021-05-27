import React from "react";

function Activities(props) {
  return (
    <div>
      <p>
        Player {props.player} {props.log} {props.cell}
      </p>
    </div>
  );
}

export default Activities;
