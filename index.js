const express = require("express");
const cors = require("cors");
const ampCors = require("amp-toolbox-cors");

const app = express();

app.get("/", (req, res) => {
	const { interest } = req.query;
	// set headers
	res.set("Access-Control-Allow-Methods", "GET, POST");
	res.set("Access-Control-Allow-Headers", "Content-Type");
	res.set(
		"AMP-Access-Control-Allow-Source-Origin",
		"abhishek.sharma@rtcamp.com"
	);
	res.set(
		"Access-Control-Expose-Headers",
		"AMP-Access-Control-Allow-Source-Origin"
	);
	res.set("Content-Type", "application/json");
	res.set("AMP-Email-Allow-Sender", "abhishek.sharma@rtcamp.com");

	// set response
	res.json({
		items: [
			{
				featured_image:
					"https://rtcamp-salesforce-preprod.go-vip.net/wp-content/uploads/2022/08/799e002f-06b3-39e4-b447-477e915c2151.jpg?w=1348",
				post_title: "Officia qui repellat aliquid",
				post_excerpt: "Qui id quia.",
				categories: ["Arts", "Entertainment", "Events", "Ipsum lorem"],
				post_link:
					"https://rtcamp-salesforce-preprod.go-vip.net/blog/2022/08/04/officia-qui-repellat-aliquid/",
			},
			{
				featured_image: "",
				post_title: "Deleniti numquam sint tenetur aut",
				post_excerpt:
					"Assumenda tempore.\n\nEx sequi aspernatur.\n\nCum delectus.",
				categories: ["Arts", "Ipsum lorem", "News", "Science"],
				post_link:
					"https://rtcamp-salesforce-preprod.go-vip.net/blog/2022/08/04/deleniti-numquam-sint-tenetur-aut/",
			},
			{
				featured_image: "",
				post_title: "Laborum ducimus et debitis dolorem tempore aut",
				post_excerpt: "Voluptate.",
				categories: ["Arts", "Events", "Ipsum lorem"],
				post_link:
					"https://rtcamp-salesforce-preprod.go-vip.net/blog/2022/08/04/laborum-ducimus-et-debitis-dolorem-tempore-aut/",
			},
		],
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("Example app listening on port" + PORT);
});
