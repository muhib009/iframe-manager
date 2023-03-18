(function () {
	const im = iframemanager();

	// Example with youtube embed
	im.run({
		currLang: "en",
		services: {
			youtube: {
				embedUrl: "https://www.youtube-nocookie.com/embed/{data-id}",
				thumbnailUrl: "https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg",
				iframe: {
					allow:
						"accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;",
				},
				languages: {
					en: {
						notice:
							'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
						loadBtn: "Load video",
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});
})();
