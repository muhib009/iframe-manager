/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/iframe/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/iframe/editor.scss");
/* harmony import */ var _utilities_colors_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/colors-palette */ "./src/utilities/colors-palette.js");




const {
  Fragment
} = wp.element; // editor style

 // colors


function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    mediaType,
    ytResourceID,
    ytThumbnail,
    twitchResourceID,
    twitchParentName,
    vmResourceID,
    gmResourceID,
    gmapv2ResourceID,
    gmapv2API,
    vmThumbnail,
    dailyMotionResourceID,
    dailyMotionThumbnail,
    noticeText,
    loadVideoButton,
    hideWarningButton
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Media Settings', 'ifm-manager'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Select Media Type",
    value: mediaType,
    options: [{
      label: 'Twitch',
      value: 'twitch'
    }, {
      label: 'Youtube',
      value: 'youtube'
    }, {
      label: 'Dailymotion',
      value: 'dailymotion'
    }, {
      label: 'Vimeo',
      value: 'vimeo'
    }, {
      label: 'Google Map v1',
      value: 'googlemaps'
    }, {
      label: 'Google Map v2',
      value: 'googlemapsv2'
    }],
    onChange: value => setAttributes({
      mediaType: value
    })
  }), mediaType === 'youtube' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Resource ID",
    value: ytResourceID,
    onChange: value => setAttributes({
      ytResourceID: value
    })
  }), mediaType === 'youtube' && (ytThumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm-image-main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: ytThumbnail.url,
    alt: ytThumbnail.alt ? ytThumbnail.alt : 'thumbnail'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      ytThumbnail: media
    }),
    allowedTypes: ['image'],
    value: ytThumbnail && ytThumbnail.id,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        className: "ifm-edit-icon",
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      ytThumbnail: media
    }),
    allowedTypes: ['image'],
    value: ytThumbnail && ytThumbnail.id,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        variant: "secondary",
        icon: "upload",
        className: "scb-image-upload-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Image', 'ifm-manager'));
    }
  }))), mediaType === 'twitch' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Resource ID",
    value: twitchResourceID,
    onChange: value => setAttributes({
      twitchResourceID: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Channel Name",
    value: twitchParentName,
    onChange: value => setAttributes({
      twitchParentName: value
    })
  })), mediaType === 'vimeo' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Resource ID",
    value: vmResourceID,
    onChange: value => setAttributes({
      vmResourceID: value
    })
  }), mediaType === 'vimeo' && (vmThumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm-image-main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: vmThumbnail.url,
    alt: vmThumbnail.alt ? vmThumbnail.alt : 'thumbnail'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      vmThumbnail: media
    }),
    allowedTypes: ['image'],
    value: vmThumbnail && vmThumbnail.id,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        className: "ifm-edit-icon",
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      vmThumbnail: media
    }),
    allowedTypes: ['image'],
    value: vmThumbnail && vmThumbnail.id,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        variant: "secondary",
        icon: "upload",
        className: "scb-image-upload-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Image', 'ifm-manager'));
    }
  }))), mediaType === 'dailymotion' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Resource ID",
    value: dailyMotionResourceID,
    onChange: value => setAttributes({
      dailyMotionResourceID: value
    })
  }), mediaType === 'dailymotion' && (dailyMotionThumbnail ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm-image-main"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: dailyMotionThumbnail.url,
    alt: dailyMotionThumbnail.alt ? dailyMotionThumbnail.alt : 'thumbnail'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      dailyMotionThumbnail: media
    }),
    allowedTypes: ['image'],
    value: dailyMotionThumbnail && dailyMotionThumbnail.id,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
        className: "ifm-edit-icon",
        onClick: open,
        label: "Edit",
        icon: "edit"
      });
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => setAttributes({
      dailyMotionThumbnail: media
    }),
    allowedTypes: ['image'],
    value: dailyMotionThumbnail && dailyMotionThumbnail.id,
    render: _ref7 => {
      let {
        open
      } = _ref7;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        variant: "secondary",
        icon: "upload",
        className: "scb-image-upload-btn"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Image', 'ifm-manager'));
    }
  }))), mediaType === 'googlemaps' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Resource ID",
    value: gmResourceID,
    onChange: value => setAttributes({
      gmResourceID: value
    })
  }), mediaType === 'googlemapsv2' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Location Name",
    value: gmapv2ResourceID,
    onChange: value => setAttributes({
      gmapv2ResourceID: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "API Key",
    value: gmapv2API,
    onChange: value => setAttributes({
      gmapv2ResourceID: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Notice Settings', 'ifm-manager'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: "Notice",
    help: "This content is hosted by a third party. By showing the external content you accept the terms and conditions of youtube.com.",
    value: noticeText,
    onChange: value => setAttributes({
      noticeText: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Load Video Button Text",
    value: loadVideoButton,
    onChange: value => setAttributes({
      loadVideoButton: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Hide Notice Button Text",
    value: hideWarningButton,
    onChange: value => setAttributes({
      hideWarningButton: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), mediaType === 'youtube' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "youtube",
    "data-yid": ytResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'twitch' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "twitch",
    "data-tid": twitchResourceID,
    "data-parentname": twitchParentName,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'vimeo' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "vimeo",
    "data-vid": vmResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'dailymotion' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "dailymotion",
    "data-did": dailyMotionResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'googlemaps' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "googlemaps",
    "data-gid": gmResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'googlemapsv2' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "googlemapsv2",
    "data-gmapid": gmapv2ResourceID,
    "data-api": gmapv2API,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  })));
}

/***/ }),

/***/ "./src/blocks/iframe/index.js":
/*!************************************!*\
  !*** ./src/blocks/iframe/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/blocks/iframe/save.js":
/*!***********************************!*\
  !*** ./src/blocks/iframe/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

// import { __ } from '@wordpress/i18n';

function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    mediaType,
    ytResourceID,
    ytThumbnail,
    twitchResourceID,
    twitchParentName,
    vmResourceID,
    dailyMotionResourceID,
    gmResourceID,
    gmapv2API,
    gmapv2ResourceID,
    noticeText,
    loadVideoButton,
    hideWarningButton
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), mediaType === 'youtube' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "youtube",
    "data-yid": ytResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton //data-thumbnail={ ytThumbnail.url }
    ,
    "data-autoscale": true
  }), mediaType === 'twitch' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "twitch",
    "data-tid": twitchResourceID,
    "data-parentname": twitchParentName,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'vimeo' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "vimeo",
    "data-vid": vmResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton // data-thumbnail={vmThumbnail.url}
    ,
    "data-autoscale": true
  }), mediaType === 'dailymotion' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "dailymotion",
    "data-did": dailyMotionResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'googlemaps' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "googlemaps",
    "data-gid": gmResourceID,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }), mediaType === 'googlemapsv2' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ifm_iframe__wrapper",
    "data-service": "googlemapsv2",
    "data-gmapid": gmapv2ResourceID,
    "data-api": gmapv2API,
    "data-notice": noticeText,
    "data-loadbtn": loadVideoButton,
    "data-hidewarning": hideWarningButton,
    "data-autoscale": true
  }));
}

/***/ }),

/***/ "./src/utilities/colors-palette.js":
/*!*****************************************!*\
  !*** ./src/utilities/colors-palette.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const {
  __
} = wp.i18n;
const colors = [{
  name: __('Black', 'boilerplate'),
  color: '#000000'
}, {
  name: __('White', 'boilerplate'),
  color: '#ffffff'
}, {
  name: __('Red', 'boilerplate'),
  color: '#ff0000'
}, {
  name: __('Green', 'boilerplate'),
  color: '#00ff00'
}, {
  name: __('Blue', 'boilerplate'),
  color: '#0000ff'
}, {
  name: __('Yellow', 'boilerplate'),
  color: '#ffff00'
}];
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "./src/blocks/iframe/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/iframe/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/iframe/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/iframe/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/iframe/block.json":
/*!**************************************!*\
  !*** ./src/blocks/iframe/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"apiVersion":2,"name":"ifm/iframe","version":"0.1.0","title":"iFrame Manager Block","category":"ifm","icon":"video-alt2","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"attributes":{"content":{"type":"string","default":"Hello World!"},"color":{"type":"string","default":"#00ff00"},"mediaType":{"type":"string","default":"youtube"},"twitchResourceID":{"type":"string","default":"esl_csgo"},"twitchParentName":{"type":"string","default":"valvesoftware.com"},"ytResourceID":{"type":"string","default":"FfCE-R9UugU"},"vmResourceID":{"type":"string","default":"702055416"},"dailyMotionResourceID":{"type":"string","default":"x8i60lu"},"gmResourceID":{"type":"string","default":"!1m18!1m12!1m3!1d14529.923101878829!2d90.77410692743311!3d24.434099648106773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756918773180af5%3A0x530a9427210ef003!2sKishoreganj!5e0!3m2!1sen!2sbd!4v1679212510886!5m2!1sen!2sbd"},"gmapv2ResourceID":{"type":"string","default":"Space+Needle,Seattle+WA"},"gmapv2API":{"type":"string","default":""},"ytThumbnail":{"type":"object"},"vmThumbnail":{"type":"object"},"dailyMotionThumbnail":{"type":"object"},"noticeText":{"type":"string","default":"This content is hosted by a third party. By showing the external content you accept the terms and conditions of youtube.com."},"loadVideoButton":{"type":"string","default":"Load Video"},"hideWarningButton":{"type":"string","default":"Don\'t Ask Again"}},"textdomain":"ifm-manager","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkiframe_manager"] = self["webpackChunkiframe_manager"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/iframe/style-index"], function() { return __webpack_require__("./src/blocks/iframe/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map