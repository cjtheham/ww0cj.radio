const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

const { eleventyImagePlugin } = require("@11ty/eleventy-img");
const eleventyWebcPlugin = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
  });

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addFilter("moYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('MMM yyyy');
  });

	
	// WebC
	eleventyConfig.addPlugin(eleventyWebcPlugin, {
		components: [
			// …
			// Add as a global WebC component
			"npm:@11ty/eleventy-img/*.webc",
		]
	});

	// Image plugin
	eleventyConfig.addPlugin(eleventyImagePlugin, {
		// Set global default options
		formats: ["webp", "jpeg", "png"],
		urlPath: "/img/",
		outputDir: "./imgs/",

		// Notably `outputDir` is resolved automatically
		// to the project output directory

		defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
	});

	eleventyConfig.addPlugin(pluginRss);

	// When `permalink` is false, the file is not written to disk
	eleventyConfig.addGlobalData("eleventyComputed.permalink", function() {
		return (data) => {
			// Always skip during non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return false;
			}

			return data.permalink;
		}
	});

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
	eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function() {
		return (data) => {
			// Always exclude from non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return true;
			}

			return data.eleventyExcludeFromCollections;
		}
	});

	eleventyConfig.on("eleventy.before", ({runMode}) => {
		// Set the environment variable
		if(runMode === "serve" || runMode === "watch") {
			process.env.BUILD_DRAFTS = true;
		}
	});
}