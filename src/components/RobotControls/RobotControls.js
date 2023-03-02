import { RotateCcw, RotateCw, Move } from "react-feather";
import "./RobotControls.css";

export const RobotControls = ({
	leftBtnHandler,
	middleBtnHandler,
	rightBtnHandler,
	disabled,
}) => (
	<div id="RobotControls">
		<button
			className="ControlButton"
			onClick={leftBtnHandler}
			disabled={disabled}
		>
			<RotateCcw />
		</button>
		<button
			className="ControlButton"
			onClick={middleBtnHandler}
			disabled={disabled}
		>
			<Move />
		</button>
		<button
			className="ControlButton"
			onClick={rightBtnHandler}
			disabled={disabled}
		>
			<RotateCw />
		</button>
	</div>
);
