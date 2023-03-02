export const storeGameStats = (score, player) => {
	const games = JSON.parse(window.localStorage.getItem("games"));

	const game = { score, player };

	if (games && games.length) {
		games.push(game);

		window.localStorage.setItem("games", JSON.stringify(games));
	} else {
		window.localStorage.setItem("games", JSON.stringify([game]));
	}
};
