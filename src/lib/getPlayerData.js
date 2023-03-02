export const getPlayerData = () =>
	JSON.parse(window.localStorage.getItem("players"));
