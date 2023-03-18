/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/iframe/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/edit.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/blocks/iframe/inspector.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helper_svgicons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helper/svgicons */ "./src/helper/svgicons.js");

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * External dependencies
 */



//

const Edit = _ref => {
  let {
    attributes,
    setAttributes,
    clientId
  } = _ref;
  const {
    uniqueId,
    iconSizes,
    mediaType,
    ytResourceID,
    twitchResourceID,
    vmResourceID
  } = attributes;
  // set unique id
  setAttributes({
    uniqueId: `iframe-blocks-${clientId.slice(0, 8)}`
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
					@media (min-width: 1024px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.desktop}${iconSizes.unit};
							height: ${iconSizes.sizes.desktop}${iconSizes.unit};
						}
					}

					@media (min-width: 768px) and (max-width: 1023px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.tablet}${iconSizes.unit};
							height: ${iconSizes.sizes.tablet}${iconSizes.unit};
						}
					}

					@media (max-width: 767px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.mobile}${iconSizes.unit};
							height: ${iconSizes.sizes.mobile}${iconSizes.unit};
						}
					}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: uniqueId
  }), mediaType === "youtube" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-service": "youtube",
    "data-id": ytResourceID,
    "data-thumbnail": "<path-to-image>",
    "data-autoscale": true
  }), mediaType === "twitch" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-service": "twitch",
    "data-id": twitchResourceID,
    "data-autoscale": true
  }), mediaType === "vimeo" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-service": "vimeo",
    "data-id": vmResourceID,
    "data-autoscale": true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/blocks/iframe/index.js":
/*!************************************!*\
  !*** ./src/blocks/iframe/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/iframe/style.scss");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/blocks/iframe/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/blocks/iframe/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/blocks/iframe/save.js");




/**
 * Internal dependencies
 */



/**
 * Block Registration
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_2__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/blocks/iframe/inspector.js":
/*!****************************************!*\
  !*** ./src/blocks/iframe/inspector.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controls_colorcontrol_colorcontrol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../controls/colorcontrol/colorcontrol */ "./src/controls/colorcontrol/colorcontrol.js");

/**
 * WordPress dependencies
 */




/**
 * Import Controls
 */

const Inspector = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    mediaType,
    ytResourceID,
    ytThumbnail,
    twitchResourceID,
    vmResourceID,
    vmThumbnail
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Media Settings", "postkit-blocks"),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Select Media Type",
    value: mediaType,
    options: [{
      label: "Twitch",
      value: "twitch"
    }, {
      label: "Youtube",
      value: "youtube"
    }, {
      label: "Dailymotion",
      value: "dailymotion"
    }, {
      label: "Vimeo",
      value: "vimeo"
    }, {
      label: "Google Map",
      value: "google-map"
    }],
    onChange: value => setAttributes({
      mediaType: value
    })
  }), mediaType === "youtube" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Resource ID",
    value: ytResourceID,
    onChange: value => setAttributes({
      ytResourceID: value
    })
  }), mediaType === "youtube" && (ytThumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm-image-main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ytThumbnail.url,
    alt: ytThumbnail.alt ? ytThumbnail.alt : "thumbnail"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      ytThumbnail: media
    }),
    allowedTypes: ["image"],
    value: ytThumbnail && ytThumbnail.id,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        className: "ifm-edit-icon",
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      ytThumbnail: media
    }),
    allowedTypes: ["image"],
    value: ytThumbnail && ytThumbnail.id,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        variant: "secondary",
        icon: "upload",
        className: "scb-image-upload-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add Image", "iframe-manager"));
    }
  }))), mediaType === "twitch" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Resource ID",
    value: twitchResourceID,
    onChange: value => setAttributes({
      twitchResourceID: value
    })
  }), mediaType === "vimeo" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Resource ID",
    value: vmResourceID,
    onChange: value => setAttributes({
      vmResourceID: value
    })
  }), mediaType === "vimeo" && (vmThumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm-image-main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: vmThumbnail.url,
    alt: vmThumbnail.alt ? vmThumbnail.alt : "thumbnail"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      vmThumbnail: media
    }),
    allowedTypes: ["image"],
    value: vmThumbnail && vmThumbnail.id,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToolbarButton, {
        className: "ifm-edit-icon",
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      vmThumbnail: media
    }),
    allowedTypes: ["image"],
    value: vmThumbnail && vmThumbnail.id,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        variant: "secondary",
        icon: "upload",
        className: "scb-image-upload-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Add Image", "iframe-manager"));
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Inspector);

/***/ }),

/***/ "./src/blocks/iframe/save.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/save.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/**
 * WordPress dependencies
 */


/**
 * External dependencies
 */

const Save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    uniqueId,
    mediaType,
    ytThumbnail,
    ytResourceID,
    twitchResourceID,
    vmResourceID
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: uniqueId
  }), mediaType === "youtube" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-service": mediaType,
    "data-id": ytResourceID,
    "data-thumbnail": ytThumbnail.url,
    "data-autoscale": true
  }), mediaType === "twitch" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-service": "twitch",
    "data-id": twitchResourceID,
    "data-autoscale": true
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Save);

/***/ }),

/***/ "./src/controls/colorcontrol/colorcontrol.js":
/*!***************************************************!*\
  !*** ./src/controls/colorcontrol/colorcontrol.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _colorcontrol_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colorcontrol.scss */ "./src/controls/colorcontrol/colorcontrol.scss");

/**
 * WordPress dependencies
 */




//import style

const ColorControl = _ref => {
  let {
    label,
    value,
    attribute,
    setAttributes,
    disableAlpha
  } = _ref;
  const [visible, setVisible] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "postkit-blocks-color-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label",
    htmlFor: "color-picker"
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "color-indicator",
    onClick: () => setVisible(true)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: value
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-body",
    id: "color-picker"
  }, visible && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
    onFocusOutside: () => setVisible(false),
    position: "bottom left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "color-picker"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: value,
    onChangeComplete: v => setAttributes({
      [attribute]: v.hex
    }) // colorName= containerBg
    ,

    disableAlpha: disableAlpha
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "postkit-blocks-clear-btn",
    onClick: () => setAttributes({
      [attribute]: ""
    })
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Clear", "postkit-blocks")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorControl);

/***/ }),

/***/ "./src/helper/svgicons.js":
/*!********************************!*\
  !*** ./src/helper/svgicons.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const svgicons = {
  zero: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160 32.01c-88.37 0-160 71.63-160 160v127.1c0 88.37 71.63 160 160 160s160-71.63 160-160V192C320 103.6 248.4 32.01 160 32.01zM256 320c0 52.93-43.06 96-96 96c-52.93 0-96-43.07-96-96V192c0-52.94 43.07-96 96-96c52.94 0 96 43.06 96 96V320z"
  })),
  one: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 256 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M256 448c0 17.67-14.33 32-32 32H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h64V123.8L49.75 154.6C35.02 164.5 15.19 160.4 5.375 145.8C-4.422 131.1-.4531 111.2 14.25 101.4l96-64c9.828-6.547 22.45-7.187 32.84-1.594C153.5 41.37 160 52.22 160 64.01v352h64C241.7 416 256 430.3 256 448z"
  })),
  two: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 448c0 17.67-14.33 32-32 32H32c-13.08 0-24.83-7.953-29.7-20.09c-4.859-12.12-1.859-26 7.594-35.03l193.6-185.1c31.36-30.17 33.95-80 5.812-113.4c-14.91-17.69-35.86-28.12-58.97-29.38C127.4 95.83 105.3 103.9 88.53 119.9L53.52 151.7c-13.08 11.91-33.33 10.89-45.2-2.172C-3.563 136.5-2.594 116.2 10.48 104.3l34.45-31.3c28.67-27.34 68.39-42.11 108.9-39.88c40.33 2.188 78.39 21.16 104.4 52.03c49.8 59.05 45.2 147.3-10.45 200.8l-136 130H288C305.7 416 320 430.3 320 448z"
  })),
  three: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 344c0 74.98-61.02 136-136 136H103.6c-46.34 0-87.31-29.53-101.1-73.48c-5.594-16.77 3.484-34.88 20.25-40.47c16.75-5.609 34.89 3.484 40.47 20.25c5.922 17.77 22.48 29.7 41.23 29.7H184c39.7 0 72-32.3 72-72s-32.3-72-72-72H80c-13.2 0-25.05-8.094-29.83-20.41C45.39 239.3 48.66 225.3 58.38 216.4l131.4-120.4H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h240c13.2 0 25.05 8.094 29.83 20.41c4.781 12.3 1.516 26.27-8.203 35.19l-131.4 120.4H184C258.1 208 320 269 320 344z"
  })),
  four: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M384 334.2c0 17.67-14.33 32-32 32h-32v81.78c0 17.67-14.33 32-32 32s-32-14.33-32-32v-81.78H32c-10.97 0-21.17-5.625-27.05-14.89c-5.859-9.266-6.562-20.89-1.875-30.81l128-270.2C138.6 34.33 157.8 27.56 173.7 35.09c15.97 7.562 22.78 26.66 15.22 42.63L82.56 302.2H256V160c0-17.67 14.33-32 32-32s32 14.33 32 32v142.2h32C369.7 302.2 384 316.6 384 334.2z"
  })),
  five: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 344.6c0 74.66-60.73 135.4-135.4 135.4H104.7c-46.81 0-88.22-29.83-103-74.23c-5.594-16.77 3.469-34.89 20.23-40.48c16.83-5.625 34.91 3.469 40.48 20.23c6.078 18.23 23.08 30.48 42.3 30.48h79.95c39.36 0 71.39-32.03 71.39-71.39s-32.03-71.38-71.39-71.38H32c-9.484 0-18.47-4.203-24.56-11.48C1.359 254.5-1.172 244.9 .5156 235.6l32-177.2C35.27 43.09 48.52 32.01 64 32.01l192 .0049c17.67 0 32 14.33 32 32s-14.33 32-32 32H90.73L70.3 209.2h114.3C259.3 209.2 320 269.1 320 344.6z"
  })),
  six: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M167.7 160.8l64.65-76.06c11.47-13.45 9.812-33.66-3.656-45.09C222.7 34.51 215.3 32.01 208 32.01c-9.062 0-18.06 3.833-24.38 11.29C38.07 214.5 0 245.5 0 320c0 88.22 71.78 160 160 160s160-71.78 160-160C320 234.4 252.3 164.9 167.7 160.8zM160 416c-52.94 0-96-43.06-96-96s43.06-95.1 96-95.1s96 43.06 96 95.1S212.9 416 160 416z"
  })),
  seven: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M315.6 80.14l-224 384c-5.953 10.19-16.66 15.88-27.67 15.88c-5.469 0-11.02-1.406-16.09-4.359c-15.27-8.906-20.42-28.5-11.52-43.77l195.9-335.9H32c-17.67 0-32-14.33-32-32s14.33-32 32-32h256c11.45 0 22.05 6.125 27.75 16.06S321.4 70.23 315.6 80.14z"
  })),
  eight: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M267.5 249.2C290 226.1 304 194.7 304 160c0-70.58-57.42-128-128-128h-32c-70.58 0-128 57.42-128 128c0 34.7 13.99 66.12 36.48 89.19C20.83 272.5 0 309.8 0 352c0 70.58 57.42 128 128 128h64c70.58 0 128-57.42 128-128C320 309.8 299.2 272.5 267.5 249.2zM144 96.01h32c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32c-35.3 0-64-28.7-64-64S108.7 96.01 144 96.01zM192 416H128c-35.3 0-64-28.7-64-64s28.7-64 64-64h64c35.3 0 64 28.7 64 64S227.3 416 192 416z"
  })),
  nine: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 320 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M160 32.01c-88.22 0-160 71.78-160 160c0 85.57 67.71 155.1 152.3 159.2l-64.65 76.06c-11.47 13.45-9.812 33.66 3.656 45.09c6 5.125 13.38 7.62 20.72 7.62c9.062 0 18.06-3.823 24.38-11.28C281.9 297.5 320 266.6 320 192C320 103.8 248.2 32.01 160 32.01zM160 288c-52.94 0-96-43.06-96-95.1s43.06-96 96-96s96 43.06 96 96S212.9 288 160 288z"
  })),
  "group-42": (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 640 512"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M320 96V416C341 416 361.8 411.9 381.2 403.8C400.6 395.8 418.3 383.1 433.1 369.1C447.1 354.3 459.8 336.6 467.8 317.2C475.9 297.8 480 277 480 256C480 234.1 475.9 214.2 467.8 194.8C459.8 175.4 447.1 157.7 433.1 142.9C418.3 128 400.6 116.2 381.2 108.2C361.8 100.1 341 96 320 96zM0 256L160 416L320 256L160 96L0 256zM480 256C480 277 484.1 297.8 492.2 317.2C500.2 336.6 512 354.3 526.9 369.1C541.7 383.1 559.4 395.8 578.8 403.8C598.2 411.9 618.1 416 640 416V96C597.6 96 556.9 112.9 526.9 142.9C496.9 172.9 480 213.6 480 256z"
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (svgicons);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/iframe/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/iframe/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/controls/colorcontrol/colorcontrol.scss":
/*!*****************************************************!*\
  !*** ./src/controls/colorcontrol/colorcontrol.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/iframe/block.json":
/*!**************************************!*\
  !*** ./src/blocks/iframe/block.json ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"apiVersion":2,"name":"ifm/iframe","version":"0.1.0","title":"iFrame Block","category":"ifm-blocks","icon":"video-alt2","description":"A simple iFrame Manager Block","supports":{"html":false,"anchor":true},"attributes":{"uniqueId":{"type":"string"},"content":{"type":"string","default":"Hello World!"},"color":{"type":"string"},"icon":{"type":"string"},"iconSizes":{"type":"object","default":{"sizes":{"desktop":24,"tablet":22,"mobile":20},"unit":"px"}},"mediaType":{"type":"string","default":"youtube"},"ytResourceID":{"type":"string","default":"FfCE-R9UugU"},"vmResourceID":{"type":"string","default":"hQzDhqWg48ZxRmom"},"ytThumbnail":{"type":"object"},"vmThumbnail":{"type":"object"},"twitchResourceID":{"type":"string","default":"spicyuuu"}},"textdomain":"iframe-manager","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/iframe/index": 0,
/******/ 			"blocks/iframe/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkpostkit_blocks"] = globalThis["webpackChunkpostkit_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/iframe/style-index"], () => (__webpack_require__("./src/blocks/iframe/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map