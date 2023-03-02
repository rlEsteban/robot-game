import { Link } from "react-router-dom";
import { getActivePlayer, getPlayerData } from "../../lib";
import "./HomeView.css";

export const HomeView = () => {
	const players = getPlayerData();

	const player = getActivePlayer();

	const enableGame = player !== "none" && player != null && players?.length;

	return (
		<div id="HomeContainer">
			<div id="WelcomeText">Welcome!</div>
			{enableGame ? (
				<div className="Details">
					<div>Player data now exists! Enjoy your game!</div>
					<div>
						Player selected:{" "}
						<i>
							{player.charAt(0).toUpperCase() + player.slice(1)}
						</i>
					</div>
				</div>
			) : (
				<div className="Details">
					Please go to setup page to enter your player data or select
					a player to play the game.
				</div>
			)}

			<div id="NavContainer">
				<Link to="/game">
					<button className="NavButton" disabled={!enableGame}>
						Game
					</button>
				</Link>
				<Link to="/setup">
					<button className="NavButton">Setup</button>
				</Link>
			</div>
		</div>
	);
};
