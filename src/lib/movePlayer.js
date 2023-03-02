export const movePlayer = (direction, index, gameSize, edges) => {
	const { right: rightEdge, left: leftEdge } = edges;
	const maxIndex = Math.pow(gameSize, 2) - 1;

	switch (direction) {
		case "up":
			const up = index - gameSize;
			return up < 0 ? "game_over" : up;
		case "right":
			const right = index + 1;
			return rightEdge.includes(index) ? "game_over" : right;
		case "down":
			const down = index + gameSize;
			return down > maxIndex ? "game_over" : down;
		case "left":
			const left = index - 1;
			return leftEdge.includes(index) ? "game_over" : left;
		default:
			break;
	}
};
