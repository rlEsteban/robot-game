import { setActivePlayer } from "./setActivePlayer";

export const removePlayerData = (player) => {
	const players = JSON.parse(window.localStorage.getItem("players"));

	players.splice(players.indexOf(player.toLowerCase()), 1);

	window.localStorage.setItem("players", JSON.stringify(players));

	const currentPlayer = window.localStorage.getItem("activePlayer");

	if (currentPlayer === player.toLowerCase()) {
		setActivePlayer("none");
	}
};
