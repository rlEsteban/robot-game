import { Delete } from "react-feather";
import "./PlayerList.css";

export const PlayerList = ({ players, activePlayer, onSelect, onRemove }) => (
	<div id="PlayerList">
		{players?.length ? (
			players.map((name, index) => (
				<>
					<div
						className="Player"
						onClick={() => onSelect(index)}
						style={
							activePlayer.index === index
								? {
										backgroundColor: "lightgray",
								  }
								: { background: "none" }
						}
					>
						<div>
							{index + 1}.{" "}
							{name.charAt(0).toUpperCase() + name.slice(1)}
						</div>

						<div
							className="Remove"
							onClick={(e) => onRemove(e, name, index)}
						>
							<Delete color="red" size={18} />
						</div>
					</div>
				</>
			))
		) : (
			<>No player data exists.</>
		)}
	</div>
);
