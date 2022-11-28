const express = require("express");

const app = express();

app.get("/", (req, res) => {
	const { interest } = req.query;
	res.send({
		items: [
			{
				interest,
				template: "<h1>This is heading one.</h1><p>This is a paragraph.</p>",
			},
		],
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Example app listening on port" + PORT);
});
