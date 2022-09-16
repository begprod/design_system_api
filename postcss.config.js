module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-nested"),
		require("postcss-simple-vars"),
		require("postcss-hexrgba"),
		require("postcss-custom-media"),
		require("postcss-reporter"),
		...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
	],
};
