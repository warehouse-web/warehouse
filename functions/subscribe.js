const fetch = require("node-fetch");
const base64 = require("base-64");

exports.handler = async (event, context) => {
	// Only allow POST
	if (event.httpMethod !== "POST") {
		return { statusCode: 405, body: "Method Not Allowed" };
	}
	const errorGen = msg => {
		return { statusCode: 500, body: msg };
	};
	try {
		const { email } = JSON.parse(event.body);
		if (!email) {
			return errorGen("Missing Email");
		}
		const subscriber = {
			email_address: email,
			status: "subscribed"
		};
		const creds = `any:${process.env.MAILCHIMP_API_KEY}`;
		const response = await fetch(
			"https://us5.api.mailchimp.com/3.0/lists/3684c37c49/members/",
			{
				method: "POST",
				headers: {
					Accept: "*/*",
					"Content-Type": "application/json",
					Authorization: `Basic ${base64.encode(creds)}`
				},
				body: JSON.stringify(subscriber)
			}
		);
		const data = await response.json();

		if (!response.ok) {
			// NOT res.status >= 200 && res.status < 300
			return { statusCode: data.status, body: data.detail };
		}
		return {
			statusCode: 200,
			body: JSON.stringify({
				msg: "You've signed up to the mailing list!",
				detail: data
			})
		};
	} catch (err) {
		console.log(err); // output to netlify function log
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message })
		};
	}
};

// const mailChimpAPI = process.env.MAILCHIMP_API_KEY;
// const data = {
// 	email_address: email,
// 	status: "subscribed",
// 	merge_fields: {}
// };

// const subscriber = JSON.stringify(data);
// console.log("Sending data to mailchimp", subscriber);
// console.log("going in the function");

// request(
// 	{
// 		method: "POST",
// 		url: "https://us5.api.mailchimp.com/3.0/lists/3684c37c49/members",
// 		body: subscriber,
// 		headers: {
// 			Authorization: `Basic ${mailChimpAPI}`,
// 			"Content-Type": "application/json"
// 		}
// 	},
// 	(error, response, body) => {
// 		if (error) {
// 			callback(error, null);
// 		}
// 		const bodyObj = JSON.parse(body);

// 		console.log("Mailchimp body: " + JSON.stringify(bodyObj));
// 		console.log("Status Code: " + response.statusCode);

// 		if (response.statusCode < 300) {
// 			console.log("Added to list in Mailchimp subscriber list");
// 			callback(null, {
// 				statusCode: 201,
// 				headers: {
// 					"Content-Type": "application/json",
// 					"Access-Control-Allow-Origin": "*",
// 					"Access-Control-Allow-Credentials": "true"
// 				},
// 				body: JSON.stringify({
// 					status: "saved email"
// 				})
// 			});
// 		} else {
// 			console.log("Error from mailchimp", bodyObj.detail);
// 			callback(bodyObj.detail, null);
// 		}
// 	}
// );
// };
