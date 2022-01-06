const ghpages = require("gh-pages");

ghpages.publish(__dirname, (err) => {
	console.log("Failed to publish app: ", err);
});
