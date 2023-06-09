( function ( $ ) {
	const im = iframemanager();

	const iframeItems = $( '.ifm_iframe__wrapper' );

	iframeItems.each( function () {
		const $thisframe = $( this );
		const serviceType = $thisframe.data( 'service' );
		const yotubeId = $thisframe.data( 'yid' );
		const videomId = $thisframe.data( 'vid' );
		const twitchId = $thisframe.data( 'tid' );
		const dailymotionId = $thisframe.data( 'did' );
		const googlemapId = $thisframe.data( 'gid' );
		const googletwomapId = $thisframe.data( 'gmapid' );
		const googletwoAPI = $thisframe.data( 'api' );
		const twitchParent = $thisframe.data( 'parentname' );
		const thumbnailUrl = $thisframe.data( 'thumbnail' );
		const noticeTxt = $thisframe.data( 'notice' );
		const noticeLoadBtn = $thisframe.data( 'loadbtn' );
		const noticeHideWarning = $thisframe.data( 'hidewarning' );

		if ( serviceType === 'youtube' ) {
			im.run( {
				currLang: 'en',
				services: {
					youtube: {
						embedUrl: `https://www.youtube-nocookie.com/embed/${ yotubeId }`,

						//thumbnailUrl: `${ thumbnailUrl }`,

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

						thumbnailUrl: async ( dataId, setThumbnail ) => {
							const url = `https://vimeo.com/api/v2/video/${ dataId }.json`;
							const response = await (
								await fetch( url )
							 ).json();
							const thumbnailUrl = response[ 0 ]?.thumbnail_large;
							thumbnailUrl && setThumbnail( thumbnailUrl );
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
						embedUrl: `https://www.dailymotion.com/embed/video/${ dailymotionId }`,

						thumbnailUrl: async ( dataId, setThumbnail ) => {
							// Use dailymotion's API to fetch the thumbnail
							const url = `https://api.dailymotion.com/video/${ dataId }?fields=thumbnail_large_url`;
							const response = await (
								await fetch( url )
							 ).json();
							const thumbnailUlr = response?.thumbnail_large_url;
							thumbnailUlr && setThumbnail( thumbnailUlr );
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
		} else if ( serviceType === 'googlemaps' ) {
			im.run( {
				currLang: 'en',
				services: {
					googlemaps: {
						embedUrl: `https://www.google.com/maps/embed?pb=${ googlemapId }`,

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
		} else if ( serviceType === 'googlemapsv2' ) {
			im.run( {
				currLang: 'en',
				services: {
					googlemaps: {
						embedUrl:
							'https://www.google.com/maps/embed/v1/place?key=API_KEY&q={data-id}',

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
			} );
		}
	} );
} )( jQuery );
