import { useState } from "react";
import { storePlayerData } from "../../lib";
import "./PlayerForm.css";

export const PlayerForm = () => {
	const [username, setUsername] = useState("");
	const [error, setError] = useState(false);
	const [submitError, setSubmitError] = useState(false);

	const handleChange = (e) => setUsername(e.target.value);

	const handleSubmit = (e) => {
		if (username) {
			setError(false);

			const submitErr = storePlayerData(username);

			if (!submitErr) {
				setUsername("");
			} else {
				e.preventDefault();
			}

			setSubmitError(submitErr);
		} else {
			setError(true);
			setSubmitError(false);
			e.preventDefault();
		}
	};

	return (
		<form>
			<h3 className="FormHeader">Player information</h3>

			<p className="FormText">
				Please input a username to be used in the local leaderboard.
			</p>

			<div className="FormField">
				<label htmlFor="username">Username:</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={handleChange}
					style={
						error || submitError
							? { borderBottom: "2px red solid " }
							: { borderBottom: "2px gray solid" }
					}
				/>

				{error && (
					<div className="FormFieldError">
						Username must have a value!
					</div>
				)}
				{submitError && (
					<div className="FormFieldError">User already exists!</div>
				)}
			</div>

			<button id="Submit" onClick={handleSubmit}>
				Submit
			</button>
		</form>
	);
};
