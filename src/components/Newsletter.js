import React, { useState } from "react";

const Nesletter = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleInput = e => setEmail(e.target.value);
	const handleSubmit = async event => {
		event.preventDefault();

		setError("");
		try {
			const response = await fetch(
				`/.netlify/functions/subscribeToNewsLetter?email=${email}`
			);

			if (response.ok) {
				setIsSuccess(true);
				console.log("response.ok");
			} else {
				const body = await response.json();
				setError(body.errorMessage);
			}
		} catch (error) {
			console.log(error);
			setError("Failed to submit. Please check email and try again.");
		}
		return false;
	};
	return (
		<form onSubmit={handleSubmit}>
			<p style={{ color: "white" }}>Newsletter</p>
			{isSuccess ? (
				<>
					<div>Thank you!</div>
					<div>
						<img alt="success" src="/img/icons/check.svg" />
					</div>
				</>
			) : (
				<>
					<input
						onChange={handleInput}
						placeholder="enter your email address"
						value={email}
						type="text"
					/>
					<button
						style={{
							marginLeft: "1rem",
							padding: ".2rem"
						}}
						alt="submit"
					>
						Subscribe
					</button>
					{error !== "" && <p>{error}</p>}
				</>
			)}
		</form>
	);
};

export default Nesletter;
