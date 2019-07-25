import React from "react";
import "./style.css";

function ScoreBoard(props) {
  return (
    <h6 className="">Current Score: {props.current} | Highest Score: {props.high}</h6>
  );
}

export default ScoreBoard;