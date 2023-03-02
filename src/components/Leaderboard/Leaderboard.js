import { getGameStats } from "../../lib";
import "./Leaderboard.css";

export const Leaderboard = () => {
	const gamesByScore = getGameStats().sort((a, b) => b.score - a.score);

	return (
		<div id="Leaderboard">
			<div id="LeaderboardHeader">Leaderboard</div>

			<div id="LeaderboardEntries">
				{gamesByScore.length ? (
					gamesByScore.map(({ gameNum, score, player }) => (
						<div key={gameNum} className="GameStat">
							<i>
								Game {gameNum} (
								{player.charAt(0).toUpperCase() +
									player.slice(1)}
								):
							</i>{" "}
							{score}
						</div>
					))
				) : (
					<div id="EmptyLeaderboard">No games played.</div>
				)}
			</div>
		</div>
	);
};
