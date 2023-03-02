import { useState } from "react";
import { Link } from "react-router-dom";
import { Board, Leaderboard } from "../../components";
import { generateGameInfo, getActivePlayer } from "../../lib";
import "./GameView.css";

// Works best with odd numbers
const GAME_SIZES = [5, 7];

export const GameView = () => {
	const player = getActivePlayer();

	const [, setGameFinishState] = useState(false); // used for leaderboard rerender

	const gameInfo = {
		...generateGameInfo(GAME_SIZES[0]),
		player,
	};

	return player ? (
		<>
			<Board onGameFinish={setGameFinishState} {...gameInfo} />

			<Leaderboard />
		</>
	) : (
		<div id="NoPlayerContainer">
			<div id="NoPlayerText">
				No active player found. Please go to setup page to set up player
				info.
			</div>

			<Link to="/setup">
				<button id="SetupButton">Setup</button>
			</Link>
		</div>
	);
};
