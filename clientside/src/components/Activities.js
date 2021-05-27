import React from "react";

function Activities(props) {
  return (
    <div>
      <p>
        {props.player}:{props.log}
      </p>
    </div>
  );
}

export default Activities;
