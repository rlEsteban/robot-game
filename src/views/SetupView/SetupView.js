import { useState } from "react";
import { Link } from "react-router-dom";
import { PlayerForm, PlayerList } from "../../components";
import {
	getPlayerData,
	removePlayerData,
	setActivePlayer as setBrowserPlayer,
} from "../../lib";
import "./SetupView.css";

export const SetupView = () => {
	const players = getPlayerData();
	const [playersList, setPlayersList] = useState(players);
	const [activePlayer, setActivePlayer] = useState({
		index: null,
		username: null,
	});

	const handleSelect = (index) => {
		setActivePlayer({ index, username: playersList[index] });
		setBrowserPlayer(playersList[index]);
	};

	const handleRemove = (e, player, i) => {
		removePlayerData(player);
		setPlayersList(playersList.splice(i, 1)); // used for render
		e.stopPropagation();
	};

	return (
		<div>
			<Link className="BackToHomeLink" to="/">
				⬅ Back to home
			</Link>

			<div className="SetupViewContainer">
				<PlayerForm
					list={playersList}
					handleListUpdate={setPlayersList}
				/>

				<div id="PlayersContainer">
					<div>
						<h3 className="SetupHeader">Players</h3>

						<p className="SetupText">
							Please select a name to set as active player.
						</p>

						<PlayerList
							players={players}
							activePlayer={activePlayer}
							onSelect={handleSelect}
							onRemove={handleRemove}
						/>
					</div>

					{players?.length > 0 && (
						<Link id="ClickToPlayLink" to="/game">
							Click to play!
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
