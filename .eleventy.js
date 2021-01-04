const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(eleventyVue, {
		// dir to store compiled vue single file components
		cacheDirectory: "./cache/vue/",

		// postcss in single file components
		rollupPluginOptions: {
			style: {
				postcssPlugins: [
					require("autoprefixer")
				]
			}
		}
	});
	eleventyConfig.addTransform("add-html-doctype", (content, outputPath) => {
		let doctype = `<!doctype html>
`;
		if(outputPath.endsWith(".html") && !content.trim().toLowerCase().startsWith(doctype)) {
			return `${doctype}${content}`;
		}
		return content;
	})
}
