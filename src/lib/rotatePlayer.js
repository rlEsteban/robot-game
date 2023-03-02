const LEFT = { direction: "left", icon: "←" };
const RIGHT = { direction: "right", icon: "→" };
const UP = { direction: "up", icon: "↑" };
const DOWN = { direction: "down", icon: "↓" };

export const rotatePlayer = (rotateDirection, playerDirection) => {
	const didRotateLeft = rotateDirection === "left";

	switch (playerDirection) {
		case "up":
			return didRotateLeft ? LEFT : RIGHT;
		case "right":
			return didRotateLeft ? UP : DOWN;
		case "left":
			return didRotateLeft ? DOWN : UP;
		case "down":
			return didRotateLeft ? RIGHT : LEFT;
		default:
			break;
	}
};
