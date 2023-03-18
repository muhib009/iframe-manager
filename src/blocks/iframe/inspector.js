/**
 * WordPress dependencies
 */
import {
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	TextControl,
	Button,
	ToolbarButton,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Import Controls
 */
import ColorControl from "../../controls/colorcontrol/colorcontrol";

const Inspector = ({ attributes, setAttributes }) => {
	const {
		mediaType,
		ytResourceID,
		ytThumbnail,
		twitchResourceID,
		vmResourceID,
		vmThumbnail,
	} = attributes;
	return (
		<InspectorControls>
			<PanelBody
				title={__("Media Settings", "postkit-blocks")}
				initialOpen={true}
			>
				<SelectControl
					label="Select Media Type"
					value={mediaType}
					options={[
						{ label: "Twitch", value: "twitch" },
						{ label: "Youtube", value: "youtube" },
						{ label: "Dailymotion", value: "dailymotion" },
						{ label: "Vimeo", value: "vimeo" },
						{ label: "Google Map", value: "google-map" },
					]}
					onChange={(value) => setAttributes({ mediaType: value })}
				/>

				{mediaType === "youtube" && (
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

				{mediaType === "youtube" &&
					(ytThumbnail ? (
						<div className="ifm-image-main">
							<img
								src={ytThumbnail.url}
								alt={ytThumbnail.alt ? ytThumbnail.alt : "thumbnail"}
							/>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										ytThumbnail: media,
									})
								}
								allowedTypes={["image"]}
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
								allowedTypes={["image"]}
								value={ytThumbnail && ytThumbnail.id}
								render={({ open }) => (
									<Button
										onClick={open}
										variant="secondary"
										icon="upload"
										className="scb-image-upload-btn"
									>
										{__("Add Image", "iframe-manager")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					))}

				{mediaType === "twitch" && (
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

				{mediaType === "vimeo" && (
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

				{mediaType === "vimeo" &&
					(vmThumbnail ? (
						<div className="ifm-image-main">
							<img
								src={vmThumbnail.url}
								alt={vmThumbnail.alt ? vmThumbnail.alt : "thumbnail"}
							/>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										vmThumbnail: media,
									})
								}
								allowedTypes={["image"]}
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
								allowedTypes={["image"]}
								value={vmThumbnail && vmThumbnail.id}
								render={({ open }) => (
									<Button
										onClick={open}
										variant="secondary"
										icon="upload"
										className="scb-image-upload-btn"
									>
										{__("Add Image", "iframe-manager")}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					))}
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
