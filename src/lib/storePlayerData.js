export const storePlayerData = (input) => {
	const players = JSON.parse(window.localStorage.getItem("players"));

	const playerInput = input.toLowerCase(); // ensures consistency

	if (players) {
		if (!players.includes(playerInput)) {
			players.push(playerInput);

			window.localStorage.setItem("players", JSON.stringify(players));
		} else {
			return true;
		}
	} else {
		window.localStorage.setItem("players", JSON.stringify([playerInput]));
	}

	return false;
};
