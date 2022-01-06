const ghpages = require("gh-pages");

ghpages.publish(
	__dirname,
	{
		branch: "master",
		repo: "git@github.com:jaybarbhaiya/simple-js-game.git",
	},
	(err) => {
		console.log("Failed to publish app: ", err);
	}
);
