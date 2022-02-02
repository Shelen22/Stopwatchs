import React from "react";
// import "./ControlButtons.css";

export default function ControlButtons(props) {
const StartButton = (
	<div
		onClick={props.handleStart}>
	Start
	</div>
);
const ActiveButtons = (
	<div>
	<div 
		onClick={props.handleReset}>
		Reset
	</div>
	<div
		onClick={props.handlePauseResume}>
		{props.isPaused ? "Resume" : "Pause"}
	</div>
	</div>
);

return (
	<div>
	<div>{props.active ? ActiveButtons : StartButton}</div>
	</div>
);
}
