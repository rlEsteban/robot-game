export const getGameStats = () => {
	const games = JSON.parse(window.localStorage.getItem("games"));

	return games
		? games.map(({ score, player }, i) => ({
				gameNum: i + 1,
				player,
				score,
		  }))
		: [];
};
