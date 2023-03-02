const getRandomNum = (num) => Math.floor(Math.random() * Math.pow(num, 2));

export const generateTarget = (num, player) => {
	let target = getRandomNum(num);

	while (target === player) {
		target = getRandomNum(num);
	}

	return target;
};
