import "./BoardHeader.css";

export const BoardHeader = ({ score, time }) => (
	<div id="GameInfo">
		<div>Score: {score}</div>
		<div>Time left: {time}</div>
	</div>
);
