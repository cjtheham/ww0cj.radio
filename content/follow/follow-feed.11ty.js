module.exports = class {
	data() {
		return {
			permalink: "/follow.xml",
			layout: false,
			eleventyExcludeFromCollections: true
		}
	}

	async render() {
		const { ActivityFeed } = await import("@11ty/eleventy-activity-feed");

		let feed = new ActivityFeed();

		feed.setCacheDuration("1d"); // cache is persisted now, so we’ll update this at maximum once per day

		feed.addSource("atom", "Blog","https://ww0cj.radio/feed");
    feed.addSource("rss", "Letterboxd", "https://letterboxd.com/roguefoam/rss/");

		// It’s private for now
		// feed.addSource("twitterUser", "Twitter", "zachleat", "96383");

		return feed.toRssFeed({
			title: "WW0CJ's Merged RSS Feed",
			language: "en",
			url: "https://ww0cj.radio/follow.xml",
			subtitle: "One centralized feed of CJ's activity across the web.",
		});
	}
};

