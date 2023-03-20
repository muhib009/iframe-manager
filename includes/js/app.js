(function ($) {
	// gutenberg blocks loaded
	$(document).on('DOMNodeInserted', function (e) {
		const im = iframemanager();
		$(e.target)
			.find('.ifm_iframe__wrapper')
			.each(function () {
				const $thisIfame = $(this);
				const serviceType = $thisIfame.data('service');
				const serviceId = $thisIfame.data('id');

				if (serviceType === 'youtube') {
					// Example with youtube embed
					im.run({
						currLang: 'en',
						services: {
							youtube: {
								embedUrl: `https://www.youtube-nocookie.com/embed/${serviceId}`,
								thumbnailUrl:
									'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
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
				} else if (serviceType === 'vimeo') {
					im.run({
						currLang: 'en',
						services: {
							vimeo: {
								embedUrl: `https://player.vimeo.com/video/${serviceId}`,

								iframe: {
									allow: 'fullscreen; picture-in-picture, allowfullscreen;',
								},

								thumbnailUrl: async (dataId, setThumbnail) => {
									const url = `https://vimeo.com/api/v2/video/${dataId}.json`;
									const response = await (
										await fetch(url)
									).json();
									const thumbnailUrl =
										response[0]?.thumbnail_large;
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
				} else if (serviceType === 'twitch') {
					im.run({
						currLang: 'en',
						services: {
							twitch: {
								embedUrl: `https://player.twitch.tv/?${serviceId}&parent=${location.hostname}`,

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
				} else if (serviceType === 'dailymotion') {
					im.run({
						currLang: 'en',
						services: {
							dailymotion: {
								embedUrl: `https://www.dailymotion.com/embed/video/${serviceId}`,

								thumbnailUrl: async (dataId, setThumbnail) => {
									// Use dailymotion's API to fetch the thumbnail
									const url = `https://api.dailymotion.com/video/${dataId}?fields=thumbnail_large_url`;
									const response = await (
										await fetch(url)
									).json();
									const thumbnailUlr =
										response?.thumbnail_large_url;
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
				} else if (serviceType === 'googlemap') {
					im.run({
						currLang: 'en',
						services: {
							googlemaps: {
								embedUrl: `https://www.google.com/maps/embed?pb=${serviceId}`,

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
				}
			});
	});
})(jQuery);
