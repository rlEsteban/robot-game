import { generateTarget } from "./generateTarget";
import { getSideEdges } from "./getSideEdges";

export const generateGameInfo = (gameSize) => {
	const initRobotPos = Math.ceil((Math.pow(gameSize, 2) - 1) / 2);

	return {
		gameSize,
		sideEdges: getSideEdges(gameSize),
		initTargetPos: generateTarget(gameSize, initRobotPos),
		initRobot: {
			position: initRobotPos,
			direction: "up",
			icon: "↑",
		},
	};
};
