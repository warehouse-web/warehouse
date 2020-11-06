import React, { useState } from "react";
import axios from "axios";
const Newsletter = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	const handleInput = e => setEmail(e.target.value);
	const handleSubmit = async event => {
		event.preventDefault();

		// console.log(email);
		setError("");

		try {
			let response = await fetch(`/.netlify/functions/subscribe`, {
				method: "POST",
				body: email,
				headers: {
					"Content-Type": "application/json"
				}
			});
			if (response.status === 200) {
				// setPaymentComplete(true)
				console.log("Purchase Completed!");
			}

			if (response.ok) {
				console.log("response:", response);
				setIsSuccess(true);
				console.log("response.ok");
			} else {
				const body = await response.json();
				setError(body.errorMessage);
			}
			// console.log("body:", body);
		} catch (error) {
			// console.log("tryCATCH", error);
			setError("Failed to submit. Please check email and try again.");
		}
		return false;
	};
	return (
		<form className="newsletter" onSubmit={handleSubmit}>
			<p>Newsletter</p>
			{isSuccess ? (
				<>
					<p>Thank you! You've subscribed.</p>
				</>
			) : (
				<>
					<div className="newsletter__inner">
						<input
							onChange={handleInput}
							placeholder="enter your email address"
							value={email}
							type="text"
						/>
						<button alt="submit">Subscribe</button>
					</div>
					{error !== "" && <p>{error}</p>}
				</>
			)}
		</form>
	);
};

export default Newsletter;
