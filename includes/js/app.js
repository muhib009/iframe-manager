( function ( $ ) {
	// gutenberg blocks loaded
	$( document ).on( 'DOMNodeInserted', function ( e ) {
		const im = iframemanager();
		$( e.target )
			.find( '.ifm_iframe__wrapper' )
			.each( function () {
				const $thisIframe = $( this );
				const serviceType = $thisIframe.data( 'service' );
				const serviceId = $thisIframe.data( 'yid' );
				const videomId = $thisIframe.data( 'vid' );
				const twitchId = $thisIframe.data( 'tid' );
				const twitchParent = $thisIframe.data( 'parentname' );
				const thumbnailURL = $thisIframe.data( 'thumbnail' );
				const noticeTxt = $thisIframe.data( 'notice' );
				const noticeLoadBtn = $thisIframe.data( 'loadbtn' );
				const noticeHideWarning = $thisIframe.data( 'hidewarning' );

				if ( serviceType === 'youtube' ) {
					// Example with youtube embed
					im.run( {
						currLang: 'en',
						services: {
							youtube: {
								embedUrl: `https://www.youtube-nocookie.com/embed/${ serviceId }`,
								//thumbnailUrl: `${ thumbnailURL }`,
								iframe: {
									allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
								},
								languages: {
									en: {
										notice: `${ noticeTxt }`,
										loadBtn: `${ noticeLoadBtn }`,
										loadAllBtn: `${ noticeHideWarning }`,
									},
								},
							},
						},
					} );
				} else if ( serviceType === 'vimeo' ) {
					im.run( {
						currLang: 'en',
						services: {
							vimeo: {
								embedUrl: `https://player.vimeo.com/video/${ videomId }`,

								iframe: {
									allow: 'fullscreen; picture-in-picture, allowfullscreen;',
								},

								thumbnailUrl: async (
									dataId,
									setThumbnail
								) => {
									const url = `https://vimeo.com/api/v2/video/${ dataId }.json`;
									const response = await (
										await fetch( url )
									 ).json();
									const thumbnailUrl =
										response[ 0 ]?.thumbnail_large;
									thumbnailUrl &&
										setThumbnail( thumbnailUrl );
								},

								languages: {
									en: {
										notice: `${ noticeTxt }`,
										loadBtn: `${ noticeLoadBtn }`,
										loadAllBtn: `${ noticeHideWarning }`,
									},
								},
							},
						},
					} );
				} else if ( serviceType === 'twitch' ) {
					im.run( {
						currLang: 'en',
						services: {
							twitch: {
								embedUrl: `https://player.twitch.tv/?${ twitchId }&parent=${ twitchParent }`,

								iframe: {
									allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
								},

								languages: {
									en: {
										notice: `${ noticeTxt }`,
										loadBtn: `${ noticeLoadBtn }`,
										loadAllBtn: `${ noticeHideWarning }`,
									},
								},
							},
						},
					} );
				} else if ( serviceType === 'dailymotion' ) {
					im.run( {
						currLang: 'en',
						services: {
							dailymotion: {
								embedUrl: `https://www.dailymotion.com/embed/video/${ serviceId }`,

								thumbnailUrl: async (
									dataId,
									setThumbnail
								) => {
									// Use dailymotion's API to fetch the thumbnail
									const url = `https://api.dailymotion.com/video/${ dataId }?fields=thumbnail_large_url`;
									const response = await (
										await fetch( url )
									 ).json();
									const thumbnailUlr =
										response?.thumbnail_large_url;
									thumbnailUlr &&
										setThumbnail( thumbnailUlr );
								},

								iframe: {
									allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
								},

								languages: {
									en: {
										notice: `${ noticeTxt }`,
										loadBtn: `${ noticeLoadBtn }`,
										loadAllBtn: `${ noticeHideWarning }`,
									},
								},
							},
						},
					} );
				} else if ( serviceType === 'googlemap' ) {
					im.run( {
						currLang: 'en',
						services: {
							googlemaps: {
								embedUrl: `https://www.google.com/maps/embed?pb=${ serviceId }`,

								iframe: {
									allow: 'picture-in-picture; fullscreen;',
								},

								languages: {
									en: {
										notice: `${ noticeTxt }`,
										loadBtn: `${ noticeLoadBtn }`,
										loadAllBtn: `${ noticeHideWarning }`,
									},
								},
							},
						},
					} );
				}
			} );
	} );
} )( jQuery );
