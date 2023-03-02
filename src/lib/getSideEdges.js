export const getSideEdges = (gameSize) => {
	const right = [];
	for (let i = 0; i < gameSize; i++) {
		right.push(
			i === 0 ? i + gameSize - 1 : right[right.length - 1] + gameSize
		);
	}

	const left = [];
	for (let i = 0; i < gameSize; i++) {
		left.push(i === 0 ? i : left[left.length - 1] + gameSize);
	}

	return {
		right,
		left,
	};
};
