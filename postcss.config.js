module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-nested"),
		require("postcss-custom-media"),
		// ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
	],
};
