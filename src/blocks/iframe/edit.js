import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	Button,
	ToolbarButton,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit({ attributes, setAttributes }) {
	const {
		content,
		color,
		mediaType,
		ytResourceID,
		ytThumbnail,
		twitchResourceID,
		vmResourceID,
		gmResourceID,
		vmThumbnail,
		dailyMotionResourceID,
		dailyMotionThumbnail,
	} = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Media Settings', 'ifm-manager')}
					initialOpen={true}
				>
					<SelectControl
						label="Select Media Type"
						value={mediaType}
						options={[
							{ label: 'Twitch', value: 'twitch' },
							{ label: 'Youtube', value: 'youtube' },
							{ label: 'Dailymotion', value: 'dailymotion' },
							{ label: 'Vimeo', value: 'vimeo' },
							{ label: 'Google Map', value: 'googlemaps' },
						]}
						onChange={(value) =>
							setAttributes({ mediaType: value })
						}
					/>

					{mediaType === 'youtube' && (
						<TextControl
							label="Resource ID"
							value={ytResourceID}
							onChange={(value) =>
								setAttributes({
									ytResourceID: value,
								})
							}
						/>
					)}

					{mediaType === 'youtube' &&
						(ytThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={ytThumbnail.url}
									alt={
										ytThumbnail.alt
											? ytThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											ytThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={ytThumbnail && ytThumbnail.id}
									render={({ open }) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={open}
											label="Edit"
											icon="edit"
										/>
									)}
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											ytThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={ytThumbnail && ytThumbnail.id}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{__('Add Image', 'ifm-manager')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						))}

					{mediaType === 'twitch' && (
						<TextControl
							label="Resource ID"
							value={twitchResourceID}
							onChange={(value) =>
								setAttributes({
									twitchResourceID: value,
								})
							}
						/>
					)}

					{mediaType === 'vimeo' && (
						<TextControl
							label="Resource ID"
							value={vmResourceID}
							onChange={(value) =>
								setAttributes({
									vmResourceID: value,
								})
							}
						/>
					)}

					{mediaType === 'vimeo' &&
						(vmThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={vmThumbnail.url}
									alt={
										vmThumbnail.alt
											? vmThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											vmThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={vmThumbnail && vmThumbnail.id}
									render={({ open }) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={open}
											label="Edit"
											icon="edit"
										/>
									)}
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											vmThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={vmThumbnail && vmThumbnail.id}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{__('Add Image', 'ifm-manager')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						))}

					{mediaType === 'dailymotion' && (
						<TextControl
							label="Resource ID"
							value={dailyMotionResourceID}
							onChange={(value) =>
								setAttributes({
									dailyMotionResourceID: value,
								})
							}
						/>
					)}

					{mediaType === 'dailymotion' &&
						(dailyMotionThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={dailyMotionThumbnail.url}
									alt={
										dailyMotionThumbnail.alt
											? dailyMotionThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											dailyMotionThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={
										dailyMotionThumbnail &&
										dailyMotionThumbnail.id
									}
									render={({ open }) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={open}
											label="Edit"
											icon="edit"
										/>
									)}
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) =>
										setAttributes({
											dailyMotionThumbnail: media,
										})
									}
									allowedTypes={['image']}
									value={
										dailyMotionThumbnail &&
										dailyMotionThumbnail.id
									}
									render={({ open }) => (
										<Button
											onClick={open}
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{__('Add Image', 'ifm-manager')}
										</Button>
									)}
								/>
							</MediaUploadCheck>
						))}

					{mediaType === 'googlemaps' && (
						<TextControl
							label="Resource ID"
							value={gmResourceID}
							onChange={(value) =>
								setAttributes({
									gmResourceID: value,
								})
							}
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				{mediaType === 'youtube' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="youtube"
						data-id={ytResourceID}
						//data-thumbnail={ytThumbnail.url}
						data-autoscale
					></div>
				)}

				{mediaType === 'twitch' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="twitch"
						data-id={twitchResourceID}
						data-autoscale
					></div>
				)}

				{mediaType === 'vimeo' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="vimeo"
						//data-thumbnail={vmThumbnail.url}
						data-id={vmResourceID}
						data-autoscale
					></div>
				)}

				{mediaType === 'dailymotion' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="dailymotion"
						// data-thumbnail={dailyMotionThumbnail.url}
						data-id={dailyMotionResourceID}
						data-autoscale
					></div>
				)}

				{mediaType === 'googlemaps' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="googlemaps"
						data-id={gmResourceID}
						data-autoscale
					></div>
				)}
			</div>
		</Fragment>
	);
}
