import "./Grid.css";

export const Grid = ({ gameSize, children }) => (
	<div
		id="Grid"
		style={{
			gridTemplateColumns: `repeat(${gameSize}, 1fr)`,
			gridTemplateRows: `repeat(${gameSize}, 1fr)`,
		}}
	>
		{children}
	</div>
);
