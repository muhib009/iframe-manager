(function () {
	const im = iframemanager();

	const abc = im.attr('mediaType');
	console.log(abc);

	// Example with youtube embed
	im.run({
		currLang: 'en',
		services: {
			youtube: {
				embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
				thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
				iframe: {
					allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
				},
				languages: {
					en: {
						notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
						loadBtn: 'Load video',
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});

	im.run({
		currLang: 'en',
		services: {
			vimeo: {
				embedUrl: 'https://player.vimeo.com/video/{data-id}',

				iframe: {
					allow: 'fullscreen; picture-in-picture, allowfullscreen;',
				},

				thumbnailUrl: async (dataId, setThumbnail) => {
					const url = `https://vimeo.com/api/v2/video/${dataId}.json`;
					const response = await (await fetch(url)).json();
					const thumbnailUrl = response[0]?.thumbnail_large;
					thumbnailUrl && setThumbnail(thumbnailUrl);
				},

				languages: {
					en: {
						notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">terms and conditions</a> of vimeo.com.',
						loadBtn: 'Load video',
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});

	im.run({
		currLang: 'en',
		services: {
			dailymotion: {
				embedUrl: 'https://www.dailymotion.com/embed/video/{data-id}',

				thumbnailUrl: async (dataId, setThumbnail) => {
					// Use dailymotion's API to fetch the thumbnail
					const url = `https://api.dailymotion.com/video/${dataId}?fields=thumbnail_large_url`;
					const response = await (await fetch(url)).json();
					const thumbnailUlr = response?.thumbnail_large_url;
					thumbnailUlr && setThumbnail(thumbnailUlr);
				},

				iframe: {
					allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
				},

				languages: {
					en: {
						notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.dailymotion.com/legal/privacy?localization=en" target="_blank">terms and conditions</a> of dailymotion.com.',
						loadBtn: 'Load video',
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});

	im.run({
		currLang: 'en',
		services: {
			twitch: {
				embedUrl: `https://player.twitch.tv/?{data-id}&parent=${location.hostname}`,

				iframe: {
					allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
				},

				languages: {
					en: {
						notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.twitch.tv/p/en/legal/terms-of-service/" target="_blank">terms and conditions</a> of twitch.com.',
						loadBtn: 'Load stream',
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});

	im.run({
		currLang: 'en',
		services: {
			googlemaps: {
				embedUrl: 'https://www.google.com/maps/embed?pb={data-id}',

				iframe: {
					allow: 'picture-in-picture; fullscreen;',
				},

				languages: {
					en: {
						notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">terms and conditions</a> of Google Maps.',
						loadBtn: 'Load map',
						loadAllBtn: "Don't ask again",
					},
				},
			},
		},
	});
})();
