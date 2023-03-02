import { useState, useMemo, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
	BoardHeader,
	RobotControls,
	Grid,
	Robot,
	Target,
} from "../../components";
import {
	generateTarget,
	movePlayer,
	rotatePlayer,
	storeGameStats,
} from "../../lib";
import "./Board.css";

export const Board = ({
	gameSize,
	sideEdges,
	initRobot,
	initTargetPos,
	player,
	onGameFinish,
}) => {
	const [start, setStart] = useState(false);
	const [time, setTimer] = useState(60);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [failed, setFailed] = useState(false);
	const [robot, setRobot] = useState(initRobot);
	const [target, setTarget] = useState(initTargetPos);

	const grid = useMemo(
		() =>
			Array.apply(null, { length: Math.pow(gameSize, 2) }).map(
				Number.call,
				(i) => ({
					isTarget: target === i && target !== robot.position,
					isPlayer: robot.position === i,
				})
			),
		[robot.position, target]
	);

	const handleRotateLeft = () => {
		setRobot({
			...robot,
			...rotatePlayer("left", robot.direction),
		});
	};

	const handleMoveForward = () => {
		const result = movePlayer(
			robot.direction,
			robot.position,
			gameSize,
			sideEdges
		);

		if (typeof result === "string") {
			setFailed(true);
			setGameOver(true);
		} else {
			setRobot({
				...robot,
				position: result,
			});
		}
	};

	const handleRotateRight = () => {
		setRobot({
			...robot,
			...rotatePlayer("right", robot.direction),
		});
	};

	const handleStart = () => {
		setStart(true);
		onGameFinish(false);
	};

	const handleReset = () => {
		setGameOver(false);
		setFailed(false);
		setTimer(60);
		setStart(false);
		setScore(0);
		setRobot(initRobot);
		setTarget(generateTarget(gameSize, robot.position));
	};

	useEffect(() => {
		if (start) {
			time > 0 && !gameOver
				? setTimeout(() => setTimer(time - 1), 1000)
				: setGameOver(true);
		} else {
			setTimer(60);
		}
	}, [start, time, gameOver]);

	useEffect(() => {
		if (gameOver || failed) {
			storeGameStats(score, player);
		}

		onGameFinish(true);
	}, [gameOver, failed]);

	useEffect(() => {
		if (robot.position === target) {
			setScore(score + 1);
			setTarget(generateTarget(gameSize, robot.position));
		}
	}, [robot]);

	return (
		<div>
			<Link className="BackToHomeLink" to="/">
				⬅ Back to home
			</Link>

			<div id="Board">
				<BoardHeader score={score} time={time} />

				<Grid gameSize={gameSize}>
					{grid.map(({ isTarget, isPlayer }, i) => (
						<Fragment key={i}>
							{!isTarget ? (
								!isPlayer ? (
									<div />
								) : (
									<Robot>{robot.icon}</Robot>
								)
							) : (
								<Target />
							)}
						</Fragment>
					))}
				</Grid>

				<RobotControls
					leftBtnHandler={handleRotateLeft}
					middleBtnHandler={handleMoveForward}
					rightBtnHandler={handleRotateRight}
					disabled={gameOver || !start}
				/>

				<div id="ExtraControlsContainer">
					{gameOver && (
						<div id="GameOverText">
							<strong>Game over!</strong> - Final score: {score}
						</div>
					)}

					<div>
						<button
							className="ContainerButton"
							onClick={handleStart}
							disabled={start}
						>
							Start game
						</button>

						<button
							className="ContainerButton"
							onClick={handleReset}
						>
							Reset game
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
